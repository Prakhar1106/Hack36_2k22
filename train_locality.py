# Importing Libraries
import pandas as pd
import pickle
import sys
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Reading data
df = pd.read_csv('locality_db.csv')

# Feeding parameters 
feed = df[['Geo_Lon', 'Geo_Lat', 'Locality_Name']]

# Drop target column
df_train_x = feed.drop('Locality_Name',axis = 1)

# Target variable column
df_train_y = feed['Locality_Name']

# Train-test Splitting
x_train, x_test, y_train, y_test = train_test_split(df_train_x, df_train_y, test_size=0.20, random_state=42)

# Fitting Model
clf = RandomForestClassifier()
clf.fit(x_train, y_train)


# Decision Tree Model
file1 = open('model1.pkl', 'wb') 
pickle.dump(clf, file1)
file1.close()


# ynew = clf.predict_proba(userdata)
# print("Probability of Predicted class : ", np.max(ynew)*100)