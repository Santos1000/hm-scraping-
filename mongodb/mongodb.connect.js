const mongodb = require('mongodb').MongoClient;

const connectionString = "mongodb+srv://dbbbsantos:semLAR435-@cluster0.9t1vc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

async function connect() {
  try {
    const client = await mongodb.connect(connectionString, {
       useNewUrlParser: true
    });
    console.log("connected to mongodb");
    return client;

  } catch (err) {
    console.error(err);
  }
}
module.exports = connect;
