db.getSiblingDB('admin').auth(
    process.env.MONGO_INITDB_ROOT_USERNAME,  // TODO
    process.env.MONGO_INITDB_ROOT_PASSWORD  // TODO
);
db.createUser({
    user: process.env.MONGO_TEST_USER,  // TODO
    pwd: process.env.MONGO_TEST_USER_PASSWORD,  // TODO
    roles: [{role: "readWrite", db: process.env.MONGO_INITDB_DATABASE}]  // TODO
});
