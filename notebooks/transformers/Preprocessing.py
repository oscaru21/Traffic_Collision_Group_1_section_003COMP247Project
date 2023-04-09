
import pandas as pd
from utils.DataHelper import DataHelper
from transformers.Transformers import *

class Preprocessing:
    def __init__(self, df:pd.DataFrame, binary_indices, cat_indices, num_indices, labels) -> None:
        self.__dataframe = df.copy()
        self.__labelcolumn = labels
        self.__catcolumn = cat_indices
        self.__numcolumn = num_indices
        self.__binarycolumn = binary_indices
        self.__keepcolumn = self.__catcolumn + self.__numcolumn + self.__binarycolumn + [self.__labelcolumn]
        
    def fillMissing(self,df:pd.DataFrame):
        df = FillMissing('ACCNUM','VEHTYPE').transform(df)
    def dropNull(self, df:pd.DataFrame):
        df_percentage_missing = DataHelper.get_col_by_missing_value_percentage(df,0,5,inclusive="right")
        df.dropna(subset=df_percentage_missing, inplace=True)
        df.reset_index(drop=True, inplace=True)
    def fillTime(self, df:pd.DataFrame):
        df['TIME'] = Time().transform(df['TIME'])
    def fillDates(self, df:pd.DataFrame):
        df[['DAY','MONTH']] = DayofWeekMonth().transform(df['DATE'])
    def replaceBinary(self, df:pd.DataFrame):
        df[self.__binarycolumn] = ReplaceValueBinary(value='yes',fillNullAsNo=True).transform(df[self.__binarycolumn])
    def handleFatalColumn(self, df:pd.DataFrame):
        df[self.__labelcolumn] = ReplaceValueBinary(value='Fatal',fillNullAsNo=False).transform(df[self.__labelcolumn])
    def getFrame(self):
        newdf=self.__dataframe.copy()
        self.dropNull(newdf)
        self.fillMissing(newdf)        
        self.fillTime(newdf)
        self.fillDates(newdf)
        self.replaceBinary(newdf)
        self.handleFatalColumn(newdf)
        newdf = newdf[self.__keepcolumn]
        return newdf




