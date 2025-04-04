import express from 'express'
import cors from 'cors';
import records from "./routes/records.js"
import testRecords from "./routes/testRecords.js"
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/record", records);
app.use("/booktest", testRecords);

app.get("/", (req,res)=>{
    res.send("Hello")
})

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})