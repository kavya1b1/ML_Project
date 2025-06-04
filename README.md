# 🌸 Iris Flower Classification Using KNN

This project uses the Iris dataset to train a K-Nearest Neighbors (KNN) classifier. It includes data preprocessing, visualization, model training, and evaluation. and

## 📦 Libraries Used (as of now)

- pandas
- numpy
- matplotlib
- seaborn
- scikit-learn  


## 📁 Dataset Source

The dataset is loaded directly from the UCI Machine Learning Repository:  
🔗 [https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data](https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data)

## 📊 Features in the Dataset.

Each instance includes:

- `sepal_length` (in cm)
- `sepal_width` (in cm)
- `petal_length` (in cm)
- `petal_width` (in cm)
- `class`: Iris-setosa, Iris-versicolor, or Iris-virginica

## 🧪 Steps Performed So Far

### 1. Imported Libraries

```python
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report, accuracy_score
```

🚀 Next Steps
Perform Exploratory Data Analysis (EDA)

Visualize feature distributions and pairplots

Train KNN model and test its accuracy


