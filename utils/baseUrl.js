const baseUrl =
    process.env.NODE_ENV === "production"
    ? 'http://furniture.com'
    : 'http://localhost:3000';

export default baseUrl;
