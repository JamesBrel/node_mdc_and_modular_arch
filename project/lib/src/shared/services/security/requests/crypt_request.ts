import bcrypt from "bcrypt";

class CryptRequest {
  public static async encrypt(data: string) {
    const _saltRounds = 8;
    let _crypted = await bcrypt.hash(data, _saltRounds);
    return _crypted;
  }
}

export {CryptRequest};
