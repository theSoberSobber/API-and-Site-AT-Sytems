// 2 mappings/collections
// one for gno -> subjects
// another one for pno -> attendance JSON object



const { MongoClient } = require("mongodb");

export default function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI);
    const database = client.db('attendance');
    const collection = database.collection('student');

    async function run() {
        try {
            if(await collection.findOne({ pno: "919770483089@s.whatsapp.net"})){
                // the guy exists
                let guy = collection.findOne({ pno: "919770483089@s.whatsapp.net"});
                guy.
                return;
            } else {
                let guy = {
                    "pno": "919770483089@s.whatsapp.net",
                    "gno": "1234567890@g.us",
                    "subjects": [ "PPL", "DSA", "DBMS", "FOD", "PP", "MATHS", "DCD" ]
                }
                // insert the person
                collection.insert_one(guy);
                // recurse to perfrom the query now
                run().catch(console.dir);
            }



            personDocument = {
                "pno": "919770483089@s.whatsapp.net",
                "gno": "1234567890@g.us",
                "subjects": [ "PPL", "DSA", "DBMS", "FOD", "PP", "MATHS", "DCD" ]
            }

        } finally {
            await client.close();
        }
    }
    run().catch(console.dir);
}