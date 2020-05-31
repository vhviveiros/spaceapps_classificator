import cv2
import numpy as np
from concurrent.futures.thread import ThreadPoolExecutor
from glob import glob
import os


class Image:
    def __init__(self, image_file):
        self.image_file = image_file
        self.data = self.__load_file()

    def __load_file(self, target_size=(512, 512), divide=False, reshape=False):
        img = cv2.imread(self.image_file, cv2.IMREAD_GRAYSCALE)
        if divide:
            img = img / 255
        img = cv2.resize(img, target_size)
        if reshape:
            img = np.reshape(img, img.shape + (1,))
            img = np.reshape(img, (1,) + img.shape)
        return img

    def save_to(self, path_dir):
        filename, fileext = os.path.splitext(os.path.basename(self.image_file))
        result_file = os.path.join(
            path_dir, "%s_processed%s" % (filename, fileext))
        cv2.imwrite(result_file, self.data)

    def shape(self):
        return self.data.shape


class ImageGenerator:
    def generate_from(self, path):
        image_files = glob(path + "/*g")
        for image_file in image_files:
            yield Image(image_file)

    def generate_image_data(self,
                            covid_path,
                            covid_masks_path,
                            non_covid_path,
                            non_covid_masks_path):
        with ThreadPoolExecutor() as executor:
            covid_images = executor.submit(self.generate_from, covid_path)
            covid_masks = executor.submit(self.generate_from, covid_masks_path)

            non_covid_images = executor.submit(
                self.generate_from, non_covid_path)
            non_covid_masks = executor.submit(
                self.generate_from, non_covid_masks_path)

            return [covid_images, covid_masks, non_covid_images, non_covid_masks]


class ImageSaver:
    def __init__(self, images):
        self.images = images

    def save_to(self, path_dir):
        for img in self.images:
            img.save_to(path_dir)


class ImageProcessor:

    def __init__(self, images, masks):
        self.images = images
        self.masks = masks

    def process_image(self, args):
        print("New job started")
        img, mask = args
        img.data = cv2.equalizeHist(img.data)
        imshape = img.shape()
        # print(imshape) = (512, 512)
        for i in range(0, imshape[0]):  # imshape[0] = 512
            for j in range(0, imshape[1]):  # imshape[1] = 512
                if mask.data[i][j] <= 20:
                    img.data[i][j] = 0
        print("Job finished")
        return img

    def process(self):
        with ThreadPoolExecutor() as executor:
            return executor.map(self.process_image, np.swapaxes(
                [self.images, self.masks], 0, 1))
