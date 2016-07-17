var libpath = process.env.UCBACM_COV ? '../models-cov' : '../models';
var Team = require( libpath + '/Team');
var assert = require('chai').assert;

describe('Team', function() {
  it('should create a non null team object', function() {
    var newTeam = new Team();
    assert.isNotNull(newTeam);
  });

  it('should create a team with score 0', function(){
    var newTeam = new Team();
    assert.equal(newTeam.score, 0);
  });
});
