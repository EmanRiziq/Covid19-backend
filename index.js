"use strict";

'use strict';

require('dotenv').config();
const server = require('./src/server');
const { db } = require('./src/models/index');


db
  .sync({
    // force: true
  })
  .then(() => {
    server(PORT);
  })
  .catch((e) => console.error);
