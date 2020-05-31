from image import ImageProcessor
import numpy as np
from concurrent.futures.thread import ThreadPoolExecutor


def process(covid_images, covid_masks, non_covid_images, non_covid_masks):
    cov_processor = ImageProcessor(
        list(covid_images.result()),
        list(covid_masks.result()))

    non_cov_processor = ImageProcessor(
        list(non_covid_images.result()),
        list(non_covid_masks.result()))

    with ThreadPoolExecutor() as executor:
        cov_processed = executor.submit(cov_processor.process)
        non_cov_processed = executor.submit(non_cov_processor.process)

    return [cov_processed, non_cov_processed]
