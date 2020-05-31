# -*- coding: utf-8 -*-
"""
Created on Wed May 27 15:12:32 2020

@author: vhviv
"""
# %%Imports
import numpy as np
from sklearn.metrics import confusion_matrix
from sklearn.preprocessing import LabelEncoder, StandardScaler
import cv2
import os
from concurrent.futures import ThreadPoolExecutor
import pandas as pd

import datetime
import glob
import cnn
from sklearn.model_selection import train_test_split
import keras
from image import ImageGenerator

# %%Read images
covid_path = os.path.join('cov_processed')
non_covid_path = os.path.join('non_cov_processed')

X_train, X_test, y_train, y_test = ImageGenerator(
).generate_classificator_data(covid_path, non_covid_path)

# %%Create CNN model
model = cnn.model()

# %%Mostra a arquitetura de rede neural desenvolvida
model.summary()

# %%Insere a base de dados na rede neural proposta e realiza o treinamento
history = model.fit(X_train, y_train, batch_size=32, epochs=25, use_multiprocessing=True,
                    verbose=1, validation_data=(X_test, y_test))

# %%Read model
# model.load_weights('save_0.93_0.55.h5')

# %%Salva o treinamento
model.save('save.h5')

# %%Results
# Comando para executar Tensorboard
# tensorboard --logdir logs/
# print(history.history.keys())

pred = model.predict_classes(X_test)
test = y_test
matrix = confusion_matrix(pred, test)
print(matrix)


# %%
