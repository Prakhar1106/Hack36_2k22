import sys
import pickle
import numpy as np

print("Yoo")
file1 = open('../model1.pkl', 'rb')
clf1 = pickle.load(file1)
file1.close()

print("Yoo")

# Predicting locality name for new geo longitude, geo latitude
# NEED LONGITUDE & LATITUDE FROM BACKEND HERE!!!!
longitude = sys.argv[1]
latitude = sys.argv[2]

userdata = [[longitude,latitude]]

# Prediction By Random Forest Classifier
print(clf1.predict(userdata)) 