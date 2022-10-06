// const {clientPromise} = require('../lib/mongodb.ts');

export default function handler(req, res) {
    const { college, branch, section, pnum} = req.query;
    console.log(college, branch, section, pnum);
    res.json(
        {
            "college":college,
            "branch": branch, 
            "section": section, 
            "pnum": pnum
        }
    )
}
// Control FLow
