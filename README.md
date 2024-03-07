<h1 align="center">Welcome to One Dionys - User Authentication! 👋 </h1>

<p align="center">A component for managing user authentication in web applications. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-user-authentication?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-user-authentication?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-user-authentication?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-user-authentication?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-user-authentication.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-user-authentication?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-user-authentication?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const UserAuthentication = require('./src/user-authentication');

// Initialize User Authentication
const auth = new UserAuthentication();

// Register a new user
auth.register('username', 'password');

// Authenticate user credentials
const isAuthenticated = auth.authenticate('username', 'password');
console.log('User authenticated:', isAuthenticated);

// Logout user
const isLoggedOut = auth.logout('username');
console.log('User logged out:', isLoggedOut);
```

#### Explanation

* `register(username, password)`: Registers a new user with the provided username and password. Returns true if registration is successful, false if the username already exists.
* `authenticate(username, password)`: Authenticates user credentials. Returns true if authentication is successful, false otherwise.
* `logout(username)`: Logs out the user with the given username. Returns true if logout is successful, false if the user is not found.

#### Return Value

* `register(username, password)`: Returns true if user registration is successful.
* `authenticate(username, password)`: Returns true if user authentication is successful.
* `logout(username)`: Returns true if user logout is successful.

## 📆 Release Date

* v1.0.0 : 07 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - User Authentication is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - User Authentication? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
