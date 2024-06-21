import { EncryptStorage } from 'encrypt-storage';

// Example of secret_key variable in an .env file
// const encryptStorage = new EncryptStorage(process.env.SECRET_KEY, options);
export const encryptStorage = new EncryptStorage('secret-key-value');

export const login = (data,navigate) => {
  encryptStorage.setItem("data", JSON.stringify(data));
  navigate(); 
};

export const logout = () => {
  encryptStorage.removeItem("data");
};

export const checkLogin = () => {
  const data = encryptStorage.getItem("data");
  if (data) {
    if (data.token && data.user) {
      return true;
    }
  }
  return false;
};

export const getToken = () => {
  if (checkLogin()) {
    const cred = encryptStorage.getItem("data");
    const token = cred.token;
    return token;
  }
  return null;
};

//getCurrent user

export const getCurrentUser = () => {
  if (checkLogin()) {
    const cred = encryptStorage.getItem("data");
    const user = cred.user;
    return user;
  }
  return null;
};
