var Exercise = require('../models/Exercise');
var assert = require('chai').assert;

function createExcersice(){
  return new Exercise('ExcerciseName', 'AdvancedCategory', 5, ['line1', 'line2'].join(''));
}

describe('Exercise', function() {

  it('should create a non null Exercise object', function() {
    var newExercise = createExcersice();
    assert.isNotNull(newExercise);
    assert.instanceOf(newExercise, Exercise);
  });

  it('should create an excercise with name, category and difficulty then get them', function(){
    var newExercise = createExcersice();
    assert.equal(newExercise.name, 'ExcerciseName');
    assert.equal(newExercise.category, 'AdvancedCategory');
    assert.equal(newExercise.difficulty, 5);
  });

  it('should create an excercise with a single line description stirng', function(){
    var newExercise = new Exercise('ExcerciseName', 'AdvancedCategory', 5, 'descriptionLine');
    assert.equal(newExercise.descriptionString, 'descriptionLine');
  });

  it('should create an excercise and save description escaping HTML tags', function(){
    var newExercise = new Exercise('ExcerciseName', 'AdvancedCategory', 5, '<strong></strong>line2');
    assert.equal(newExercise.descriptionString, '&lt;strong&gt;&lt;/strong&gt;line2');
  });

  it('should create an excercise with a multi line description stirng', function(){
    var newExercise = new Exercise('ExcerciseName', 'AdvancedCategory', 5, 'descriptionLine');
    assert.equal(newExercise.descriptionString, 'descriptionLine');
  });

});
