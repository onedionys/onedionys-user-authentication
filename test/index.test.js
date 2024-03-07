const assert = require('assert');
const UserAuthentication = require('../src/user-authentication');

describe('UserAuthentication', function() {
  describe('#register()', function() {
    it('should register a new user', function() {
      const auth = new UserAuthentication();
      assert.strictEqual(auth.register('testuser', 'password123'), true);
    });

    it('should not register an existing user', function() {
      const auth = new UserAuthentication();
      auth.register('existinguser', 'password123');
      assert.strictEqual(auth.register('existinguser', 'password123'), false);
    });
  });

  describe('#authenticate()', function() {
    it('should authenticate user credentials', function() {
      const auth = new UserAuthentication();
      auth.register('testuser', 'password123');
      assert.strictEqual(auth.authenticate('testuser', 'password123'), true);
    });

    it('should not authenticate invalid credentials', function() {
      const auth = new UserAuthentication();
      auth.register('testuser', 'password123');
      assert.strictEqual(auth.authenticate('testuser', 'wrongpassword'), false);
      assert.strictEqual(auth.authenticate('unknownuser', 'password123'), false);
    });
  });

  describe('#logout()', function() {
    it('should logout a user', function() {
      const auth = new UserAuthentication();
      auth.register('testuser', 'password123');
      assert.strictEqual(auth.logout('testuser'), true);
    });

    it('should not logout an unknown user', function() {
      const auth = new UserAuthentication();
      assert.strictEqual(auth.logout('unknownuser'), false);
    });
  });
});
