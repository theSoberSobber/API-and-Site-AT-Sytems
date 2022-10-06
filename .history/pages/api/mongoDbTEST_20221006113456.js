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
                "name": { "first": "Alan", "last": "Turing" },
                "birth": datetime.datetime(1912, 6, 23),
                "death": datetime.datetime(1954, 6, 7),
                "subjects": [ "PPL", "DSA", "DBMS", "FOD", "PP", "MATHS", "DCD" ],
                "views": 1250000
              }





        } finally {
            await client.close();
        }
    }
    run().catch(console.dir);
}