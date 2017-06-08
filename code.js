
// var accounts = [1,2,3,4];
//
//
// function fetchAccounts(user, callback) {
//   if (user.role === 'Admin') {
//       return callback(null, accounts)
//   }
//   return callback("You must be an admin to access this")
// }
//
// fetchAccounts({ name: 'luke', role: 'guest' }, function(err, accounts) {
//   if (err) {
//     return console.log("There was an error  fetching the account with this user and role. You received this message: ", err)
//   }
//   console.log("Here are your accounts: ", accounts);
// })

function fetchAccounts(user) {
  return new Promise(function(reject, resolve) {
    if (user.role === 'Admin') {
        return resolve(accounts);
    }
    return reject("You must be an admin to access this")
  })
}

fetchAccounts({ name: 'luke', role: 'guest' })
  .then(accounts => console.log("Here are your accounts: ", accounts))
  .then(somethingElse => convertSomethingElse(somethingElse))
  .then(convertedValue => console.log(convertedValue))
  .catch(err => console.log("There was an error  fetching the account with this user and role. You received this message: ", err));

const doSomething = word => word;

function doSomething(word) {
  return word
}.bind(this)
