/**
 * Membuat Array of Object yang berisi data karyawan
 */
const employees = [
  {
    id: 111,
    name: "Budi Bambu",
    position: "Manager",
    isMarride: true,
    religion: "Islam",
  },
  {
    id: 112,
    name: "Rizki Bakwan",
    position: "Assistant Manager",
    isMarride: false,
    religion: "Hindu",
  },
  {
    id: 113,
    name: "Ucup Cmiw",
    position: "Supervisor",
    isMarride: true,
    religion: "Budha",
  },
  {
    id: 114,
    name: "Rossi Asep",
    position: "Staff",
    isMarride: true,
    religion: "Kristen Protestan",
  },
  {
    id: 115,
    name: "Hoshi Tiger",
    position: "Staff",
    isMarride: false,
    religion: "Katholik",
  },
];

/**
 * Membuat Array ColomNames
 */

const columnNames = [
  "No",
  "Nip",
  "Nama",
  "Jabatan",
  "Status",
  "Agama",
  "Gaji Pokok",
  "Tunjangan Jabatan",
  "BPJS",
];

export { employees, columnNames };
