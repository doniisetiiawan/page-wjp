export default {
  get(key, defaultValue) {
    const value = window.localStorage.getItem(key);

    const decoded = JSON.parse(value);

    if (decoded) {
      return decoded;
    }

    return defaultValue;
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};
