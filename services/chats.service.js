import MongoDB from "mongodb";
const client = new MongoDB.MongoClient("mongodb://127.0.0.1:27017");

async function findAll() {
  return client
    .connect()
    .then(async function () {
      const db = client.db("Posteos")
      const chats = await db.collection("Chats").find().toArray();
      client.close();
      return chats;
    })
    .catch(function () {
      console.log("No me pude conectar")
    });
}

async function modifyChat(id) {
  return client
  .connect()
  .then(async function () {
    const db = client.db("Posteos")
    const chat = await db.collection("Chats")
    .updateOne(
      { _id : MongoDB.ObjectId(id) },
      { 
        $set : {
          mensajes: {
            // Aca luego se reemplaza por lo que llegue de un Formulario
            texto : "Mensaje modificado por la API"
          }
        }
      }
    )
    client.close()
    return chat
  })
}

async function insertMessage(chat) {
  return client
  .connect()
  .then(async function () {
    const db = client.db("Posteos")
    const msj = await db.collection("Chats")
    .insertOne(
      { 
        "idChat": chat,
        "mensajes": {
          "texto": "Texto insertado desde la API",
          "fecha": {
            "$date": new Date()
          }
        },
        "usuario": {
          "nombre": "Usuario Anónimo",
          "idUsuario": 0
        }
      }
    )
    client.close()
    return msj
  })
}

export {
  findAll,
  modifyChat,
  insertMessage
}
