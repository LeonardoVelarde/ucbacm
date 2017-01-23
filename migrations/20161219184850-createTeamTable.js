'use strict';
var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('team', {
    id: { type: 'int', primaryKey: true },
    name: 'string',
    member1id: 'int',
    member2id: 'int',
    member3id: 'int',
    score: 'int'
  });
};

exports.down = function(db) {
  return db.dropTable('team', function(err){
    if(err) {console.log(err);}
  });
};

exports._meta = {
  "version": 1
};
