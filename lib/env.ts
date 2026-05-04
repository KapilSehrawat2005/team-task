function readEnv(key: "MONGODB_URI" | "JWT_SECRET") {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

export const env = {
  get mongodbUri() {
    return readEnv("MONGODB_URI");
  },
  get jwtSecret() {
    return readEnv("JWT_SECRET");
  },
  get jwtExpiresIn() {
    return process.env.JWT_EXPIRES_IN ?? "7d";
  },
  get bootstrapAdminEmail() {
    return process.env.BOOTSTRAP_ADMIN_EMAIL?.toLowerCase() ?? "";
  }
};
