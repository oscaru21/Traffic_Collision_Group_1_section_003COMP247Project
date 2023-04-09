from sklearn.base import BaseEstimator, TransformerMixin 
from datetime import datetime
import pandas as pd

class DayofWeekMonth(BaseEstimator, TransformerMixin): 
    def __init__(self): 
        #self.result = pd.DataFrame()
        pass 
    
    def fit(self, X: pd.DataFrame): 
        return self 
    
    def transform(self, X: pd.DataFrame): 
        #print(type(X))
        date = pd.to_datetime(X.squeeze(), format='%Y/%m/%d')
        #date = X.apply(lambda val: datetime.strptime(val[:10], '%Y/%m/%d'))
        #print(date)
        result = pd.DataFrame()
        result['DAY'] = date.apply(lambda x: datetime.weekday(x))
        result['MONTH'] = date.apply(lambda x: x.month)
        return result

class FillMissing(BaseEstimator, TransformerMixin):
    def __init__(self,group_col,value_col):
        self.group_col = group_col
        self.value_col = value_col
    
    def fit(self, X):
        return self
        
    def transform(self, X):
        # Separate the columns that will be updated
        update_cols = [self.group_col, self.value_col]
        
        # Create a copy of the dataframe to avoid modifying the original
        filled = X.copy()
        
        # Group the data by "ACCNUM" and fill in missing values
        X[update_cols] = X.groupby(self.group_col)[update_cols].ffill().bfill()

        return X

class Time(BaseEstimator, TransformerMixin):
    def __init__(self) -> None:
        pass

    def transform(self, X: pd.DataFrame):
        #return [int(row // 100) for row in X]
        return X.apply(lambda row: (row//100) + 1 if int(str(row)[-2:]) > 30 else row//100)

    def fit(self, X):
        return self

class YesNo(BaseEstimator, TransformerMixin):
    
    def __init__(self, fillNullAsNo = True):
        self.__fillNullAsNo = fillNullAsNo
    
    def fit(self, X):
        return self
        
    def transform(self, X: pd.DataFrame)->pd.DataFrame:
        if (self.__fillNullAsNo):
            X = X.fillna(0)        
        return X.apply(lambda row: [1 if str(cell).lower() =='yes' else cell for cell in row] )

class ReplaceValueBinary(BaseEstimator, TransformerMixin):
    def __init__(self, value:str, fillNullAsNo = True ):
        self.__fillNullAsNo = fillNullAsNo
        self.__value_to_replace = value
    def fit(self, X):
        return self        
    def transform(self, X: pd.DataFrame)->pd.DataFrame:
        if (self.__fillNullAsNo):
            X = X.fillna(0)
        if(type(X) is pd.Series):
            return X.apply(lambda cell: 1 if (str(cell).lower() == self.__value_to_replace.lower()) else 0)
        else:
            return X.apply(lambda row: [1 if (str(cell).lower() == self.__value_to_replace.lower()) else 0 for cell in row] )

