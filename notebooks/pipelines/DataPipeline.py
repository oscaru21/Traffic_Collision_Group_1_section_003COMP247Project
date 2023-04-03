import pandas as pd 
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

class DataPipeline:
    def __init__(self, num_columns, cat_columns) -> None:
        self.__num_pipeline = Pipeline([
            ('imputer', SimpleImputer(strategy="median")),
            ('std_scaler', StandardScaler())
        ])
        self.__cat_pipeline = Pipeline([
            ('cat', OneHotEncoder(drop='first',sparse=False, handle_unknown='ignore'))
        ])
        self.__num_columns = num_columns
        self.__cat_columns = cat_columns

    def process(self, df: pd.DataFrame):
        ct = ColumnTransformer([('scaler', self.__num_pipeline, self.__num_columns),
                        ("cat", self.__cat_pipeline, self.__cat_columns)]
                        , remainder='passthrough')
        
        return pd.DataFrame(ct.fit_transform(df))