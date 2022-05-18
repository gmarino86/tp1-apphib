import MongoDB from "mongodb";
const client = new MongoDB.MongoClient("mongodb://127.0.0.1:27017");

async function find() {
  return client
    .connect()
    .then(async function () {
      const db = client.db("Posteos");
      const users = await db.collection("Usuarios").find().toArray();
      client.close();
      return users;
    })
    .catch(function () {
      console.log("No me pude conectar");
    });
}
export {
  find
}
