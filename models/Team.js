var Team = function(teamName, memberIDsArray){
  if(!(this instanceof Team)){
    return new Team(teamName, memberIDsArray);
  }

  this.member1id = memberIDsArray[0];
  this.member2id = memberIDsArray[1];
  this.member3id = memberIDsArray[2];

  this.teamName = teamName;
  this.score = 0;
};

module.exports = Team;
