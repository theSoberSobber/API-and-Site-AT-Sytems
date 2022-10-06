const { MongoClient } = require("mongodb");
export default function handler(req, res) {
    if (req.method == 'POST') {

        const body = req.body;
        console.log(body);

        try{
            // do mongoDB stuff here
            

        } catch {
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


        res.status(200).send(`Attendance of ${body.pnum} successfully marked for the subject ${body.subject}.`);

    } else {
        res.status(405).send({ message: 'Only POST requests allowed' });
        return;
    }
}