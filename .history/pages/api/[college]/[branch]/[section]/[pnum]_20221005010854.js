// const {clientPromise} = require('../lib/mongodb.ts');

export default function handler(req, res) {
    const { college, branch, section } = req.query
    res.end(college, branch, section);
}