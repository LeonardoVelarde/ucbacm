var Coder = function(aCoderPseudoObj){
  if(!(this instanceof Coder)){
    return new Coder(aCoderPseudoObj);
  }

  this.validateCoderObject(aCoderPseudoObj);

  this.name = aCoderPseudoObj.name;
  this.surname = aCoderPseudoObj.surname;
  this.secondName = aCoderPseudoObj.secondName;
  this.secondSurname = aCoderPseudoObj.secondSurname;
  this.semesterOfRegistration = aCoderPseudoObj.semesterOfRegistration;
  this.dateOfRegistration = aCoderPseudoObj.dateOfRegistration;
  this.teamId = aCoderPseudoObj.teamId || -1;
};

Coder.prototype.validateCoderObject = function(aCoderPseudoObj){
  if(Object.keys(aCoderPseudoObj).length === 0){
    this.throwEmptyCoderObjectException();
  }

  if(Object.keys(aCoderPseudoObj).indexOf('teamId') !== -1 && Object.keys(aCoderPseudoObj).length < 7){
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
