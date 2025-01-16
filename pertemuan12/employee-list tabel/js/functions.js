// membuat fungsi format angka menjadi format rupiah untuk memformat angka menjadi format rupiah
function formatRupiah(number = 0) {
  // memastikan number adalah integer
  let nominal = parseInt(number);
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(nominal);
}

//membuat fungsi untuk menghitung total salary karyawan
function calculateTotalSalary(employee = {}) {
  // mengextrack data/property/key dari object employee
  const { position, isMarried, religion } = employee;

  // list gaji pokok berdasarkan jabatan
  const listGajiPokok = {
    Manager: 1_5000_000,
    "Assistant Manager": 10_000_000,
    Supervisor: 7_500_000,
    Staff: 3_000_000,
  };

  //menghitung gaji pokok karyawan
  const GajiPokok = listGajiPokok[position];
  const TunjanganJabatan = 0.2 * GajiPokok;
  const BPJS = 0.05 * GajiPokok;
  const TunjanganKeluarga = isMarried ? 0.1 * GajiPokok : 0;
  const gajiKotor = GajiPokok + TunjanganJabatan + BPJS + TunjanganKeluarga;
  const Zakat =
    religion === "Islam" && gajiKotor >= 7_000_000 ? 0.25 * gajiKotor : 0;
  const gajiBersih = gajiKotor - Zakat;

  Object.assign(employee, {
    GajiPokok,
    TunjanganJabatan,
    BPJS,
    TunjanganKeluarga,
    gajiKotor,
    Zakat,
    gajiBersih,
  });
}

export { formatRupiah, calculateTotalSalary };
