var Coder = require('../models/Coder');
var assert = require('chai').assert;

function createCoder(coderObject){
  return new Coder(coderObject);
}

function getCoderObject(){
  return {
    name : 'CoderName',
    surname : 'CoderSurname',
    secondName : 'CoderSecondName',
    secondSurname : 'CoderSecondSurname',
    semesterOfRegistration : '5',
    dateOfRegistration: new Date(),
    teamId : 0
  };
}

function assertException(closureToTry, assertionClosure){
  try {
    closureToTry();
    throw new Error("The closure you are trying to excec is not throwing exceptions!!");
  }
  catch (e) {
    assertionClosure(e);
  }
}

describe('Coder', function() {

  it('should create Coder object with only an object as a parameter', function() {
    var aCoderObj = getCoderObject();
    var newCoder = createCoder(aCoderObj);
    assert.isNotNull(newCoder);
    assert.instanceOf(newCoder, Coder);
    assert.equal(newCoder.name, aCoderObj.name);
    assert.equal(newCoder.surname, aCoderObj.surname);
    assert.equal(newCoder.secondName, aCoderObj.secondName);
    assert.equal(newCoder.secondSurname, aCoderObj.secondSurname);
    assert.equal(newCoder.semesterOfRegistration, aCoderObj.semesterOfRegistration);
    assert.equal(newCoder.dateOfRegistration, aCoderObj.dateOfRegistration);
    assert.equal(newCoder.teamId, aCoderObj.teamId);
  });

  it('should be able to create Coder object withput use of the new keyword', function() {
    var aCoderObj = getCoderObject();
    var newCoder = Coder(aCoderObj);
    assert.isNotNull(newCoder);
    assert.instanceOf(newCoder, Coder);
    assert.equal(newCoder.name, aCoderObj.name);
    assert.equal(newCoder.surname, aCoderObj.surname);
    assert.equal(newCoder.secondName, aCoderObj.secondName);
    assert.equal(newCoder.secondSurname, aCoderObj.secondSurname);
    assert.equal(newCoder.semesterOfRegistration, aCoderObj.semesterOfRegistration);
    assert.equal(newCoder.dateOfRegistration, aCoderObj.dateOfRegistration);
    assert.equal(newCoder.teamId, aCoderObj.teamId);
  });

  it('should raise exception if given empty Coder object', function() {
    assertException(
    function(){
      new Coder({});
    },
    function(e){
      assert.equal(e.message, Coder.prototype.EMPTY_CODER_OBJECT);
    });
  });

  it('should raise exception if given an incomplete Coder object', function() {
    assertException(
    function(){
      var aCoderObj = getCoderObject();
      delete aCoderObj.name;
      new Coder(aCoderObj);
    },
    function(e){
      assert.equal(e.message, Coder.prototype.INVALID_CODER_OBJECT);
    });
  });

  it('should not raise exception if given coder object without teamId', function() {
    var aCoderObj = getCoderObject();
    delete aCoderObj.teamId;
    var newCoder = new Coder(aCoderObj);
    assert.isNotNull(newCoder);
    assert.instanceOf(newCoder, Coder);
  });

});
