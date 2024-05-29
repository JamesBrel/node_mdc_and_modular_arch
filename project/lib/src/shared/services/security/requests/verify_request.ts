import bcrypt from "bcrypt";

class VerifyRequest {
  public static verifySync(dataHashed: string, originalData: string): boolean {
    let _isMatch = bcrypt.compareSync(originalData, dataHashed);
    return _isMatch;
  }
}

export {VerifyRequest};
