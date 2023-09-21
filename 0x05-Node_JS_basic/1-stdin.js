process.stdin.resume();
const prompt = require('prompt-sync')();

console.log('Welcome to Holberton School, what is your name?');
const name = prompt();
console.log(`Your name is: ${name}`);
process.on('exit', () => {
  console.log('This important software is now closing');
});
