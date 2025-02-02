import {NextFunction, Request, Response} from "express";
import httpStatus from "http-status";
import {VerifyTokenRequest} from "../services/jwt/requests/verify_token_request.js";

/**
 * Verifies the token in the request header and sets the user data in the request object.
 * @name verifyTokenMiddle
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {void}
 */
const verifyTokenMiddle = (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  let authToken = _req.header("Authorization");

  if (!authToken) {
    _res.status(httpStatus.NOT_FOUND).json("You are not authenticated !");
  } else if (!authToken.startsWith("Bearer")) {
    _res.status(httpStatus.BAD_REQUEST).json("You are not authenticated !");
  } else if (!authToken.split(" ")[1]) {
    _res.status(httpStatus.NOT_FOUND).json("You are not authenticated !");
  } else {
    const token = authToken.split(" ")[1];
    let _tokenVerified = VerifyTokenRequest.verifyToken(token);
    if (_tokenVerified != null) {
      // @ts-ignore
      _req.tokenData = _tokenVerified.data;
    } else {
      _res.status(httpStatus.NOT_ACCEPTABLE).json("Token is not valid !");
    }
  }
  _next();
};

export {verifyTokenMiddle};
