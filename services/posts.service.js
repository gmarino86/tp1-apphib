import MongoDB from 'mongodb'
const client = new MongoDB.MongoClient('mongodb://127.0.0.1:27017')

async function find () {
  return client.connect()
    .then(async function () {
      const db = client.db("Posteos")
      const posts = await db.collection("Posts").find().toArray()
      client.close()
      return posts
    })
    .catch(function () {
      console.log('No me pude conectar')
    })
}
async function findPostByIdChat(id) {
  return client.connect()
    .then(async function () {
      const db = client.db("Posteos")
      const post = await db.collection("Posts").findOne({idChat: id})
      client.close()
      return post
    })
    .catch(function () {
      console.log('No me pude conectar')
    })
}

async function getByIdChat(id) {
  return client.connect()
    .then(async function () {
      const db = client.db("Posteos")
      const comments = await db.collection("Chats").find({idChat: id}).toArray()
      client.close()
      return comments
    })
    .catch(function () {
      console.log('No me pude conectar')
    })
    
}

export {
  find,
  findPostByIdChat,
  getByIdChat
}
