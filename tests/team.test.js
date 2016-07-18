var Team = require('../models/Team');
var assert = require('chai').assert;

function createOneMemberTeam(){
  return new Team('TeamName', ['First TeamMember']);
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
    assert.equal(newTeam.member1, 'First TeamMember');
  });

  it('should create a team with 3 team members and return their names', function(){
    var newTeam = new Team('', ['First TeamMember', 'Second TeamMember', 'Third TeamMember']);
    assert.equal(newTeam.member1, 'First TeamMember');
    assert.equal(newTeam.member2, 'Second TeamMember');
    assert.equal(newTeam.member3, 'Third TeamMember');
  });

  it('should have undefined team members creating a one member team', function(){
    var newTeam = createOneMemberTeam();
    assert.isUndefined(newTeam.member2);
    assert.isUndefined(newTeam.member3);
  });

});
