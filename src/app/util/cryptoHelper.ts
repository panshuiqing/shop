import * as crypto from 'crypto';
const password: string = "aoxuelf@2017";
const algorithm: string = "aes-128-cbc";

export class CryptoHelper {
  encode(data: string): string {
    let cipher = crypto.createCipher(algorithm, password);
    cipher.update(data, 'utf8', 'hex');
    return cipher.final('hex');
  }

  decode(data: string): string {
    let decipher = crypto.createDecipher(algorithm, password);
    decipher.update(data, 'hex', 'utf8');
    return decipher.final('utf8');
  }
}

export var cryptoHelper: CryptoHelper = new CryptoHelper();