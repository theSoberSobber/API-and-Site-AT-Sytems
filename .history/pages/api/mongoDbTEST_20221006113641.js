const { MongoClient } = require("mongodb");

export default function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI);
    const database = client.db('attendance');
    const movies = database.collection('student');

      async function run() {
        try {
            // const query = { title: 'Back to the Future' };
            // const movie = await movies.findOne(query);
            // res.status(200).send(`Yes, ${movie}`);

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