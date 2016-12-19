var fs = require('fs');
var path = require('path');
var YAML = require('yamljs');

exports.getMeasuresData = function(version) {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, 'versions', version, 'measures-data.json')));
}

exports.getMeasuresSchema = function(version) {
  return YAML.load(
    path.join(__dirname, 'versions', version, 'measures-schema.yaml'));
}