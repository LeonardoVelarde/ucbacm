var Team = function(teamName, membersArray){
  if(!(this instanceof Team)){
    return new Team(membersArray);
  }
  if(membersArray !== undefined){
    this.member1 = membersArray[0];
    this.member2 = membersArray[1];
    this.member3 = membersArray[2];
  }
  else{
    throw new Error(this.noTeamMembersErrorMessage);
  }
  this.teamName = teamName;
  this.score = 0;
};

Team.prototype.noTeamMembersErrorMessage = 'No team members present';

module.exports = Team;
