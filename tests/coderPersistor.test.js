var CoderPersistor = require('../models/CoderPersistor');
var Coder = require('../models/Coder');
var assert = require('chai').assert;
var pg = require('pg').native;
var Pool = pg.Pool;

var DBconfig = {
  user: 'postgres', //env var: PGUSER
  database: 'ucbacm', //env var: PGDATABASE
  password: 'postgres', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var connectionPool = new Pool(DBconfig);
var coderPersistor = new CoderPersistor(connectionPool);

function getCoderPseudoObject(){
  return {
    name : 'CoderName',
    surname : 'CoderSurname',
    secondName : 'CoderSecondName',
    secondSurname : 'CoderSecondSurname',
    semesterOfRegistration : '5',
    dateOfRegistration: new Date(),
    teamId : 0
  };
}

function assertException(closureToTry, assertionClosure){
  try {
    closureToTry();
    throw new Error("The closure you are trying to excec is not throwing exceptions!!");
  }
  catch (e) {
    assertionClosure(e);
  }
}

describe('CoderPersistor', function() {

  beforeEach(function(){
    connectionPool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('DELETE FROM coder;', function(err) {
        done();
        if(err) {
          return console.error('Error running query\n', err);
        }
      });
    });
  });

  it('should raise exception if given non Coder instance', function() {
    assertException(
    function(){
      coderPersistor.saveCoderToDB(getCoderPseudoObject());
    },
    function(e){
      assert.equal(e.message, CoderPersistor.prototype.INVALID_CODE_OBJECT);
    });
  });

  it('should be able to create new Coder record on database', function(finishTest) { // using this callback function you can test asynch operations
    var aCoder = new Coder(getCoderPseudoObject());
    coderPersistor.saveCoderToDB(aCoder, function(){
      connectionPool.connect(function(err, client, done) {
        if(err) {
          return console.error('error fetching client from pool', err);
        }
        client.query('SELECT name FROM coder;', function(err, result) {
          done();
          if(err) {
            return console.error('Error running query\n', err);
          }
          assert.equal(result.rows.length, 1);
          finishTest(); // by calling it you indicate that you finished the test and its assertions
        });
      });
    });
  });

});
