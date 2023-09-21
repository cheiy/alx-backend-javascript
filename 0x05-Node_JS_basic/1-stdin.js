process.stdin.resume();
const prompt = require('prompt-sync')({ sigint: true });

const name = prompt('Welcome to Holberton School, what is your name?');
console.log(`Your name is: ${name}`);
process.on('exit', () => {
  console.log('This important software is now closing');
});
