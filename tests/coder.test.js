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
    currentSemester : 1,
    currentYear: 2016,
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

suite('Coder', function() {

  test('should create Coder object with only an object as a parameter', function() {
    var aCoderObj = getCoderObject();
    var newCoder = createCoder(aCoderObj);
    assert.isNotNull(newCoder);
    assert.instanceOf(newCoder, Coder);
    assert.equal(newCoder.name, aCoderObj.name);
    assert.equal(newCoder.surname, aCoderObj.surname);
    assert.equal(newCoder.secondName, aCoderObj.secondName);
    assert.equal(newCoder.secondSurname, aCoderObj.secondSurname);
    assert.equal(newCoder.currentSemester, aCoderObj.currentSemester);
    assert.equal(newCoder.currentYear, aCoderObj.currentYear);
    assert.equal(newCoder.teamId, aCoderObj.teamId);
  });

  test('should raise exception if given empty Coder object', function() {
    assertException(
    function(){
      new Coder({});
    },
    function(e){
      assert.equal(e.message, Coder.prototype.EMPTY_CODER_OBJECT);
    });
  });

  test('should raise exception if given an incomplete Coder object', function() {
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

  test('should not raise exception if given coder object without teamId', function() {
    var aCoderObj = getCoderObject();
    delete aCoderObj.teamId;
    var newCoder = new Coder(aCoderObj);
    assert.isNotNull(newCoder);
    assert.instanceOf(newCoder, Coder);
  });

});
