// 2 mappings/collections
// one for gno -> subjectArray
// another one for pno, gno -> attendance JSON object
// the last one will include gno, so that the subjects are know at the time of creation if the person does not exist
// otherwise gno is useless, since every pno has it's own attendance JSON object named subjectObj


const { MongoClient } = require("mongodb");

export default function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI);
    const database = client.db('attendance');
    const gno_subject_collection = database.collection('subject-mapping');
    const guy_collection = database.collection('student');

    async function run() {
        try {
            if(await guy_collection.findOne({ pno: "919770483089@s.whatsapp.net"})){
                // the guy exists
                let inputSubject = 'PPL';
                // fina and increase his attendance there
                let guy = guy_collection.findOne({ pno: "919770483089@s.whatsapp.net"});
                guy.subjectObj.inputSubject++;
                return;
            } else {

                // get the guy's subjects using his gno and gno->subject mapping
                let subjectArray = await gno_subject_collection.findOne({ gno: "12345678902g.us"}).subjects;

                // generate subject object
                let subjectObj = {};
                for(let i=0; i<subjectArray.length; i++){
                    subjectObj.subjectArray[i] = '0';
                }

                let guy = {
                    "pno": "919770483089@s.whatsapp.net",
                    "gno": "1234567890@g.us",
                    "subjects": subjectObj
                }
                // insert the person
                await guy_collection.insert_one(guy);
                // recurse to perfrom the query now
                run().catch(console.dir);
            }
        } finally {
            // close the connection on error/completion
            await client.close();
        }
    }
    run().catch(console.dir);
}