import express from "express";
import dotenv from "dotenv"
import barangController from "./router/barang.js"
import petugasControler from "./router/petugas.js"

dotenv.config()
const port = process.env.vPORT
const app = express();

app.use(express.json())
app.use('/barang', barangController)
app.use('/petugas', petugasControler)

app.use("/", (req, res) => {
  res.status(404).json({
    message: "methode nya salah",
  })
})

app.listen(port, () => {
  console.log("server running in http://localhost:" + port)
})