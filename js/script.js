// ini file javascript

document.addEventListener('DOMContentLoaded', function () {
    const userName = prompt("Silakan masukkan nama Anda:");
    document.querySelector('.banner').textContent = `Selamat Datang di Portofolio Saya, ${userName}`;

    document.getElementById('currentTime').textContent = new Date().toString();

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !phone || !message) {
            alert("Semua kolom harus diisi!");
            return;
        }

        document.getElementById('outputName').textContent = name;
        document.getElementById('outputEmail').textContent = email;
        document.getElementById('outputPhone').textContent = phone;
        document.getElementById('outputMessage').textContent = message;

        alert("Formulir berhasil dikirim!");
    });
});