var Team = function(teamName, membersArray){
  if(!(this instanceof Team)){
    return new Team(teamName, membersArray);
  }

  this.member1 = membersArray[0];
  this.member2 = membersArray[1];
  this.member3 = membersArray[2];

  this.teamName = teamName;
  this.score = 0;
};

module.exports = Team;
