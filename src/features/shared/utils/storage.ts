export type STORAGE_KEY = 'user';

export const getItem = (item: STORAGE_KEY) => {
  try {
    const value = window.localStorage.getItem(item);
    if (!value) {
      return false;
    }
    const parsedValue = JSON.parse(value);
    return parsedValue;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const setItem = (item: STORAGE_KEY, value: any) => {
  try {
    const stringValue = JSON.stringify(value);
    window.localStorage.setItem(item, stringValue);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const removeItem = (item: STORAGE_KEY) => {
  try {
    window.localStorage.removeItem(item);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
