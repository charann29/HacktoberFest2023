import { LocalStorage } from "./LocalStorage";
import { AES, enc } from "crypto-js";

const SECRET = process.env.SECRET;

// User authentication functions
export const Auth = {
  // Check if user exists
  exists(username) {
    const users = LocalStorage.get("users") || [];
    const user = users.find((u) => u.username === username);
    return user ? !!user.username : false;
  },

  // Register a new user
  register(username, password, email) {
    const users = LocalStorage.get("users") || [];
    const exists = users.find((x) => x.username === username);
    if (exists) throw new Error(`User ${username} is already registered`);
    const encryptedPassword = AES.encrypt(password, SECRET).toString();
    users.push({ username, password: encryptedPassword, email });
    LocalStorage.set("users", users);
  },

  // Authenticate a user
  login(username, password) {
    const users = LocalStorage.get("users") || [];
    const user = users.find((u) => {
      // Decrypt password
      const bytes = AES.decrypt(u.password, SECRET);
      const originalPassword = bytes.toString(enc.Utf8);
      return u.username === username && password === originalPassword;
    });
    if (user) {
      LocalStorage.set("currentUser", username);
      return true; // Authentication successful
    }
    return false; // Authentication failed
  },

  // Logout the current user
  logout() {
    LocalStorage.remove("currentUser");
  },

  // Check if a user is authenticated
  isAuthenticated() {
    console.log("isAuthenticated()");
    return !!LocalStorage.get("currentUser");
  },

  // Get the current authenticated user
  getCurrentUser() {
    return LocalStorage.get("currentUser");
  },
};
