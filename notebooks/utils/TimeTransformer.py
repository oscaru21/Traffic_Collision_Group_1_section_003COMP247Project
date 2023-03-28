from sklearn.base import TransformerMixin, BaseEstimator
import numpy as np
import pandas as pd

class TimeTransformer(BaseEstimator, TransformerMixin):
    def __init__(self) -> None:
        pass

    def transform(self, X: pd.DataFrame):
        #return [int(row // 100) for row in X]
        return X.apply(lambda row: (row//100) + 1 if int(str(row)[-2:]) > 30 else row//100)

    def fit(self, X):
        return self
    