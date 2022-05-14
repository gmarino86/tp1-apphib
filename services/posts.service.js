import {MongoClient, ObjectId} from 'mongodb'
const client = new MongoClient('mongodb://127.0.0.1:27017')

async function find () {
  return client.connect()
    .then(async function () {
      const db = client.db("Posteos")
      const posts = await db.collection("Posts").find({}).toArray()
      client.close()
      return posts
    })
    .catch(function () {
      console.log('No me pude conectar')
    })
}

export {
  find
}