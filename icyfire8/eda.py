import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load dataset
df = pd.read_csv("dataset.csv")

# -----------------------
# Basic inspection
# -----------------------
print("First 5 rows:")
print(df.head())

print("\nDataset shape:")
print(df.shape)

print("\nDataset info:")
print(df.info())

# -----------------------
# Missing values
# -----------------------
print("\nMissing values:")
print(df.isnull().sum())

# Handle missing values
df['Age'].fillna(df['Age'].median(), inplace=True)
df['Embarked'].fillna(df['Embarked'].mode()[0], inplace=True)

# -----------------------
# Basic statistics
# -----------------------
print("\nBasic statistics:")
print(df.describe())

# -----------------------
# Visualizations
# -----------------------

# 1️⃣ Survival count
plt.figure(figsize=(5, 4))
sns.countplot(x='Survived', data=df)
plt.title("Survival Count")
plt.show()

# 2️⃣ Age distribution
plt.figure(figsize=(6, 4))
plt.hist(df['Age'], bins=30)
plt.title("Age Distribution")
plt.xlabel("Age")
plt.ylabel("Count")
plt.show()

# 3️⃣ Survival by gender
plt.figure(figsize=(5, 4))
sns.countplot(x='Sex', hue='Survived', data=df)
plt.title("Survival by Gender")
plt.show()
