// Efek scroll: Menambahkan kelas 'visible' saat elemen muncul di viewport
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

// Fungsi untuk animasi saat halaman dimuat
window.addEventListener('load', () => {
    const profile = document.querySelector('.profile');
    profile.classList.add('fade-in');
});

// Tombol untuk kembali ke atas (scroll up button)
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.backgroundColor = '#4CAF50';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.padding = '15px';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.fontSize = '20px';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.display = 'none';
scrollToTopButton.style.transition = '0.3s';
document.body.appendChild(scrollToTopButton);

// Menampilkan tombol scroll ke atas saat user scroll
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Fungsi untuk scroll kembali ke atas saat tombol diklik
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
