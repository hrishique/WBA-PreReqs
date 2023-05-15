const bs58 = require('bs58');

const pk = ''//enter your private key here
const bytes = bs58.decode(pk);

console.log(bytes)