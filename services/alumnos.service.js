import MongoDB from "mongodb";
const client = new MongoDB.MongoClient("mongodb://127.0.0.1:27017");

async function findAll() {
    try {
        await client.connect();
        const db = client.db("apphibtp1");
        const collection = db.collection("alumnos");
        const alumnos = await collection.find({}).toArray();
        return alumnos;
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

export {
    findAll
}
