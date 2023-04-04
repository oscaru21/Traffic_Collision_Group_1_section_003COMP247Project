
from sklearn.utils import resample
import pandas as pd
from imblearn.over_sampling import SMOTE


class Rebalancer:

    def process(self, df:pd.DataFrame, label):  
        df_majority = df[df[label]==0]
        df_minority = df[df[label]==1]
        # Upsample minority class
        df_minority_upsampled = resample(df_minority, 
                                        replace=True,       # sample with replacement
                                        n_samples=14246,    # to match majority class
                                        random_state=42)    # reproducible results

        # Combine majority class with upsampled minority class
        return pd.concat([df_majority, df_minority_upsampled])
