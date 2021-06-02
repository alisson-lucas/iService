import { encode, decode, TAlgorithm } from "jwt-simple";

import { DecodeResult, EncodeResult, ExpirationStatus, PartialSession, Session } from "../interfaces/session.interface";
import Config from "../config/config";

abstract class JWTUtils {
    private static secretKey: string = Config.getJWTConfig().SecretKey; 
    private static expireSeconds: number = Config.getJWTConfig().ExpireSeconds;
    private static algorithm: TAlgorithm = "HS512";


    public static encodeSession(partialSession: PartialSession): EncodeResult {
        const issued = Date.now();
        const expires = issued + (this.expireSeconds * 1000); //milliseconds

        const session: Session = {
            ...partialSession,
            issued: issued,
            expires: expires
        };
        
        return {
            token: encode(session, this.secretKey, this.algorithm),
        };
    };

    public static decodeSession(tokenString: string): DecodeResult {
        let result: Session;
    
        try {
            result = decode(tokenString, this.secretKey, false, this.algorithm);
        } catch (_e) {
            const e: Error = _e;
    
            // These error strings can be found here:
            // https://github.com/hokaccha/node-jwt-simple/blob/c58bfe5e5bb049015fcd55be5fc1b2d5c652dbcd/lib/jwt.js
            if (e.message === "No token supplied" || e.message === "Not enough or too many segments") {
                return {
                    type: "invalid-token"
                };
            }
    
            if (e.message === "Signature verification failed" || e.message === "Algorithm not supported") {
                return {
                    type: "integrity-error"
                };
            }
    
            // Handle json parse errors, thrown when the payload is nonsense
            if (e.message.indexOf("Unexpected token") === 0) {
                return {
                    type: "invalid-token"
                };
            }
    
            throw e;
        };
        return {
            type: "valid",
            session: result
        };
    };

    public static checkExpirationStatus(token: Session): ExpirationStatus {
        const now = Date.now();

        if (token.expires > now) {
            return "active";
        };
    
        return "expired";
    }
};

export default JWTUtils;