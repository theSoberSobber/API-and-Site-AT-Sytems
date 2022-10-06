const { MongoClient } = require("mongodb");

export default function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI);

    async function run() {
        try {
            // Query for a movie that has the title 'Back to the Future'
            const query = { title: 'Back to the Future' };
            const movie = await movies.findOne(query);

            res.status(200).send(`Yes, ${movie}`);
        } finally {
            await client.close();
        }
    }
    run().catch(console.dir);

}