import express from 'express'
import cors from 'cors';
import records from "./routes/records.js"
import testRecords from "./routes/testRecords.js"
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);
app.use("/booktest", testRecords);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})