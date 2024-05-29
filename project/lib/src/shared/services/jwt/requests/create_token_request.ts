import jwt from "jsonwebtoken";
class CreateTokenRequest {
  public static async createToken(payload: string | object | Buffer): Promise<{
    status: boolean;
    data?: string;
  }> {
    let _token = jwt.sign(payload, `${process.env.SECRET_KEY}`);
    if (_token != null) {
      return {
        status: true,
        data: _token
      };
    } else {
      return {
        status: false
      };
    }
  }
}

export {CreateTokenRequest};
