let user = {username: 'Eli', password: 'batman'}

// first style (object.property) is usually used
console.log(user.username)
console.log(user['username'])

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])

user.password = 'hippopotamus'
console.log(user)

user.email = 'eli@email.com'
console.log(user.email)

// values can be many types of things: strings, lists, etc.
let user2 = {
    username: 'Eli',
    password: 'something',
    userid: 1,
    roles: ['user', 'admin'],   // array
    contact: {                  // nested object
        phone: '123-456-7890',
        email: 'eli@college.edu'
    }
}

user2.salary = 150000
user2.roles.push('server admin')
user2.contact.location = 'Minneapolis'
console.log(user2)
