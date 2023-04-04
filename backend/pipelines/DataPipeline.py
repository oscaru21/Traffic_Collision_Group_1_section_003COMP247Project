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
        self.__converted_columns = []

    @property
    def cat_pipeline(self):
        return self.__cat_pipeline

    @property
    def num_pipeline(self):
        return self.__num_columns

    @property
    def converted_columns(self):
        return self.__converted_columns
       
    def process(self, df: pd.DataFrame):
        ct = ColumnTransformer([('scaler', self.__num_pipeline, self.__num_columns),
                        ("cat", self.__cat_pipeline, self.__cat_columns)]
                        , remainder='passthrough')
        new_data = ct.fit_transform(df)
        self.__converted_columns = ct.get_feature_names_out()
        return pd.DataFrame(new_data)