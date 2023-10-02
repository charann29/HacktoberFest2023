export const LocalStorage = {
  // Set a key-value pair in localStorage
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("LocalStorage set error:", error);
    }
  },

  // Get the value associated with a key from localStorage
  get(key) {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
      console.error("LocalStorage get error:", error);
      return null;
    }
  },

  // Remove a key-value pair from localStorage
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("LocalStorage remove error:", error);
    }
  },

  // Clear all key-value pairs from localStorage
  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("LocalStorage clear error:", error);
    }
  },
};
