var Coder = require('Coder');

function CoderPersistor(){
}

CoderPersistor.prototype.validateCoderObject = function(aCoderObj){
  if(!(aCoderObj instanceof Coder)){
    throw new Error(this.prototype.INVALID_CODE_OBJECT);
  }
};

CoderPersistor.prototype.saveToDB = function(aCoderObj){
  this.validateCoderObject(aCoderObj);
};

CoderPersistor.prototype.INVALID_CODE_OBJECT = "Coder object is not instance of Coder model.";
