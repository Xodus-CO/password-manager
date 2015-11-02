console.log('starting password manager...');

var storage = require('node-persist');
storage.initSync();

// create
//   --name
//   --username
//   --password



// account.name ie Facebook
// acount.username ie  User12!
// account.password ie P@ssword123




function createAccount(account) {
	var accounts = storage.getItemSync('accounts');

	if(typeof accounts === 'undefined') {
		accounts = [];
	}

	// push on new account
	accounts.push(account);
	storage.setItemSync('accounts', accounts);

	return account;

}




function getAccount(accountName) {
	var accounts = storage.getItemSync('accounts');

	var matchedAccount;
	accounts.forEach (function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}


// createAccount({
// 	name: 'Facebook',
// 	username: 'User12@gmail.com',
// 	password: 'P@ssword123!'
// });

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);