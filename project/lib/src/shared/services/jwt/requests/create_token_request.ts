import jwt from "jsonwebtoken";
class CreateTokenRequest {
  public static async createToken(
    payload: string | object | Buffer
  ): Promise<string> {
    let _token = jwt.sign(payload, `${process.env.SECRET_KEY}`);
    return _token;
  }
}

export {CreateTokenRequest};
