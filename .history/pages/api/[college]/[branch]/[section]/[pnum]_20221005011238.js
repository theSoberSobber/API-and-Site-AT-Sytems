// const {clientPromise} = require('../lib/mongodb.ts');

export default function handler(req, res) {
    const { college, branch, section, pnum} = req.query;
    console.log(college, branch, section, pnum);
}