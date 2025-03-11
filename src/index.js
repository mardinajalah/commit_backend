import express from "express";
import dotenv from "dotenv"
import barangController from "./barang/controller.js"
import petugasController from "./petugas/controller.js"

dotenv.config()
const port = process.env.vPORT
const app = express();

app.use(express.json())
app.use('/barang', barangController)
app.use("/petugas", petugasController)

app.use("/", (req, res) => {
  res.status(404).json({
    message: "not found",
    data: null
  })
})

app.listen(port, () => {
  console.log("server running in http://localhost:" + port)
})