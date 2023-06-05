'use strict';

exports.getPortById = function(portId) {
  
  return new Promise(function(resolve, reject) {
    console.log('getPortById', portId)
    var examples = {};
    examples['application/json'] = {
  "name" : "green house",
  "id" : 10,
  "status" : "on"
};  
    console.log(examples[Object.keys(examples)[0]]);
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


exports.updatePort = function(status, portId) {
  
  return new Promise(function(resolve, reject) {
    console.log('updatePort', portId, status)
    resolve({ status: status,id: portId});
  });
}


exports.configPort = function(status, mode, name, portId) {
  
  return new Promise(function(resolve, reject) {
    console.log('configPort', portId, name, status, mode)
    resolve({id: portId, name: name, status: status, mode: mode});
  });
}
