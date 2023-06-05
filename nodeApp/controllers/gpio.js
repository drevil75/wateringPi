'use strict';

var utils = require('../utils/writer.js');
var Port = require('../service/gpioService.js');

module.exports.getPortById = function getPortById (req, res, next, portId) {
  Port.getPortById(portId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePort = function updatePort (req, res, next, portId, name, status) {
  Port.updatePort(portId, name, status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.configPort = function configPort (req, res, next, portId, name, status, mode) {
  Port.configPort(portId, name, status, mode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
