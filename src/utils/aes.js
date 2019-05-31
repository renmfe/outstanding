import CryptoJS from 'crypto-js/crypto-js'


export default function Decrypt(word) {
    var key = CryptoJS.enc.Utf8.parse("123");
    var decrypted = CryptoJS.AES.decrypt(word, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
    return decrypted;
  }　