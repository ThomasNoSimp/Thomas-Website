const crypto = require('crypto');

// Generate a random key
const randomKey = crypto.randomBytes(32).toString('hex');

console.log('Random Key:', randomKey);
