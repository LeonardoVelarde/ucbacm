var Coder = require('../models/Coder');

var CoderPersistor = function(aPoolConnection){
  this.poolConnection = aPoolConnection;
};

CoderPersistor.prototype.validateCoderObject = function(aCoderObj){
  if(!(aCoderObj instanceof Coder)){
    throw new Error(this.INVALID_CODE_OBJECT);
  }
};

CoderPersistor.prototype.saveCoderToDB = function(aCoderObj, callback){
  this.validateCoderObject(aCoderObj);
  var aQuery = 'INSERT INTO coder ("'+Object.keys(aCoderObj).join('", "')+'") VALUES ($1, $2, $3, $4, $5, $6, $7);';
  this.poolConnection.connect(function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query(aQuery, [aCoderObj.name, aCoderObj.surname, aCoderObj.secondName, aCoderObj.secondSurname, aCoderObj.semesterOfRegistration, aCoderObj.dateOfRegistration, aCoderObj.teamId], function(err) {
      if(err){
        console.log(err);
      }
      done();
      if(callback){
        callback();
      }
    });
  });
};

CoderPersistor.prototype.INVALID_CODE_OBJECT = "Coder object is not instance of Coder model.";

module.exports = CoderPersistor;
