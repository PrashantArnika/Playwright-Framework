let cryptoJSUtil = require("crypto-js");

const SALT = process.env.SALT || "defaultSalt";

export function encrypt(text){
    const cipherText = cryptoJSUtil.AES.encrypt(text,SALT).toString();
    return cipherText;
}

export function decrypt(cipherText){
    const bytes = cryptoJSUtil.AES.decrypt(cipherText,SALT);
    const originalText = bytes.toString(cryptoJSUtil.enc.Utf8);
    return originalText;
}