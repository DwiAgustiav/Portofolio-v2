# Portfolio React.js - Dwi Agustia Velitasari

Konversi dari HTML vanilla ke React.js untuk website portfolio pribadi.

## 📁 File yang Tersedia

### 1. **Portfolio.jsx** - Komponen React Modular
File komponen React yang dapat digunakan dalam proyek React existing dengan build tool (Vite, Create React App, Next.js, dll).

**Cara Pakai:**
```jsx
import Portfolio from './Portfolio';

function App() {
  return <Portfolio />;
}

export default App;
```

**Dependencies yang Dibutuhkan:**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

**Setup Proyek Baru dengan Vite:**
```bash
npm create vite@latest portfolio-react -- --template react
cd portfolio-react
npm install
# Copy Portfolio.jsx ke src/
# Update src/App.jsx untuk menggunakan komponen Portfolio
npm run dev
```

### 2. **index-react.html** - Standalone React (No Build Tool)
File HTML standalone yang langsung bisa dibuka di browser tanpa build tool. Menggunakan ESM CDN untuk React.

**Cara Pakai:**
- Cukup buka file `index-react.html` di browser
- Pastikan folder `img/` tersedia dengan semua gambar yang dibutuhkan
- Font Awesome dan Google Fonts akan di-load otomatis dari CDN

## ✨ Fitur

- ✅ **Dark/Light Mode** - Toggle tema dengan localStorage persistence
- ✅ **Smooth Scrolling** - Navigasi halus antar section
- ✅ **Scroll Animations** - Fade-in effect menggunakan Intersection Observer
- ✅ **Responsive Design** - Mobile-friendly layout
- ✅ **Animated Background** - Floating circles dengan gradient
- ✅ **React Hooks** - useState dan useEffect untuk state management

## 🎨 Komponen React

### State Management
```jsx
const [theme, setTheme] = useState('light');
const [scrolled, setScrolled] = useState(false);
```

### Effects
1. **Theme Persistence** - Save/load tema dari localStorage
2. **Scroll Detection** - Detect scroll untuk navbar styling
3. **Intersection Observer** - Trigger animations saat scroll

### Props & Data
- Skills array untuk section keahlian
- Projects array untuk galeri proyek
- Dynamic rendering menggunakan `.map()`

## 🖼️ Asset yang Dibutuhkan

Pastikan struktur folder seperti ini:
```
/
├── img/
│   ├── pp2.jpg
│   ├── projek.jpeg
│   ├── projek2.jpeg
│   ├── projek3.jpeg
│   ├── projek4.jpeg
│   ├── projek5.jpeg
│   └── projek6.jpeg
├── Portfolio.jsx (untuk React project)
└── index-react.html (untuk standalone)
```

## 🔧 Kustomisasi

### Mengubah Warna Tema
Edit CSS variables di bagian style:
```css
:root {
  --accent: #6366f1;        /* Warna utama */
  --accent-light: #818cf8;   /* Warna aksen terang */
}
```

### Menambah/Edit Skills
```jsx
const skills = [
  { icon: 'fa-brands fa-microsoft', name: 'Word & Excel' },
  { icon: 'fa-solid fa-code', name: 'Programming' }, // tambah baru
];
```

### Menambah/Edit Projects
```jsx
const projects = [
  {
    image: 'img/project-baru.jpg',
    tag: 'Web Development',
    title: 'Project Baru',
    description: 'Deskripsi project...'
  }
];
```

## 🌐 External Dependencies

Loaded via CDN:
- **React 18.2.0** - Framework JavaScript
- **React DOM 18.2.0** - DOM renderer
- **Font Awesome 6.4.0** - Icons
- **Inter Font** - Typography

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🚀 Production Deployment

### Untuk Portfolio.jsx:
1. Build project React: `npm run build`
2. Deploy folder `dist/` ke hosting (Vercel, Netlify, dll)

### Untuk index-react.html:
1. Upload file beserta folder `img/`
2. Langsung bisa diakses tanpa build

## 📝 Perbedaan dengan HTML Original

| Fitur | HTML Original | React Version |
|-------|---------------|---------------|
| State Management | Vanilla JS | React Hooks |
| DOM Manipulation | querySelector | Virtual DOM |
| Event Handlers | addEventListener | onClick props |
| Code Organization | Single file | Component-based |
| Re-usability | ❌ | ✅ |
| Build Required | ❌ | ✅ (untuk .jsx) |

## 💡 Tips Development

1. **Hot Reload**: Gunakan Vite untuk development dengan hot module replacement
2. **Type Safety**: Consider migrasi ke TypeScript (.tsx)
3. **Styling**: Consider pisah CSS ke file terpisah atau gunakan styled-components
4. **State Management**: Untuk app lebih besar, consider Context API atau Redux
5. **Optimization**: Lazy load images dengan React.lazy atau Intersection Observer

## 🔗 Links

- Portfolio: [https://www.instagram.com/dwiagustiav/](https://www.instagram.com/dwiagustiav/)
- GitHub: [https://github.com/sukamager](https://github.com/sukamager)
- TikTok: [https://www.tiktok.com/@velitaa1](https://www.tiktok.com/@velitaa1)

---

**© 2026 Dwi Agustia Velitasari**
