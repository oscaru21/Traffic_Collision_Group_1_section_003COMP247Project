import pandas as pd

class DataHelper:
    def get_categorical_index(df:pd.DataFrame):
        return df.dtypes[df.dtypes == 'object'].index
    def get_numerical_index(df:pd.DataFrame):
        return df.dtypes[df.dtypes != 'object'].index
    def get_binary_cols(df:pd.DataFrame):
        categorical_cols = df.dtypes[df.dtypes == 'object'].index
        return [i for i in categorical_cols if df[i].nunique() == 1]
    def get_col_by_missing_value_percentage(df:pd.DataFrame,min,max,inclusive="both")->pd.Index:
        """
        min: min percentage
        max: max percentage
        inclusive : {"both", "neither", "left", "right"}
        """
        df_percentage_missing = (df.isnull().mean() * 100 )
        df_percentage_missing = df_percentage_missing[df_percentage_missing.between(min,max,inclusive =inclusive)]
        return df_percentage_missing.index