'use strict';

const { userModel } = require( "../models/index" );


const saveUser = async ( req, res, next ) => {
    console.log(req.body)
    try {
        const username = await userModel.findOne( {
            where: {
                username: req.body.username
            }
        } );
        if ( username ) {
            return res.status( 409 ).send( 'Username already taken' );
        }
        const email = await userModel.findOne( {
            where: {
                email: req.body.email
            }
        } );
        if ( email ) {
            return res.status( 409 ).send( 'Email already taken' );
        }
        next();
    } catch ( e ) {
        console.log( e );
    }
};

module.exports = {
    saveUser
};