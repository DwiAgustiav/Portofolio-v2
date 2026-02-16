# 🚀 Panduan Setup Portfolio React

Panduan lengkap untuk menjalankan website portfolio React.js.

---

## 📋 Daftar Isi

1. [Quick Start - Standalone](#quick-start---standalone)
2. [Setup React Project dengan Vite](#setup-react-project-dengan-vite)
3. [Menambahkan Gambar](#menambahkan-gambar)
4. [Deployment](#deployment)
5. [Troubleshooting](#troubleshooting)

---

## 🎯 Quick Start - Standalone

**Cara Tercepat** - Tanpa Install Apapun!

1. **Buka file `index-react.html` di browser**
   - Double-click file `index-react.html`
   - ATAU drag-drop ke browser
   - ATAU klik kanan → Open With → Browser

2. **Pastikan folder img tersedia**
   - Tambahkan gambar-gambar Anda ke folder `img/`
   - Lihat `img/README.md` untuk detail gambar yang dibutuhkan

3. **Done!** 🎉
   - Website langsung jalan tanpa setup apapun
   - Dark/Light mode berfungsi
   - Smooth scrolling aktif

**Kelebihan:**
- ✅ Tidak perlu install Node.js
- ✅ Tidak perlu build
- ✅ Langsung buka di browser
- ✅ Cocok untuk demo cepat

**Kekurangan:**
- ❌ Loading sedikit lebih lambat (CDN)
- ❌ Tidak bisa hot reload saat development
- ❌ Kurang optimal untuk production

---

## 🔧 Setup React Project dengan Vite

**Cara Professional** - Dengan Build Tool

### Prasyarat

Install dulu jika belum punya:
- **Node.js** (versi 14+) - [Download](https://nodejs.org/)
- **npm** atau **yarn** (otomatis terinstall dengan Node.js)

Cek instalasi:
```bash
node --version  # Harus muncul versi, contoh: v18.17.0
npm --version   # Harus muncul versi, contoh: 9.6.7
```

### Langkah-langkah

#### 1️⃣ Install Dependencies

```bash
# Buka terminal/command prompt di folder portfolio-react
cd portfolio-react

# Install semua package yang dibutuhkan
npm install
```

Ini akan install:
- React 18.2.0
- React DOM 18.2.0
- Vite 5.0.0
- Plugin Vite untuk React

#### 2️⃣ Jalankan Development Server

```bash
npm run dev
```

Output yang muncul:
```
VITE v5.0.0  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Buka browser dan akses: **http://localhost:5173/**

#### 3️⃣ Development Mode

Saat `npm run dev` jalan:
- ✅ Hot Module Replacement (HMR) - Auto reload saat edit code
- ✅ Fast refresh - Perubahan langsung terlihat
- ✅ Error overlay - Error muncul langsung di browser

**Tips Development:**
```bash
# Buka editor code (VS Code)
code .

# Edit file Portfolio.jsx
# Save file (Ctrl+S)
# Browser otomatis reload!
```

#### 4️⃣ Build untuk Production

```bash
npm run build
```

Ini akan create folder `dist/` dengan file yang sudah di-optimize:
- ✅ Code di-minify (ukuran kecil)
- ✅ CSS di-extract
- ✅ Assets di-optimize
- ✅ Ready untuk upload ke hosting

#### 5️⃣ Preview Build

Test hasil build sebelum deploy:
```bash
npm run preview
```

Buka **http://localhost:4173/** untuk lihat hasil production build.

---

## 🖼️ Menambahkan Gambar

### Lokasi File

Semua gambar harus ada di folder: **`img/`**

### File yang Dibutuhkan

```
img/
├── pp2.jpg        → Foto profil (500x500px atau 1000x1000px)
├── projek.jpeg    → Screenshot project 1
├── projek2.jpeg   → Screenshot project 2
├── projek3.jpeg   → Screenshot project 3
├── projek4.jpeg   → Screenshot project 4
├── projek5.jpeg   → Screenshot project 5
└── projek6.jpeg   → Screenshot project 6
```

### Cara Menambahkan

**Opsi 1: Copy langsung**
```bash
# Copy foto profil
copy foto-anda.jpg img/pp2.jpg

# Copy screenshots project
copy screenshot1.jpg img/projek.jpeg
copy screenshot2.jpg img/projek2.jpeg
# dst...
```

**Opsi 2: Rename file yang sudah ada**
- Punya file `foto-profil.png`? → Rename jadi `pp2.jpg`
- Punya file `project-website.jpg`? → Rename jadi `projek.jpeg`

**Opsi 3: Gunakan placeholder sementara**

Edit `Portfolio.jsx`:
```jsx
// Ganti path gambar dengan placeholder
const projects = [
  {
    image: 'https://via.placeholder.com/800x600/6366f1/ffffff?text=Project+1',
    // ...
  }
];
```

### Optimize Gambar

Sebelum upload, compress gambar untuk loading lebih cepat:

**Tools Rekomendasi:**
- [TinyPNG](https://tinypng.com/) - Web-based, gratis
- [Squoosh](https://squoosh.app/) - Web-based, by Google
- [ImageOptim](https://imageoptim.com/) - Mac app

**Target:**
- Profile pic: < 200KB
- Project images: < 300KB per file

---

## 🌐 Deployment

Deploy website ke hosting gratis!

### 1. Vercel (Recommended)

**Paling Mudah & Gratis**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

Atau via website:
1. Upload folder ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Auto-deploy! ✨

### 2. Netlify

**Drag & Drop Deploy**

1. Build project: `npm run build`
2. Buka [netlify.com](https://netlify.com)
3. Drag folder `dist/` ke website
4. Done!

### 3. GitHub Pages

**Deploy via Git**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Tambah ke package.json:
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

Website akan live di: `https://username.github.io/portfolio-react/`

### 4. Hosting Tradisional

Upload folder hasil build:

1. Build: `npm run build`
2. Upload semua isi folder `dist/` ke hosting (via FTP/cPanel)
3. Pastikan `index.html` ada di root folder

---

## 🔍 Troubleshooting

### ❌ npm tidak dikenali

**Problem:** `'npm' is not recognized as an internal or external command`

**Solusi:**
1. Install Node.js dari [nodejs.org](https://nodejs.org/)
2. Restart terminal/command prompt
3. Cek lagi: `npm --version`

### ❌ Gambar tidak muncul

**Problem:** Gambar broken/tidak tampil

**Solusi:**
1. Cek nama file sama persis dengan di code
2. Cek lokasi file di folder `img/`
3. Cek extension file (.jpg, .jpeg, .png)
4. Huruf besar/kecil harus sama persis!

### ❌ Port 5173 sudah digunakan

**Problem:** `Port 5173 is already in use`

**Solusi:**
```bash
# Gunakan port lain
npm run dev -- --port 3000
```

### ❌ Font Awesome icon tidak muncul

**Problem:** Icon tidak tampil, hanya kotak kosong

**Solusi:**
1. Cek koneksi internet (Font Awesome dari CDN)
2. Refresh browser (Ctrl+F5)
3. Clear cache browser

### ❌ Error saat npm install

**Problem:** `npm ERR!` berbagai macam

**Solusi:**
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install

# Atau gunakan yarn
npm install -g yarn
yarn install
```

### ❌ Build gagal

**Problem:** `npm run build` error

**Solusi:**
1. Cek error message di terminal
2. Pastikan semua import benar
3. Cek syntax error di code
4. Delete folder `dist/` dan build ulang

---

## 📱 Tips & Tricks

### Hot Reload Tidak Jalan

Edit `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})
```

### Custom Port

Edit `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
```

### Base URL untuk Subdirectory

Jika deploy di subfolder, edit `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // sesuaikan dengan path Anda
})
```

---

## 📞 Bantuan Lebih Lanjut

Masih ada masalah?

1. **Cek dokumentasi:**
   - [React Docs](https://react.dev/)
   - [Vite Docs](https://vitejs.dev/)

2. **Google error message** Anda

3. **Stack Overflow** - hampir semua error sudah ada solusinya

4. **GitHub Issues** - untuk bug spesifik

---

## ✅ Checklist Deployment

Sebelum deploy, pastikan:

- [ ] Semua gambar sudah ada dan ter-optimize
- [ ] Build berhasil tanpa error: `npm run build`
- [ ] Preview build oke: `npm run preview`
- [ ] Test di berbagai browser (Chrome, Firefox, Safari)
- [ ] Test responsive di mobile
- [ ] Dark/Light mode berfungsi
- [ ] Smooth scroll berfungsi
- [ ] All links (Instagram, GitHub, TikTok) benar
- [ ] No console errors di browser

---

**Happy Coding! 🚀**

Jika ada pertanyaan, jangan ragu untuk bertanya!
