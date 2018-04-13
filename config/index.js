export default {
  db: {
    url: `postgres://${process.env.POSTGRES_USER || "postgres"}:${process.env.POSTGRES_PASSWORD || "postgres"}@${process.env.POSTGRES_HOST || "localhost"}/${process.env.POSTGRES_DB || "election"}`,
    dialect: "postgres"
  }
};
