class UserAuthentication {
    constructor() {
      this.users = new Map(); // Store user credentials
    }
  
    // Method to register a new user
    register(username, password) {
      if (!this.users.has(username)) {
        this.users.set(username, password);
        return true;
      }
      return false; // Username already exists
    }
  
    // Method to authenticate user credentials
    authenticate(username, password) {
      if (this.users.has(username) && this.users.get(username) === password) {
        return true; // Authentication successful
      }
      return false; // Authentication failed
    }
  
    // Method to logout user
    logout(username) {
      if (this.users.has(username)) {
        // Implement logout logic if needed
        return true; // Logout successful
      }
      return false; // User not found
    }
  }
  
  module.exports = UserAuthentication;
  