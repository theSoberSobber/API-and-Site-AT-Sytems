const { MongoClient } = require("mongodb");


export default function handler(req, res) {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    async function run() {
        try {
            const database = client.db('attendance');
            const movies = database.collection('student');

            // Query for a movie that has the title 'Back to the Future'
            const query = { title: 'Back to the Future' };
            const movie = await movies.findOne(query);

            console.log(movie);
        } finally {
            await client.close();
        }
    }
    run().catch(console.dir);

}