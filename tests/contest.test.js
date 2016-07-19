var Contest = require('../models/Contest');
var assert = require('chai').assert;

function createContest(){
  return new Contest('First Contest', new Date(2016, 3, 15), 'Advanced' );
}

describe('Contest', function() {

  it('should create a non null Contest object', function() {
    var newContest = createContest();
    assert.isNotNull(newContest);
    assert.instanceOf(newContest, Contest);
  });

  it('should create a named contest and retrieve its name', function() {
    var newContest = createContest();
    assert.equal(newContest.name, 'First Contest');
  });

  it('should create a contest with date and retrieve that date', function() {
    var contestDate = new Date(2016, 3, 15);
    var newContest = new Contest('First Contest', new Date(2016, 3, 15) );
    assert.equal(newContest.contestDate.getTime(), contestDate.getTime());
  });

  it('should create a categorized contest and retrieve its category', function() {
    var newContest = createContest();
    assert.equal(newContest.category, 'Advanced');
  });

});
