import express from "express";
import { getAlldata, createData, getDataById, updateData, deleteData } from "../lib/modal.js";

const router = express.Router();

// get all data
router.get("/", async (req, res) => {
  try {
    const data = await getAlldata("tbBarang");
    res.status(200).json({
      message: "data berhasil di temukan",
      data,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// get data by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const kodeBarang = {
      kode_barang: id,
    };
    const data = await getDataById("tbBarang", kodeBarang);
    res.status(200).json({
      message: "data di temukan",
      data,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// create data
router.post("/", async (req, res) => {
  try {
    const dataBody = req.body;
    const newData = {
      kode_barang: dataBody.kode_barang,
      nama_barang: dataBody.nama_barang,
      hargaBeli: dataBody.hargaBeli,
      hargaEcer: dataBody.hargaEcer,
      hargaGrosir: dataBody.hargaGrosir,
      stock: dataBody.stock,
      stock_min: dataBody.stock_min,
      barcode: dataBody.barcode,
      gambar: dataBody.gambar,
      kode_kategori: dataBody.kode_kategori,
      ukuran: dataBody.ukuran,
      satuan: dataBody.satuan,
      aktif: dataBody.aktif,
    };
    const data = await createData("tbBarang", newData);
    res.status(200).json({
      message: "data berhasil di tambahkan",
      data,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dataBody = req.body;
    const dataId = {
      kode_barang: id,
    };
    const newData = {
      nama_barang: dataBody.nama_barang,
      hargaBeli: dataBody.hargaBeli,
      hargaEcer: dataBody.hargaEcer,
      hargaGrosir: dataBody.hargaGrosir,
      stock: dataBody.stock,
      stock_min: dataBody.stock_min,
      barcode: dataBody.barcode,
      gambar: dataBody.gambar,
      kode_kategori: dataBody.kode_kategori,
      ukuran: dataBody.ukuran,
      satuan: dataBody.satuan,
      aktif: dataBody.aktif,
    };
    const data = await updateData("tbBarang", dataId, newData);
    res.status(200).json({
      message: "data berhasil di update",
      data,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dataId = {
      kode_barang: id,
    };
    const data = await deleteData("tbBarang", dataId);
    res.status(200).json({
      message: "data berhasil di hapus",
      data,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
