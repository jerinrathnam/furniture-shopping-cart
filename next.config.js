// must restart server whenever you make changes in next.config
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  env: {
    MONGO_SRV: "mongodb+srv://jerin:test$1234@jerin-o0wj3.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "dbdfwebfuewbffrf",
    CLOUDINARY_URL: "https://131237687497883:R2dhHl_SkrcbwkLcEAI9x45XHaU@api.cloudinary.com/v1_1/gemjerin/image/upload",
    STRIPE_SECRET_KEY: "sk_test_QgTPKZELkjGh0UY8V3jhJ4vE00d47Pj9Wk"
  }
});