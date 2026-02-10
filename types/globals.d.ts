export {};
export type Roles = "admin" | "user";
declare global {
  interface customJwtSessionClaims {
    metadata: {
      role?: Roles;     
    };
  }
}
