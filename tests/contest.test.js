var Contest = require('../models/Contest');
var assert = require('chai').assert;

describe('Contest', function() {

  it('should create a non null Contest object', function() {
    var newContest = new Contest();
    assert.isNotNull(newContest);
    assert.instanceOf(newContest, Contest);
  });

});
