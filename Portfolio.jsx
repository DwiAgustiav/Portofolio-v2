import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  // Theme toggle effect
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: 'fa-brands fa-microsoft', name: 'Word & Excel' },
    { icon: 'fa-brands fa-mobile', name: 'Mikrotik' },
    { icon: 'fa-solid fa-pencil', name: 'Design' },
    { icon: 'fa-solid fa-mobile', name: 'Marketing' },
    { icon: 'fa-solid fa-laptop', name: 'Produktif' }
  ];

  const projects = [
    {
      image: 'img/projek.jpeg',
      tag: 'Web Porto',
      title: 'Website Portofolio Pribadi',
      description: 'Proyek ini merupakan pembuatan website portofolio pribadi yang digunakan untuk menampilkan informasi diri, karakter, serta hasil karya yang telah dikerjakan. Website dirancang dengan tampilan sederhana dan rapi agar mudah diakses dan dipahami oleh pengunjung.'
    },
    {
      image: 'img/projek2.jpeg',
      tag: 'Dokumentasi',
      title: 'Dokumentasi Kegiatan dan Tugas Sekolah',
      description: 'Proyek ini berisi dokumentasi berbagai kegiatan dan tugas sekolah yang telah saya kerjakan. Tujuannya adalah untuk menyusun dan menyajikan hasil kegiatan secara rapi, terstruktur, dan mudah dipahami sebagai arsip pembelajaran.'
    },
    {
      image: 'img/projek3.jpeg',
      tag: 'Perbaikan FO',
      title: 'Perbaikan Kabel FO',
      description: 'Project ini berisi pengalaman perbaikan kabel fiber optik yang terputus saat kegiatan lapangan. Fokus kegiatan adalah memastikan koneksi kembali normal dan stabil. Project ini menjadi bagian dari pembelajaran praktik jaringan.'
    },
    {
      image: 'img/projek4.jpeg',
      tag: 'Penggunaan Alat FTTH',
      title: 'Penggunaan Alat Plesing Fiber Optik',
      description: 'Project ini mendokumentasikan penggunaan alat plesing untuk penyambungan kabel fiber optik. Kegiatan dilakukan untuk memastikan sambungan kabel berfungsi dengan baik dan stabil. Project ini menunjukkan pemahaman terhadap penggunaan alat kerja serta ketelitian dalam proses penyambungan jaringan.'
    },
    {
      image: 'img/projek5.jpeg',
      tag: 'Mikrotik & OLT',
      title: 'Penyesuaian Client pada Mikrotik dan OLT',
      description: 'Project ini mendokumentasikan proses penyesuaian client agar dapat terhubung dengan baik antara perangkat Mikrotik dan OLT. Kegiatan dilakukan untuk memastikan koneksi jaringan berjalan stabil dan sesuai kebutuhan pengguna. Project ini menunjukkan pemahaman terhadap pengaturan dasar jaringan dan koordinasi antar perangkat.'
    },
    {
      image: 'img/projek6.jpeg',
      tag: 'Client Mikrotik & Excel',
      title: 'Pendataan Client Mikrotik Menggunakan Excel',
      description: 'Project ini mendokumentasikan kegiatan pendataan client jaringan menggunakan Microsoft Excel untuk memudahkan pengelolaan pembayaran dan pencatatan kecepatan layanan. Data digunakan sebagai acuan dalam penyesuaian layanan jaringan pada Mikrotik. Project ini membantu meningkatkan kerapian administrasi dan kemudahan monitoring client.'
    }
  ];

  return (
    <>
      <style>{`
        :root {
          --bg: #ffffff;
          --bg-soft: #f8fafc;
          --card: #ffffff;
          --text: #0f172a;
          --muted: #64748b;
          --accent: #6366f1;
          --accent-light: #818cf8;
          --shadow: rgba(99, 102, 241, 0.1);
          --shadow-lg: rgba(99, 102, 241, 0.15);
        }

        :root[data-theme="dark"] {
          --bg: #0a0a0f;
          --bg-soft: #12121a;
          --card: #1a1a24;
          --text: #e2e8f0;
          --muted: #94a3b8;
          --accent: #818cf8;
          --accent-light: #a5b4fc;
          --shadow: rgba(129, 140, 248, 0.15);
          --shadow-lg: rgba(129, 140, 248, 0.25);
        }

        :root[data-theme="dark"] body {
          background: radial-gradient(ellipse at top, #1a1a2e 0%, #0a0a0f 50%);
        }

        * { 
          box-sizing: border-box; 
          margin: 0; 
          padding: 0; 
        }

        body { 
          background: var(--bg); 
          color: var(--text); 
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          transition: background 0.3s ease;
        }

        .bg-decoration {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
          opacity: 0.05;
          animation: float 20s infinite ease-in-out;
        }

        :root[data-theme="dark"] .bg-circle {
          opacity: 0.12;
          background: linear-gradient(135deg, #818cf8 0%, #a78bfa 100%);
          box-shadow: 0 0 100px rgba(129, 140, 248, 0.3);
        }

        .bg-circle:nth-child(1) {
          width: 600px;
          height: 600px;
          top: -200px;
          right: -200px;
          animation-delay: 0s;
        }

        .bg-circle:nth-child(2) {
          width: 400px;
          height: 400px;
          bottom: -100px;
          left: -100px;
          animation-delay: 3s;
        }

        .bg-circle:nth-child(3) {
          width: 300px;
          height: 300px;
          top: 50%;
          left: 50%;
          animation-delay: 6s;
        }

        .bg-circle:nth-child(4) {
          width: 500px;
          height: 500px;
          top: 30%;
          right: 10%;
          animation-delay: 2s;
        }

        .bg-circle:nth-child(5) {
          width: 350px;
          height: 350px;
          bottom: 20%;
          left: 30%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(99, 102, 241, 0.1);
          padding: 20px 0;
          transition: all 0.3s ease;
        }

        :root[data-theme="dark"] nav {
          background: rgba(26, 26, 36, 0.85);
          border-bottom: 1px solid rgba(129, 140, 248, 0.15);
        }

        nav.scrolled {
          padding: 12px 0;
          box-shadow: 0 4px 20px var(--shadow);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 20px;
          font-weight: 600;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }

        .nav-links a {
          color: var(--muted);
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: var(--accent);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        header {
          position: relative;
          max-width: 1200px;
          margin: auto;
          padding: 160px 24px 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          z-index: 1;
        }

        .profile-image-container {
          position: relative;
          width: 180px;
          height: 180px;
          margin-bottom: 32px;
          animation: fadeInUp 0.6s ease;
        }

        .profile-glow {
          position: absolute;
          inset: -20px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0.4;
          animation: pulse-glow 3s infinite ease-in-out;
        }

        @keyframes pulse-glow {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.4;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        .profile-border {
          position: absolute;
          inset: -4px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
          border-radius: 50%;
          padding: 4px;
          animation: rotate-border 8s linear infinite;
        }

        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .profile-image {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: var(--card);
          border: 4px solid var(--bg);
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: var(--bg-soft);
          border: 1px solid var(--accent);
          border-radius: 50px;
          font-size: 13px;
          font-weight: 500;
          color: var(--accent);
          margin-bottom: 24px;
          animation: fadeInUp 0.6s ease 0.1s backwards;
        }

        .hero-badge i {
          color: #22c55e;
          font-size: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 16px;
          background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 0.6s ease 0.2s backwards;
        }

        header p {
          font-size: 18px;
          color: var(--muted);
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 32px;
          animation: fadeInUp 0.6s ease 0.3s backwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .socials {
          display: flex;
          gap: 16px;
          animation: fadeInUp 0.6s ease 0.4s backwards;
        }

        .socials a {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-soft);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          color: var(--muted);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .socials a:hover {
          background: var(--accent);
          color: white;
          transform: translateY(-4px);
          box-shadow: 0 8px 20px var(--shadow);
        }

        section {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-tag {
          display: inline-block;
          padding: 6px 16px;
          background: var(--bg-soft);
          border: 1px solid var(--accent);
          border-radius: 50px;
          color: var(--accent);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .section-header h2 {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .section-subtitle {
          font-size: 16px;
          color: var(--muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .about-text p {
          font-size: 17px;
          text-align: center;
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: 20px;
        }

        .skills {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
        }

        .skill {
          background: var(--card);
          border: 1px solid rgba(99, 102, 241, 0.1);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .skill:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px var(--shadow);
          border-color: var(--accent);
        }

        .skill i {
          font-size: 48px;
          color: var(--accent);
          margin-bottom: 16px;
        }

        .skill div {
          font-size: 16px;
          font-weight: 600;
          color: var(--text);
        }

        .projects {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
        }

        .project {
          background: var(--card);
          border: 1px solid rgba(99, 102, 241, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .project:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px var(--shadow-lg);
        }

        .project-image {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 16px;
          left: 16px;
        }

        .project-tag {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(99, 102, 241, 0.9);
          backdrop-filter: blur(8px);
          color: white;
          font-size: 12px;
          font-weight: 600;
          border-radius: 8px;
        }

        .project-content {
          padding: 24px;
        }

        .project-content h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text);
        }

        .project-content p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--muted);
        }

        footer {
          background: var(--bg-soft);
          border-top: 1px solid rgba(99, 102, 241, 0.1);
          padding: 64px 24px 32px;
          text-align: center;
          margin-top: 120px;
          position: relative;
          z-index: 1;
        }

        footer h2 {
          margin-bottom: 12px;
          font-size: 28px;
        }

        footer p {
          color: var(--muted);
          max-width: 600px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .footer-links {
          display: flex;
          gap: 32px;
          justify-content: center;
          margin-top: 32px;
        }

        .footer-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--accent);
        }

        .theme-toggle {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 56px;
          height: 56px;
          background: var(--card);
          border: 1px solid var(--accent);
          border-radius: 50%;
          color: var(--accent);
          font-size: 20px;
          cursor: pointer;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px var(--shadow);
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 32px var(--shadow-lg);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 36px;
          }

          .nav-links {
            gap: 20px;
          }

          .nav-links a {
            font-size: 13px;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .projects {
            grid-template-columns: 1fr;
          }

          .skills {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }
        }
      `}</style>

      <div className="bg-decoration">
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
      </div>

      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <div className="logo">Portfolio</div>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
            <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
        <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
      </button>

      <header id="home">
        <div className="profile-image-container">
          <div className="profile-glow"></div>
          <div className="profile-border"></div>
          <div className="profile-image">
            <img src="img/pp2.jpg" alt="Profile Picture" />
          </div>
        </div>
        <div className="hero-badge">
          <i className="fa-solid fa-circle"></i>
          Available for projects
        </div>
        <h1>Dwi Agustia Velitasari</h1>
        <p>Siswi TKJ yang tertarik pada dunia teknologi, pembelajaran digital, dan pengembangan diri melalui karya.</p>
        <div className="socials">
          <a href="https://www.instagram.com/dwiagustiav/" title="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/sukamager" title="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.tiktok.com/@velitaa1" title="TikTok">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </header>

      <section id="about" className="fade-in">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2>Tentang Saya</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Saya merupakan siswi TKJ yang terbiasa belajar secara bertahap dan mandiri. Saya tertarik pada proses memahami hal baru, mengerjakan tugas dengan rapi, serta menyusun karya secara terstruktur.
            </p>
            <p>
              Melalui berbagai kegiatan dan proyek sekolah, saya berusaha mengembangkan kedisiplinan, ketelitian, dan tanggung jawab dalam setiap pekerjaan yang saya lakukan.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="fade-in">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2>Keahlian</h2>
          <p className="section-subtitle">Beberapa Hal yang Saya Kembangkan</p>
        </div>
        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <i className={skill.icon}></i>
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="fade-in">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2>Proyek Terbaru</h2>
          <p className="section-subtitle">Beberapa proyek yang telah saya kerjakan dengan dedikasi penuh</p>
        </div>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-tag">{project.tag}</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <h2>Informasi Kontak</h2>
        <p>Bagian ini disediakan sebagai sarana untuk menghubungi saya apabila diperlukan, baik untuk keperluan informasi, konfirmasi, maupun hal lain yang berkaitan dengan portofolio ini.</p>
        <div className="socials" style={{ justifyContent: 'center', margin: '32px 0' }}>
          <a href="https://www.instagram.com/dwiagustiav/" title="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/sukamager" title="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.tiktok.com/@velitaa1" title="TikTok">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
        <p style={{ marginTop: '32px', opacity: 0.6 }}>© 2026 • Dwi Agustia Velitasari. All rights reserved.</p>
      </footer>
    </>
  );
}
