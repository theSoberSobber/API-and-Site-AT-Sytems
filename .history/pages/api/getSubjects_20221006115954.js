// haven't implmented anything
export default function handler(req, res) {
    if (req.method == 'POST') {
        const body = req.body;
        console.log(`Incoming group number : ${body.gno}`);
        res.status(200).send(
            [
                "PPL",
                "DBMS",
                "DSA",
                "DCD",
                "Maths",
                "FOD",
                "Proffesional Practice"
            ]
        );
    } else {
        res.status(405).send({ message: 'Only POST requests allowed' });
        return;
    }
}