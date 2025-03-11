import prisma from "../lib/prisma.js"

const getAllOfficer = async () => {
  const officers = await prisma.petugas.findMany()
  return officers
}

const getOfficerById = async (id) => {
  if(typeof id !== "string") {
    throw new Error("id must be string")
  }

  const officer = await prisma.petugas.findUnique({
    where: {
      kode_petugas: id
    }
  })

  if(!officer) {
    throw new Error("Officer not found")
  }

  return officer
}

const createOfficer = async (newData) => {
  const officer = await prisma.petugas.create({
    data : {
      kode_petugas: newData.kode_petugas,
      nama: newData.nama,
      no_hp: newData.no_hp,
      username: newData.username,
      pass: newData.pass,
      aktif: newData.aktif,
      level: newData.level
    },
  })

  if(!officer) {
    throw new Error("officer tidak bisa dibuat")
  }

  return officer
}

const updateOfficer = async (id, newData) => {
  await getOfficerById(id)
  
  const officer = await prisma.petugas.update({
    where: {
      kode_petugas: id
    },
    data: {
      nama: newData.nama,
      no_hp: newData.no_hp,
      username: newData.username,
      pass: newData.pass,
      aktif: newData.aktif,
      level: newData.level
    },
  })

  if(!officer) {
    throw new Error("gagal mengupdate petugas")
  }

  return officer
}

// const deleteOfficer = async (id) => {
//   await getProductById(id)
//   await prisma.tbBarang.delete({
//     where: {
//       kode_barang: id
//     }
//   })
// }

export { getAllOfficer, getOfficerById, createOfficer, updateOfficer }