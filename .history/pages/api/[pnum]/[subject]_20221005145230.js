// const {clientPromise} = require('../lib/mongodb.ts');

export default function handler(req, res) {
    const { pnum, subject } = req.query;
    console.log(pnum, subject);
    res.json(
        {
            "pnum": pnum,
            "subject": subject
        }
    )
}
// Control FLow