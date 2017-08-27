/**
 * Created by youssef on 27/08/17.
 */

const {MongoClient} = require('mongodb');

// 1
const MONGO_URL = 'mongodb://admin:admin@ds161793.mlab.com:61793/graphql';

// 2
module.exports = async () => {
    const db = await MongoClient.connect(MONGO_URL);
    return {Links: db.collection('links')};
}