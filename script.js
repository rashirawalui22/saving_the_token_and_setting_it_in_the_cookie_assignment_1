const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key'; 

const encrypt = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

const decrypt = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error('Invalid or expired token:', error.message);
    return null;
  }
};


const testEncryption = () => {
  const payload = { userId: 123, role: 'admin' };
  
  const token = encrypt(payload);
  console.log('Encrypted Token:', token);
  
  const decoded = decrypt(token);
  console.log('Decoded Payload:', decoded);
  
  if (decoded && decoded.userId === payload.userId && decoded.role === payload.role) {
    console.log('Success');
  } else {
    console.log('Failure');
  }
};


testEncryption();

module.exports = { encrypt, decrypt };