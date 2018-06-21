'use strict';

const mysqlx = require('@mysql/xdevapi');

const options = {
    host: 'localhost',
    port: 33060,
    password: 'root',
    user: 'root',
    schema: 'burgers_db'
};

//https://dev.mysql.com/doc/dev/connector-nodejs/8.0/module-mysqlx.html
var connSchema = function() {
  mysqlx
    .getSession(options)
    .then(session => {
        return session
            .getSchema(options.schema)
            .then(schema => ({ schema, session }))
    })
    .catch(err => {
      console.log(err.stack);
      process.exit(1);
  });

  var connTables = function() {
    mysqlx
      .getSession(options)
      .then(session => {
          return session
              .getSchema(options.schema)
              .then(schema => ({ schema, session }))
      })
      .then(ctx => {
        return ctx.schema
            .getTables(schema)
            .then(tables => Object.assign(ctx, { table }))
      })
      .catch(err => {
        console.log(err.stack);
        process.exit(1);
    });