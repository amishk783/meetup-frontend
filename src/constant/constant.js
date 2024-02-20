export const host =
  process.env.NODE_ENV === "production"
    ? "https://meetup-backend-d94fd9d78c46.herokuapp.com"
    : "http://localhost:3003";
