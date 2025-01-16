function konversikurs(){
    //tangkap id form
    let form = window.document.getElementById("form_valas");
    //tangkap request alement2 form
    let hrg = parseFloat(form.harga.value);
    let jml = parseFloat(form.jumlah.value);
    let vls = parseFloat(form.valas.value);
    //hitung total harga yg dikonversi ke Rp
    let tohar = hrg * jml * vls;
    //penempatan hasil di elemen total
    form.total.value = tohar;

}