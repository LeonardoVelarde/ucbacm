var Coder = function(aCoderObj){
  if(!(this instanceof Coder)){
    return new Coder(aCoderObj);
  }

  this.validateCoderObject(aCoderObj);

  this.name = aCoderObj.name;
  this.surname = aCoderObj.surname;
  this.secondName = aCoderObj.secondName;
  this.secondSurname = aCoderObj.secondSurname;
  this.currentSemester = aCoderObj.currentSemester;
  this.currentYear = aCoderObj.currentYear;
  this.teamId = aCoderObj.teamId;
};

Coder.prototype.validateCoderObject = function(aCoderObj){
  if(Object.keys(aCoderObj).length === 0){
    this.throwEmptyCoderObjectException();
  }

  if(Object.keys(aCoderObj).indexOf('teamId') !== -1 && Object.keys(aCoderObj).length < 7){
    this.throwInvalidCoderObjectException();
  }
};

Coder.prototype.INVALID_CODER_OBJECT = "Coder object parameter does not have the necessary properties";
Coder.prototype.EMPTY_CODER_OBJECT = "Coder object parameter has no properties";

Coder.prototype.throwEmptyCoderObjectException = function(){
  throw new Error(Coder.prototype.EMPTY_CODER_OBJECT);
};

Coder.prototype.throwInvalidCoderObjectException = function(){
  throw new Error(Coder.prototype.INVALID_CODER_OBJECT);
};

module.exports = Coder;
