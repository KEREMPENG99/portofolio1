// 1. Definisi konten untuk setiap halaman
const pages = {
    home: `
        <div class="page active-page" id="page-home">
            <div class="hero">
                <h1>Halo, saya <span>Nama Anda</span></h1>
                <p style="font-size: 1.2rem; margin-top: 10px;">Web Developer | Designer | Creator</p>
                <p style="margin-top: 20px; color: #555;">Selamat datang di portofolio saya. Saya suka membuat website yang bersih dan fungsional.</p>
            </div>
        </div>
    `,
    about: `
        <div class="page active-page" id="page-about">
            <h2>Tentang Saya</h2>
            <div class="about-grid">
                <div class="about-text">
                    <p>Saya adalah seorang pengembang web dengan passion di bidang front-end dan UI/UX design. Saya percaya bahwa desain yang baik adalah kunci pengalaman pengguna yang luar biasa.</p>
                    <p>Saat ini saya sedang mendalami JavaScript dan framework modern seperti React.</p>
                </div>
                <div class="skills">
                    <h3>Skill</h3>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>React (Dasar)</li>
                        <li>UI/UX Design</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    projects: `
        <div class="page active-page" id="page-projects">
            <h2>Proyek Saya</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>Project 1</h3>
                    <p>Deskripsi singkat project pertama Anda.</p>
                    <small>HTML, CSS, JS</small>
                </div>
                <div class="project-card">
                    <h3>Project 2</h3>
                    <p>Deskripsi singkat project kedua Anda.</p>
                    <small>React, Tailwind</small>
                </div>
                <div class="project-card">
                    <h3>Project 3</h3>
                    <p>Deskripsi singkat project ketiga Anda.</p>
                    <small>Node.js, Express</small>
                </div>
            </div>
        </div>
    `,
    contact: `
        <div class="page active-page" id="page-contact">
            <h2>Hubungi Saya</h2>
            <div class="contact-info">
                <p>📧 <a href="mailto:email@anda.com">email@anda.com</a></p>
                <p>🐙 <a href="https://github.com/username" target="_blank">github.com/username</a></p>
                <p>💼 <a href="https://linkedin.com/in/username" target="_blank">linkedin.com/in/username</a></p>
            </div>
        </div>
    `
};

// 2. Fungsi untuk merender halaman
function navigateTo(pageName) {
    // Ambil elemen main
    const main = document.getElementById('content');
    
    // Render konten halaman yang dipilih
    main.innerHTML = pages[pageName] || pages.home;

    // Update class active pada menu navigasi
    const links = document.querySelectorAll('.menu a');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
}

// 3. Event listener untuk semua link navigasi
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah reload halaman
        const page = this.dataset.page;
        navigateTo(page);
        
        // (Opsional) scroll ke atas saat pindah halaman
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// 4. Tampilkan halaman Beranda saat pertama kali dibuka
navigateTo('home');