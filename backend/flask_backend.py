import json
import sys
from flask import Flask, request, jsonify
import traceback
import joblib
import numpy as np
import pandas as pd
from flask_cors import CORS
import geopandas as gpd
from shapely.geometry import Polygon, Point

from pipelines.DataPipeline import DataPipeline
from utils.Common import Config


app = Flask(__name__)
CORS(app)

def predict(json_, classifier):
    try:
        
        if classifier:
            print(classifier.__class__.__name__)
            # convert to dataframe
            df = pd.DataFrame(json_)
            X=df[Config.cat_attribs + Config.num_attribs + Config.binary_columns]
            
               
            # pass feature to pipeline and convert it to numerical data          
            X = datapipeline.transform(X)
            X = pd.DataFrame(X)
            prediction = list(classifier.predict(X))
            print({"prediction": str(prediction)})
            return jsonify({"prediction": str(prediction)})
        else:
            print("Train the model first")
            return "No model here to use"
    except:
        return jsonify({"trace": traceback.format_exc()})


@app.route("/")
def hello_world():
    return "Hello World!"


# use decorator pattern for the route
@app.route("/predict/svc", methods=["GET", "POST"])
def predictSVC():
    json_ = request.json
    print(json_)
    result = predict(json_, svc_clf)
    return result


# use decorator pattern for the route
@app.route("/predict/rf", methods=["GET", "POST"])
def predictRF():
    json_ = request.json
    result = predict(json_, rf_clf)
    return result


# use decorator pattern for the route
@app.route("/predict/knn", methods=["GET", "POST"])
def predictKNN():
    json_ = request.json
    result = predict(json_, knn_clf)
    return result


# use decorator pattern for the route
@app.route("/predict/ada", methods=["GET", "POST"])
def predictAda():
    json_ = request.json
    result = predict(json_, ada_clf)
    return result

@app.route("/predict/vote_hard", methods=["GET", "POST"])
def predictVotingHard():
    json_ = request.json
    result = predict(json_, voting_hard_clf)
    return result

@app.route("/predict/vote_soft", methods=["GET", "POST"])
def predictVotingSoft():
    json_ = request.json
    result = predict(json_, voting_soft_clf)
    return result

@app.route("/spatialquery", methods=["GET", "POST"])
def getCoordinates():
    json_ = request.json
    json_ = json.dumps(json_)
    print(json_)
    # load data from json_
    polyjson = json.loads(json_)
    polygon =  gpd.GeoDataFrame.from_features(polyjson, crs='EPSG:4326')
    polygon = polygon.to_crs('EPSG:4326')
    points = raw_data.apply(lambda row: Point(row['LONGITUDE'], row['LATITUDE']), axis=1)
    
    gdf = gpd.GeoDataFrame(raw_data, geometry=points, crs='EPSG:4326')
    contains = gdf.within(polygon.geometry.iloc[0])
    result_points = raw_data[contains][['INDEX_','LONGITUDE','LATITUDE']].to_json(orient='records')
    return result_points

try:
    port = int(sys.argv[1])  # This is for a command-line input
except:
    port = 12345  # If you don't provide any port the port will be set to 12345
    

datapipeline = joblib.load("../models/datapipeline.pkl")
svc_clf = joblib.load("../models/best_model_svc.pkl")
rf_clf = joblib.load("../models/best_model_random_forest.pkl")
knn_clf = joblib.load("../models/best_model_knn.pkl")
ada_clf = joblib.load("../models/best_model_adaboost.pkl")
voting_hard_clf = joblib.load("../models/best_model_voting_hard.pkl")
voting_soft_clf = joblib.load("../models/best_model_voting_soft.pkl")
raw_data = pd.read_csv("../data/raw/KSI.csv")


print("Model loaded")
app.run(port=port)