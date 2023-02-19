/** @type {import('jest').Config} */
module.exports = async () => {
    return {
        verbose: true,
        transform: {
            "\\.[jt]sx?$": "babel-jest",
        },
        testEnvironment: "jsdom"
    }
}