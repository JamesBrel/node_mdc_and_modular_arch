import jwt, {JwtPayload} from "jsonwebtoken";
class VerifyTokenRequest {
  public static verifyToken(tokenWeb: string): string | JwtPayload {
    let _tokenDecoced = jwt.verify(tokenWeb, `${process.env.SECRET_KEY}`);
    return _tokenDecoced;
  }
}
export {VerifyTokenRequest};
