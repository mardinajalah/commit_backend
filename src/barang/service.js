import prisma from "../lib/prisma.js"

const getAllProduct = async () => {
  const products = await prisma.tbBarang.findMany()
  return products
}

const getProductById = async (id) => {
  if(typeof id !== "string") {
    throw new Error("id must be string")
  }

  const product = await prisma.tbBarang.findUnique({
    where: {
      kode_barang: id
    }
  })

  if(!product) {
    throw new Error("Product not found")
  }

  return product
}

const createProduct = async (newDataProduct) => {
  const product = await prisma.tbBarang.create({
    data : {
      kode_barang: newDataProduct.kode_barang,
      nama_barang: newDataProduct.nama_barang,
      hargaBeli: newDataProduct.hargaBeli, 
      hargaEcer: newDataProduct.hargaEcer, 
      hargaGrosir: newDataProduct.hargaGrosir, 
      stock: newDataProduct.stock, 
      stock_min: newDataProduct.stock_min, 
      barcode: newDataProduct.barcode, 
      gambar: newDataProduct.gambar, 
      kode_kategori: newDataProduct.kode_kategori, 
      ukuran: newDataProduct.ukuran, 
      satuan: newDataProduct.satuan, 
      aktif: newDataProduct.aktif
    },
  })

  if(!product) {
    throw new Error("Product not found")
  }

  return product
}

const updateProduct = async (id, newDataProduct) => {
  await getProductById(id)
  
  const product = await prisma.tbBarang.update({
    where: {
      kode_barang: id
    },
    data: {
      kode_barang: newDataProduct.kode_barang,
      nama_barang: newDataProduct.nama_barang,
      hargaBeli: newDataProduct.hargaBeli, 
      hargaEcer: newDataProduct.hargaEcer, 
      hargaGrosir: newDataProduct.hargaGrosir, 
      stock: newDataProduct.stock, 
      stock_min: newDataProduct.stock_min, 
      barcode: newDataProduct.barcode, 
      gambar: newDataProduct.gambar, 
      kode_kategori: newDataProduct.kode_kategori, 
      ukuran: newDataProduct.ukuran, 
      satuan: newDataProduct.satuan, 
      aktif: newDataProduct.aktif
    },
  })

  if(!product) {
    throw new Error("Product not found")
  }

  return product
}

const deleteProduct = async (id) => {
  await getProductById(id)
  await prisma.tbBarang.delete({
    where: {
      kode_barang: id
    }
  })
}

export { getAllProduct, getProductById, createProduct, updateProduct, deleteProduct }