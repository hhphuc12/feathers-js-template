export default {
    test: "staging hihi",
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
        secret: "CI_STG_AUTHENTICATION_SECRET",
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
            expiresIn: "CI_STG_JWT_EXPIRES_IN"
        },
        local: {
            usernameField: "email",
            passwordField: "password"
        }
    },
    mongodb: "CI_STG_MONGO_CONNECTION_STRING",
    admin: {
        email: "admin@triple-tec.com",
        password: "CI_STG_PASSWORD_ADMIN"
    },
    redis: {
        host: "CI_STG_REDIS_HOST",
        port: 6379
    }
}
