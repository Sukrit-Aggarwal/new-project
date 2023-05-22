from flask import Flask, jsonify, request
import requests, json
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def index():
    return "Hello"



@app.route('/fulllist/scope')
def getScope():
    url1 = "https://aud-api-prd.gob.amadeus.net/fulllist/scope"
    response = requests.get(url1, verify = False)
    name_id = request.args.get('name')
    if(name_id):
        data = response.json()["scope"]
        temp = [x for x in data if x["name"] == name_id]
        return {"scope" : temp}
    else:
        return response.json()



@app.route('/fulllist/component')
def getComponent():
    url1 = "https://aud-api-prd.gob.amadeus.net/fulllist/component"
    response = requests.get(url1, verify = False)
    
    name_id = request.args.get('name')
    scp_id = request.args.get('scope')
    sj_id = request.args.get('sj')

    if(name_id):
        data = response.json()["component"]
        temp = [x for x in data if x["name"] == name_id]
        return {"component" : temp}
    if(scp_id):
        data = response.json()["component"]
        temp = [x for x in data if x["scope"] == scp_id]
        return {"component" : temp}
    if(sj_id):
        data = response.json()["component"]
        temp = [x for x in data if x["security_justification"] != None]
        return {"component" : temp}
    else:
        return response.json()



@app.route('/fulllist/component_instance')
def getCompInst():
    url1 = "https://aud-api-prd.gob.amadeus.net/fulllist/component_instance"
    response = requests.get(url1, verify = False)
    name_id = request.args.get('name')
    comp_id = request.args.get('component')
    sj_id = request.args.get('sj')
    scp_id = request.args.get('scope')

    if(name_id):
        data = response.json()["component_instance"]
        temp = [x for x in data if x["name"] == name_id]
        return {"component_instance" : temp}
    if(comp_id):
        data = response.json()["component_instance"]
        temp = [x for x in data if x["component"] == comp_id]
        return {"component_instance" : temp}
    if(sj_id):
        data = response.json()["component_instance"]
        temp = [x for x in data if x["security_justification"] != None]
        return {"component_instance" : temp}
    if(scp_id):
        data = response.json()["component_instance"]
        temp = [x for x in data if x["scope"] == scp_id]
        return {"component_instance" : temp}
    else:
        return response.json()


@app.route('/fulllist/service')
def getService():
    url1 = "https://aud-api-prd.gob.amadeus.net/fulllist/service"
    response = requests.get(url1, verify = False)
    name_id = request.args.get('name')
    scp_id = request.args.get('scope')
    comp_id = request.args.get('component')
    if(name_id):
        data = response.json()["service"]
        temp = [x for x in data if x["name"] == name_id]
        return {"service" : temp}
    if(scp_id):
        data = response.json()["service"]
        temp = [x for x in data if x["scope"] == scp_id]
        return {"service" : temp}
    if(comp_id):
        data = response.json()["service"]
        temp = [x for x in data if x["component"] == comp_id]
        return {"service" : temp}
    else:
        return response.json()


@app.route('/fulllist/dependency')
def getDependency():
    url1 = "https://aud-api-prd.gob.amadeus.net/fulllist/dependency"
    response = requests.get(url1, verify = False)
    scp_id = request.args.get('scope')
    comp_id = request.args.get('component')
    if(scp_id):
        data = response.json()["dependency"]
        temp = [x for x in data if x["scope"] == scp_id]
        return {"dependency" : temp}
    if(comp_id):
        data = response.json()["dependency"]
        temp = [x for x in data if ((x["source_component"] == comp_id) or (x["target_component"] == comp_id))]
        return {"dependency" : temp}
    else:
        return response.json()


@app.route('/fulllist/dependency_instance')
def getDepInst():
    url1 = "https://aud-api-prd.gob.amadeus.net/fulllist/dependency_instance"
    response = requests.get(url1, verify = False)
    scp_id = request.args.get('scope')
    if(scp_id):
        data = response.json()["dependency_instance"]
        temp = [x for x in data if x["scope"] == scp_id]
        return {"dependency_instance" : temp}
    else:
        return response.json()


@app.route('/fulllist/ipaddress_instance')
def getIPAddInst():
    url1 = "https://aud-api-prd.gob.amadeus.net/fulllist/ipaddress_instance"
    response = requests.get(url1, verify = False)
    scp_id = request.args.get('scope')
    if(scp_id):
        data = response.json()["ipaddress_instance"]
        temp = [x for x in data if x["scope"] == scp_id]
        return {"ipaddress_instance" : temp}
    else:
        return response.json()


# API calls with name filters ##########################################


# @app.route('/fulllist/service/name/<name_id>')
# def getServiceByName(name_id):
#     url1 = "https://aud-api-prd.gob.amadeus.net/fulllist/service"
#     response = requests.get(url1, verify = False)
#     data = response.json()["service"]

#     temp = [x for x in data if x["name"] == name_id]
#     return {"service" : temp}


# To just list object names ##########################################


# @app.route('/fulllist/scope/names')
# def getScopeName():
#     url1 = "https://aud-api-prd.gob.amadeus.net/fulllist/scope"
#     response = requests.get(url1, verify = False)
#     data = response.json()["scope"]

#     temp = [x["name"] for x in data]
#     return {"scope_names" : temp}


# @app.route('/fulllist/component/names')
# def getComponentName():
#     url1 = "https://aud-api-prd.gob.amadeus.net/fulllist/component"
#     response = requests.get(url1, verify = False)
#     data = response.json()["component"]

#     temp = [x["name"] for x in data]
#     return {"component_names" : temp}



if __name__ == "__main__":
    app.run(debug=True)

