function changeColor() {
    // mendeklarasikan variabel color dan inisialisasi dengan dom element html dengan id color 
    let color = document.getElementById('color').value;

// mengubah background color element body
document.body.style.backgroundColor = color;

}