import* as express from "express";

import { DecodeResult, ExpirationStatus, Session } from "../interfaces/session.interface";
import JWTUtils from "../utils/jwt.utils";

export function requireJwtMiddleware(request: express.Request, response: express.Response, next: express.NextFunction) {
    const unauthorized = (message: string) => response.status(401).json({
        ok: false,
        status: 401,
        message: message
    });

    const header = getJWTFromCookies(request);
    
    if (!header) {
        unauthorized(`Required token`);
        return;
    }

    const decodedSession: DecodeResult = JWTUtils.decodeSession(header);
    
    if (decodedSession.type === "integrity-error" || decodedSession.type === "invalid-token") {
        unauthorized(`Failed to decode or validate authorization token. Reason: ${decodedSession.type}.`);
        return;
    }

    const expiration: ExpirationStatus = JWTUtils.checkExpirationStatus(decodedSession.session);

    if (expiration === "expired") {
        unauthorized(`Authorization token has expired. Please create a new authorization token.`);
        return;
    }

    let session: Session = decodedSession.session;

    // Set the session on response.locals object for routes to access
    response.locals = {
        ...response.locals,
        session: session
    };

    // Request has a valid or renewed session. Call next to continue to the authenticated route handler
    next();
}

const getJWTFromCookies = (request: express.Request): string | null => {
    const cookiesHeader = request.header("Cookies");
    const cookiesList = (cookiesHeader || "").split(";");

    for (let i = 0; i < cookiesList.length; i++) {
        const cookieKeyVal: string[] = cookiesList[i].split("=");
        
        if (cookieKeyVal[0] === "jwt_token") {
            return cookieKeyVal[1];
        }
    }

    return null;
}