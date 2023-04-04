import sys
from flask import Flask, request, jsonify
import traceback
import joblib
import numpy as np
import pandas as pd
model_columns = [Config.cat_attribs + Config.num_attribs + Config.binary_columns]


app = Flask(__name__)

def predict(json_, classifier):
    try:
        if classifier:
            # convert to dataframe
            new_df = pd.DataFrame(json_)
            new_df = new_df.reindex(columns=model_columns, fill_value=0)
            print(new_df)

            # ass feature to pipeline and convert it to numerical data
            dc = DataPipeline(Config.num_attribs,Config.cat_attribs)
            X = dc.process(X)

            prediction = list(classifier.predict(X))
            print({'prediction': str(prediction)})
            return jsonify({'prediction': str(prediction)})
        else:
            print ('Train the model first')
            return ('No model here to use')
    except:
        return jsonify({'trace': traceback.format_exc()}) 
    
@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route("/predict/svc", methods=['GET','POST']) #use decorator pattern for the route
def predictSVC():
    json_ = request.json
    result = predict(json_, svc_clf)
    return result

@app.route("/predict/rf", methods=['GET','POST']) #use decorator pattern for the route
def predictRF():
    json_ = request.json
    result = predict(json_, rf_clf)
    return result
    
@app.route("/predict/knn", methods=['GET','POST']) #use decorator pattern for the route
def predictKNN():
    json_ = request.json
    result = predict(json_, knn_clf)
    return result

if __name__ == '__main__':
    try:
        port = int(sys.argv[1]) # This is for a command-line input       
    except:
        port = 12345 # If you don't provide any port the port will be set to 12345
        
    svc_clf = joblib.load('../models/best_model_svc.pkl')
    rf_clf = joblib.load('../models/best_model_random_forest.pkl')
    knn_clf = joblib.load('../models/best_model_knn.pkl')
    print ('Model loaded')
    app.run(port=port)