/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	// I add 3 fields name, email, state in customer table   nov-7
  	name: {
  		type: 'string',
  		required: true
  	},
  	email: {
  		type: 'string',
  		email: true
  	},
  	state: {
  		type: 'string'
  	}
  	// end of my add
  }
};

