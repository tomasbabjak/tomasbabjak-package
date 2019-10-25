module.exports = {
	testFunc
};

const chalk = require('chalk');

function testFunc(){
	console.log(chalk.blue('Hello World.'));
	return 'Hello World';
}