import express from "express";
import { getAllOfficer, getOfficerById, createOfficer, updateOfficer, deleteOfficer } from "./server.js"

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const officers = await getAllOfficer()
    res.status(200).json(officers)
  } catch (error) {
    res.status(404).json({
      error: error.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const officer = await getOfficerById(id)

    res.status(200).json({
      message: "petugas tersedia",
      data: officer
    })
  } catch (error) {
    res.status(404).json({ message : error.message})
  }
})


router.post('/', async (req, res) => {
  const data =  req.body
  try {
    const officer = await createOfficer(data)
    res.status(201).json({
      message: "data berhasil di tambahkan",
      data: officer
    })
  } catch (error) {
    res.status(404).json({ error : error.message})
  }
})

router.put('/:id', async (req, res) => {
    const { id }= req.params
    const data =  req.body
    try {
      const officer = await updateOfficer(id, data)

      res.status(201).json({
        message: "data berhasil di ubah",
        data: officer
      })
    } catch (error) {
      res.status(500).json({ message : error.message})
    } 
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await deleteOfficer(id)

    res.status(201).json({message : "data berhasil dihapus"})
  } catch (error) {
    res.status(500).json({ message : error.message})
  }
})

export default router