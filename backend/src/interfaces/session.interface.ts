export interface Session {
    username: string,
    name: string,
    issued: number,
    expires: number
}

export type PartialSession = Omit<Session, "issued" | "expires">;

export interface EncodeResult {
    token: string,
}

export type DecodeResult =
    | {
          type: "valid";
          session: Session;
      }
    | {
          type: "integrity-error";
      }
    | {
          type: "invalid-token";
      };

export type ExpirationStatus = "expired" | "active" | "grace";