export default function handler(req, res) {
    if (req.method == 'POST') {

        const body = req.body;

        console.log(body);
        res.status(200).send('ok');

    } else {
        res.status(405).send({ message: 'Only POST requests allowed' });
        return;
    }
}