let db = require('./db.js');
module.exports.handleSignup = (email, password) => {
    // Check if the email already exist
    // Save the user to DB
    db.saveUser({email, password})
    // Send the welcome email
};