module.exports = {
    serverPort: process.env.PORT || 3000,
    mongoDBUrl: process.env.MONGODB_URL || 'mongodb://127.0.0.1/local'
    // mongoDBUrl: process.env.MONGODB_URL || 'mongodb+srv://hsmaheen:VxK40wZtx1MvyOoo@cluster0-nheri.gcp.mongodb.net/test?retryWrites=true'
};