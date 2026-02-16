# Folder Gambar Portfolio

## 📸 Gambar yang Dibutuhkan

Silakan tambahkan file-file gambar berikut ke folder ini:

### Profile Picture
- **pp2.jpg** - Foto profil untuk header hero section

### Project Images
- **projek.jpeg** - Website Portofolio Pribadi
- **projek2.jpeg** - Dokumentasi Kegiatan dan Tugas Sekolah
- **projek3.jpeg** - Perbaikan Kabel FO
- **projek4.jpeg** - Penggunaan Alat Plesing Fiber Optik
- **projek5.jpeg** - Penyesuaian Client pada Mikrotik dan OLT
- **projek6.jpeg** - Pendataan Client Mikrotik Menggunakan Excel

## 📐 Rekomendasi Ukuran

- **Profile Picture (pp2.jpg)**: 
  - Ukuran: 500x500px atau 1000x1000px (square/persegi)
  - Format: JPG atau PNG
  - Ratio: 1:1

- **Project Images (projek.jpeg - projek6.jpeg)**:
  - Ukuran: 800x600px atau 1200x900px
  - Format: JPG atau PNG
  - Ratio: 4:3 atau 16:9
  - Optimal: 1200x800px untuk tampilan terbaik

## 🎨 Tips Gambar

1. Gunakan gambar berkualitas tinggi tetapi sudah di-compress
2. Format JPG untuk foto (lebih kecil file size)
3. Format PNG untuk screenshot atau gambar dengan text
4. Pastikan pencahayaan foto cukup baik dan tidak blur
5. Compress gambar menggunakan tools seperti TinyPNG atau Squoosh

## ⚙️ Jika Gambar Tidak Tersedia

Jika saat ini belum memiliki semua gambar, Anda bisa:

1. Gunakan placeholder dari situs seperti:
   - https://via.placeholder.com/800x600
   - https://picsum.photos/800/600
   - https://placehold.co/800x600

2. Update path gambar di code:
   ```jsx
   // Contoh menggunakan placeholder
   image: 'https://via.placeholder.com/800x600/6366f1/ffffff?text=Project+1'
   ```

3. Generate gambar AI menggunakan tools seperti:
   - Midjourney
   - DALL-E
   - Stable Diffusion

## 📝 Update Path (Jika Diperlukan)

Jika menggunakan nama file yang berbeda, update di:

**Portfolio.jsx** atau **index-react.html**, bagian:
```jsx
// Profile picture
<img src="img/pp2.jpg" alt="Profile Picture" />

// Projects array
const projects = [
  {
    image: 'img/projek.jpeg',  // <- Update di sini
    // ...
  }
];
```

---

**Note**: Pastikan semua gambar sudah ada di folder ini sebelum menjalankan website agar tidak terjadi broken image (gambar tidak muncul).
