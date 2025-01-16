import { employees, columnNames } from "./data.js";
import { calculateTotalSalary, formatRupiah } from "./functions.js";

// Mencari element html dengan id "colomn-names"
const columnNamesRow = document.getElementById("column-names");

columnNames.forEach((columnName) => {
  // membuat element html th
  const th = document.createElement("th");
  // mengisi data ke dalam element th
  th.innerText = columnName;
  // menambahkan element th ke dalam elemnt tr dengan id "column-names"
  columnNamesRow.appendChild(th);
});

// mencari elemnt html dengan id "table-body"
const tableBody = document.getElementById("table-body");

employees.forEach((employee, index) => {
  // menghitung salary karyawan
  calculateTotalSalary(employee);

  // membuat element tr
  const tr = document.createElement("tr");

  tr.innerHTML = `
<td>${(index = index + 1)}</td>
<td>${employee.id}</td>
<td>${employee.name}</td>
<td>${employee.position}</td>
<td>${employee.isMarride ? "Menikah" : "Belum"}</td>
<td>${employee.religion}</td>
<td>${employee.GajiPokok}</td>
<td>${employee.TunjanganJabatan}</td>
<td>${employee.BPJS}</td>
`;
  // menambah element tr ke dalam element tbody
  tableBody.appendChild(tr);
});
