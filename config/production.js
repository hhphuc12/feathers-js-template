export default {
    host: "localhost",
    port: 3030,
    public: "../public/",
    paginate: {
        default: 10,
        max: 50
    },
    authentication: {
        entity: "user",
        service: "users",
        secret: "CI_PRD_AUTHENTICATION_SECRET",
        authStrategies: [
            "jwt",
            "local"
        ],
        jwtOptions: {
            header: {
                typ: "access"
            },
            audience: "http://yourdomain.com",
            issuer: "feathers",
            algorithm: "HS256",
            expiresIn: "CI_PRD_JWT_EXPIRES_IN"
        },
        local: {
            usernameField: "email",
            passwordField: "password"
        }
    },
    mongodb: "CI_PRD_MONGO_CONNECTION_STRING",
    admin: {
        email: "admin@triple-tec.com",
        password: "CI_PRD_PASSWORD_ADMIN"
    },
    redis: {
        host: "CI_PRD_REDIS_HOST",
        port: 6379
    }
}
