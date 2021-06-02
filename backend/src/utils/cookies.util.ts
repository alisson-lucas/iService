import * as express from "express";

import Config from "../config/config";

abstract class CookieUtils {
    public static addCookie(cookieName: string, cookieValue: string, response: express.Response)  {
        response.cookie(cookieName, cookieValue, {
            secure: true,
            httpOnly: true,
            sameSite: "none"
        });
    };

    public static removeCookie(cookieName: string, response: express.Response)  {
        response.cookie(cookieName, "", {
            maxAge: 0,
            httpOnly: true,
        });
    };
};

export default CookieUtils;