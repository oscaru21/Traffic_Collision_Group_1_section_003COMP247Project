
class Config:
    #cat_attribs = ['VEHTYPE', 'ROAD_CLASS', 'LOCCOORD', 'DISTRICT', 'TRAFFCTL', 'LIGHT', 'RDSFCOND', 'VISIBILITY', 'INVTYPE', 'IMPACTYPE', 'INVAGE']
    #num_attribs = ['YEAR', 'TIME', 'LATITUDE', 'LONGITUDE', 'MONTH', 'DAY']
    #binary_columns = ['PEDESTRIAN', 'CYCLIST', 'AUTOMOBILE', 'MOTORCYCLE', 'TRUCK', 'TRSN_CITY_VEH', 'EMERG_VEH', 'PASSENGER', 'SPEEDING', 'AG_DRIV', 'REDLIGHT', 'ALCOHOL', 'DISABILITY']
    
    cat_attribs = ['VEHTYPE', 'ROAD_CLASS', 'LOCCOORD', 'DISTRICT', 'TRAFFCTL', 'LIGHT', 'RDSFCOND', 'INVTYPE', 'IMPACTYPE', 'INVAGE']
    num_attribs = ['YEAR', 'TIME', 'LATITUDE', 'LONGITUDE', 'MONTH', 'DAY']
    binary_columns = ['PEDESTRIAN', 'CYCLIST', 'AUTOMOBILE', 'TRUCK', 'TRSN_CITY_VEH', 'PASSENGER',  'SPEEDING', 'AG_DRIV']

 
    #cat_attribs = ['VEHTYPE', 'ROAD_CLASS', 'DISTRICT', 'TRAFFCTL', 'LIGHT', 'INVTYPE', 'IMPACTYPE', 'INVAGE']
    #num_attribs = ['YEAR', 'TIME', 'LATITUDE', 'LONGITUDE', 'MONTH', 'DAY']
    #binary_columns = ['PEDESTRIAN', 'TRUCK', 'SPEEDING', 'AG_DRIV']


    label = 'ACCLASS'
    test_size = 0.2

