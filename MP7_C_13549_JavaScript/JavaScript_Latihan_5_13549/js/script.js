function fn_ValForm() {
    var sMsg = "";

    var sNama = document.getElementById("nama").value;
    var sEmail = document.getElementById("email").value;
    var sUmur = document.getElementById("umur").value;
    var sKategori = document.getElementById("kategori").value;

    var sInfo = "";
    var sPilihan = "";

    // Validasi nama
    if (sNama == "") {
        sMsg += "\n* Nama belum diisi";
    }

    // Validasi email
    if (sEmail == "") {
        sMsg += "\n* Email belum diisi";
    } else {
        var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

        if (!emailPattern.test(sEmail)) {
            sMsg += "\n* Format email tidak valid";
        }
    }

    // Validasi umur
    if (sUmur == "") {
        sMsg += "\n* Umur belum diisi";
    } else if (isNaN(sUmur) || Number(sUmur) < 7 || Number(sUmur) > 70) {
        sMsg += "\n* Umur harus berupa angka antara 7 sampai 70";
    } else {
        if (Number(sUmur) <= 17) {
            sInfo = "Anggota Pelajar";
        } else {
            sInfo = "Anggota Umum";
        }
    }

    // Validasi koleksi favorit
    if (sKategori == "") {
        sMsg += "\n* Koleksi favorit belum dipilih";
    }

    // Error handling
    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    }

    // Switch-case
    switch (sKategori) {
        case "F":
            sPilihan = "Fiksi";
            break;

        case "N":
            sPilihan = "Non-Fiksi";
            break;

        case "J":
            sPilihan = "Jurnal Ilmiah";
            break;

        default:
            sPilihan = "Tidak diketahui";
    }

    // Jika semua input valid
    alert(
        "Terima kasih " + sNama +
        " ! Anda terdaftar di koleksi " +
        sPilihan + " (" + sInfo + ")."
    );

    return true;
}