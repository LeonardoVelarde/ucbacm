var Exercise = function(name, category, difficulty, descriptionArray){
  this.name = name;
  this.category = category;
  this.difficulty = difficulty;
  this.description = [];
  for(var i = 0; i < descriptionArray.length; i++){
    this.description.push(this.escapeHTML(descriptionArray[i]));
  }
};

Exercise.prototype.escapeHTML = require('escape-html');

module.exports = Exercise;
