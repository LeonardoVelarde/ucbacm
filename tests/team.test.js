var Team = require('../models/Team');
var assert = require('chai').assert;

function createOneMemberTeam(){
  return new Team('TeamName', [1]);
}

describe('Team', function() {

  it('should create a non null Team object', function() {
    var newTeam = createOneMemberTeam();
    assert.isNotNull(newTeam);
    assert.instanceOf(newTeam, Team);
  });

  it('should create a team with score 0', function(){
    var newTeam = createOneMemberTeam();
    assert.equal(newTeam.score, 0);
  });

  it('should create a team with a name', function(){
    var newTeam = createOneMemberTeam();
    assert.equal(newTeam.teamName, 'TeamName');
  });

  it('should create a team with 1 team member and return his name', function(){
    var newTeam = createOneMemberTeam();
    assert.equal(newTeam.member1id, 1);
  });

  it('should create a team with 3 team members and return their names', function(){
    var newTeam = new Team('', [1, 2, 3]);
    assert.equal(newTeam.member1id, 1);
    assert.equal(newTeam.member2id, 2);
    assert.equal(newTeam.member3id, 3);
  });

  it('should have undefined team members creating a one member team', function(){
    var newTeam = createOneMemberTeam();
    assert.isUndefined(newTeam.member2id);
    assert.isUndefined(newTeam.member3id);
  });

  it('sould be able to create teams without new keyword', function(){
    var newTeam = Team('TeamName', [1, 2, 3]);
    assert.equal(newTeam.teamName, 'TeamName');
    assert.equal(newTeam.member1id, 1);
    assert.equal(newTeam.member2id, 2);
    assert.equal(newTeam.member3id, 3);
  });

});
