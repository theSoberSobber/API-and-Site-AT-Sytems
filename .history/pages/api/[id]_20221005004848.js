// const {clientPromise} = require('../lib/mongodb.ts');

export default function handler(req, res) {
    const { id } = req.query
    res.end(`Post: ${id}`)
}

