import express from "express"
import { getAlldata, createData, getDataById, updateData, deleteData } from "../model/index.js"

const router = express.Router()

// get all data
router.get("/", async (req, res) => {
  try {
    const data = await getAlldata("petugas")
    res.status(200).json({
      message: "data berhasil di temukan",
      data
    })
  } catch (error) {
    res.status(404).json({ message : error.message})
  }
})

// get data by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const kodePetugas = {
      kode_petugas: id
    }
    const data = await getDataById("Petugas", kodePetugas)
    res.status(200).json({
      message: "data di temukan",
      data
    })
  } catch (error) {
    res.status(404).json({message: error.message})
  }
})

// create data
router.post("/", async (req, res) => {
  try {
    const dataBody = req.body
    const newData = {
      kode_petugas: dataBody.kode_petugas,
      nama: dataBody.nama,
      no_hp: dataBody.no_hp,
      username: dataBody.username,
      pass: dataBody.pass,
      aktif: dataBody.aktif,
      level: dataBody.level
    }
    const data = await createData("Petugas", newData)
    res.status(200).json({
      message: "data berhasil di tambahkan",
      data
    })
  } catch (error) {
    res.status(404).json({ error : error.message})
  }
})

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const dataBody = req.body
    const dataId = {
      kode_petugas: id
    }
    const newData = {
      kode_petugas: dataBody.kode_petugas,
      nama: dataBody.nama,
      no_hp: dataBody.no_hp,
      username: dataBody.username,
      pass: dataBody.pass,
      aktif: dataBody.aktif,
      level: dataBody.level
    }
    const data = await updateData("Petugas", dataId, newData)
    res.status(200).json({
      message: "data berhasil di update",
      data
    })
  } catch (error) {
    res.status(404).json({ error : error.message})
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const dataId = {
      kode_petugas: id
    }
    const data = await deleteData("Petugas", dataId)
    res.status(200).json({
      message: "data berhasil di hapus",
      data
    })
  } catch (error) {
    res.status(404).json({ error : error.message})
  }
})

export default router