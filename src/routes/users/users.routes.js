'use strict';

// const { signup, allUser, login } = require( '../controllers/user.controller' );
const bearerAuth = require('../../middlewares/bearerAuth');
const { saveUser } = require('../../middlewares/userAuth');
const { signup, allUser, login } = require('./users.controller');

const userRouter = require( 'express' ).Router();

userRouter.post( '/signin', login );
userRouter.post( '/signup', saveUser, signup );
userRouter.get( '/users', bearerAuth, allUser );


module.exports = {
    userRouter,
  };
  