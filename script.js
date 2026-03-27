// =========================
// WHATSAPP REDIRECT SCRIPT
// =========================
const whatsappForm = document.getElementById('whatsappForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const data = {
            name: document.getElementById('name').value,
            whatsapp: document.getElementById('whatsapp').value,
            address: document.getElementById('address').value,
            service: document.getElementById('service').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            message: document.getElementById('message').value || "-"
        };

        const phoneNumber = "6285183835856";
        const text = `Halo ExpressWash, saya ingin melakukan booking:\n\nNama: ${data.name}\nNo WA: ${data.whatsapp}\nAlamat: ${data.address}\nLayanan: ${data.service}\nTanggal: ${data.date}\nWaktu: ${data.time}\n\nPesan:\n${data.message}`;

        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
    });
}

// =========================
// TESTIMONIALS DRAGGABLE
// =========================
const testimonialTrack = document.querySelector('.testimonials-track');

// Pastikan track ada sebelum menjalankan script
if (testimonialTrack) {
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonialTrack.addEventListener('mousedown', (e) => {
        isDown = true;
        // Gunakan 'dragging' agar sesuai dengan CSS (untuk matikan snap)
        testimonialTrack.classList.add('dragging');
        startX = e.pageX - testimonialTrack.offsetLeft;
        scrollLeft = testimonialTrack.scrollLeft;
    });

    testimonialTrack.addEventListener('mouseleave', () => {
        isDown = false;
        testimonialTrack.classList.remove('dragging');
    });

    testimonialTrack.addEventListener('mouseup', () => {
        isDown = false;
        testimonialTrack.classList.remove('dragging');
    });

    testimonialTrack.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonialTrack.offsetLeft;
        // Multiplier 2.5 supaya lebih responsif terhadap gerakan mouse
        const walk = (x - startX) * 2.5; 
        testimonialTrack.scrollLeft = scrollLeft - walk;
    });

    // Mencegah link/click terpicu saat drag
    testimonialTrack.addEventListener('click', (e) => {
        if (isDown) {
            e.preventDefault();
        }
    });
}


// navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        
        // Ubah teks tombol saat diklik
        if (navMenu.classList.contains('active')) {
            menuToggle.innerText = 'X';
            document.body.style.overflow = 'hidden'; // Stop scroll halaman
        } else {
            menuToggle.innerText = '☰';
            document.body.style.overflow = 'auto'; // Aktifkan scroll lagi
        }
    };

    menuToggle.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', toggleMenu); //  area hitam = tutup

    document.querySelectorAll('.navbar__link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
            menuToggle.innerText = '☰';
            document.body.style.overflow = 'auto';
        });
    });
});