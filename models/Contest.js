var Contest = function(name, contestDate, category){
  if(!(this instanceof Contest)){
    return new Contest(name, contestDate, category);
  }
  this.name = name;
  this.contestDate = contestDate;
  this.category = category;
};

module.exports = Contest;
