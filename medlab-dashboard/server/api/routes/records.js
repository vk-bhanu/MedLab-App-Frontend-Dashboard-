import express from "express";
import db from "../api/DB/connection.js";
import { ObjectId } from "mongodb";
import validateRecord from "../Validators/recordValidators.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("records");

  const { name, category } = req.query;

  let filter = {};
  if(name || category){
    filter.$or = [];

    if(name) filter.$or.push({ name: { $regex: name, $options: "i" } });
    if(category) filter.$or.push({ categories: { $regex: category, $options: "i" } });
  }
  
  let results = await collection.find(filter).toArray();
  res.status(200).send(results);
});

router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.status(404).send("NOT FOUND");
  else res.status(200).send(result);
});

router.post("/", validateRecord, async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      code: req.body.code,
      description: req.body.description,
      instructions: req.body.instructions,
      parameters: req.body.parameters,
      numberofparams: req.body.numberofparams,
      duration: req.body.duration,
      categories: req.body.categories,
      price: req.body.price,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.status(204).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message })
  }
});

router.patch("/:id", validateRecord, async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        code: req.body.code,
        description: req.body.description,
        instructions: req.body.instructions,
        parameters: req.body.parameters,
        numberofparams: req.body.numberofparams,
        duration: req.body.duration,
        categories: req.body.categories,
        price: req.body.price,
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating record");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;
