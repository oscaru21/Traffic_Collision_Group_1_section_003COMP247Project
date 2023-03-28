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
