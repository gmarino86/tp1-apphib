import MongoDB from "mongodb";
const client = new MongoDB.MongoClient("mongodb://127.0.0.1:27017");

async function find() {
  return client
    .connect()
    .then(async function () {
      const db = client.db("Posteos");
      const categorias = await db.collection("Categorias").find().toArray();
      client.close();
      return categorias;
    })
    .catch(function () {
      console.log("No me pude conectar");
    });
}

async function filterByName(catName) {
  return client
  .connect()
  .then(async function () {
    const db = client.db("Posteos");
    const categoria = await db.collection("Categorias")
    .find({ nombre: catName }).toArray()
    client.close()
    return categoria
  })
  .catch(async function (err) {
    return err
  })
}

async function findCatById(idCat) {
  return client
  .connect()
  .then(async function () {
    const db = client.db("Posteos");
    const categoria = await db.collection("Categorias")
    .find({ idCat: idCat }).toArray()
    client.close()
    return categoria
  })
  .catch(async function (err) {
    return err
  })
}

async function insertOne() {
  return client
  .connect()
  .then(async function () {
    const db = client.db("Posteos");
    const cat = await db.collection("Categorias")
    .insertOne({
      "idCat": "4",
      "nombre": "Categoria x API"
    })
    client.close()
    return cat
  })
  .catch(async function (err) {
    return err
  })
}

async function modificarXId(catID) {
  return client
  .connect()
  .then(async function () {
    const db = client.db("Posteos");
    const cat = await db.collection("Categorias")
    .updateOne({ idCat : catID},{
      $set : {
        "nombre": "Categoria Modificada x API"
      }
    })
    client.close()
    return cat
  })
  .catch(async function (err) {
    return err
  })
}


export {
  find,
  filterByName,
  findCatById,
  insertOne,
  modificarXId
}
