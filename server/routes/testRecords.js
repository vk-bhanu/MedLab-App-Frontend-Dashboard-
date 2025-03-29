import express from "express";
import db from "../DB/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const collection = await db.collection("bookings");
    const results = await collection.find({}).toArray();
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const collection = await db.collection("bookings");
    const query = { _id: new ObjectId(req.params.id) };
    const result = await collection.findOne(query);

    if (!result) {
      res.status(404).json({ error: "Booking not found" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newBooking = {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      phone: req.body.phone,
      tests: req.body.tests,
      appointmentDate: req.body.appointmentDate,
      appointmentTime: req.body.appointmentTime,
      paymentOption: req.body.paymentOption || "pay-at-center",
      totalPayment: req.body.totalPayment,
      status: "pending",
      createdAt: new Date(),
    };

    const collection = await db.collection("bookings");
    const result = await collection.insertOne(newBooking);

    res.status(201).json({ message: "Booking created successfully", id: result.insertedId });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: "Status is required" });
    }

    const collection = await db.collection("bookings");
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } } 
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json({ message: "Booking status updated successfully" });
  } catch (error) {
    console.error("Error updating booking status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const collection = await db.collection("bookings");
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      res.status(404).json({ error: "Booking not found" });
    } else {
      res.status(200).json({ message: "Booking deleted successfully" });
    }
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
