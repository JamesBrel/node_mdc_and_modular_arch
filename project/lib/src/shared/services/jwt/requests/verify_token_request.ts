import jwt from "jsonwebtoken";
class VerifyTokenRequest {
  public static verifyToken(tokenWeb: string): {status: boolean; data?: any} {
    let _tokenDecoced = jwt.verify(tokenWeb, `${process.env.SECRET_KEY}`);
    if (_tokenDecoced == null) {
      return {
        status: false
      };
    } else {
      return {
        status: true,
        data: _tokenDecoced
      };
    }
  }
}
export {VerifyTokenRequest};
