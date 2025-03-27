function validateRecord(req, res, next) {
    const { name, description, instructions, parameters, numberofparams, duration, categories, price, code } = req.body;
    if (!name || !description || !instructions || !parameters ||!numberofparams || !duration || !categories || !price || !code) {
        return res.status(400).send("Missing required fields");
    }
    next();
}

export default validateRecord;
