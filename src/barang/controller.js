import express from "express";
import { getAllProduct, getProductById, createProduct, updateProduct, deleteProduct } from "./service.js"

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await getAllProduct()
    res.status(200).json(products)
  } catch (error) {
    res.status(404).json({
      error: error.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const product = await getProductById(id)

    res.status(200).json({
      message: "barang tersedia",
      data: product
    })
  } catch (error) {
    res.status(404).json({ message : error.message})
  }
})

// create
router.post('/', async (req, res) => {
  const data =  req.body
  try {
    const product = await createProduct(data)
    res.status(201).json({
      message: "data berhasil di tambahkan",
      data: product
    })
  } catch (error) {
    res.status(404).json({ error : error.message})
  }
})

router.put('/:id', async (req, res) => {
    const { id }= req.params
    const data =  req.body
    try {
      const product = await updateProduct(id, data)

      res.status(201).json({
        message: "data berhasil di ubah",
        data: product
      })
    } catch (error) {
      res.status(500).json({ message : error.message})
    } 
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await deleteProduct(id)

    res.status(201).json({message : "barang berhasil dihapus"})
  } catch (error) {
    res.status(500).json({ message : error.message})
  }
})

export default router