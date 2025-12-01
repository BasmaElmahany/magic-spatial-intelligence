# MAGIC Website - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- pnpm package manager

### Installation Steps

1. **Extract the project**
   ```bash
   unzip magic-spatial-intelligence-enhanced.zip
   cd magic-spatial-intelligence
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```
   The website will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   pnpm build
   ```

5. **Preview production build**
   ```bash
   pnpm preview
   ```

---

## 🎯 Key Features

### 1. Language Switching
- Click the **"العربية"** or **"English"** button in the top-right corner
- All content automatically switches between Arabic and English
- RTL (Right-to-Left) layout for Arabic

### 2. AI Chatbot
- Click the **blue chat button** in the bottom-right corner
- Ask questions in English or Arabic
- Get instant information about centers, services, and training

**Sample Questions:**
- "Tell me about the centers"
- "What services do you offer?"
- "ما هي الخدمات؟"
- "أخبرني عن مركز الابتكار"

### 3. Navigation
- **Home**: Overview with vision, goals, and centers preview
- **About**: Detailed information about MAGIC
- **Centers**: All 6 specialized centers with detailed views
- **Services**: Comprehensive service catalog
- **Platforms**: Digital platforms information
- **Complaints**: Complaint submission system

### 4. Animations
- Scroll through pages to see smooth fade-in animations
- Hover over cards to see interactive effects
- Icons rotate and scale on hover
- Smooth page transitions

---

## 📁 Project Structure

```
magic-spatial-intelligence/
├── client/                      # Frontend React application
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Chatbot.tsx     # AI chatbot component
│   │   │   ├── MainLayout.tsx  # Main layout wrapper
│   │   │   └── ui/             # UI component library
│   │   ├── contexts/           # React contexts
│   │   │   └── LanguageContext.tsx  # Translations
│   │   ├── data/               # Data files
│   │   │   └── centerData.ts   # Centers & services data
│   │   ├── pages/              # Page components
│   │   │   ├── Home.tsx        # Homepage
│   │   │   ├── About.tsx       # About page
│   │   │   ├── Centers.tsx     # Centers page
│   │   │   └── Services.tsx    # Services page
│   │   └── App.tsx             # Main app component
│   └── index.html              # HTML entry point
├── server/                      # Backend server
│   └── index.ts                # Express server
├── package.json                # Dependencies
└── vite.config.ts              # Vite configuration
```

---

## 🎨 Customization Guide

### Update Center Information
Edit `/client/src/data/centerData.ts`:
```typescript
export const centers = [
  {
    id: 1,
    name: "Your Center Name",
    description: "Your description",
    // ... more fields
  }
];
```

### Add New Translations
Edit `/client/src/contexts/LanguageContext.tsx`:
```typescript
const translations = {
  en: {
    yourKey: "English text"
  },
  ar: {
    yourKey: "النص العربي"
  }
};
```

### Modify Chatbot Responses
Edit `/client/src/components/Chatbot.tsx`:
```typescript
const responses = {
  keywords: ['your', 'keywords'],
  en: "English response",
  ar: "الرد بالعربية"
};
```

### Change Colors
Update Tailwind classes in component files:
```tsx
// Example: Change gradient colors
<div className="bg-gradient-to-r from-blue-600 to-cyan-600">
```

---

## 🔧 Common Tasks

### Add a New Page
1. Create file in `/client/src/pages/NewPage.tsx`
2. Add route in `/client/src/App.tsx`
3. Add navigation link in `/client/src/components/MainLayout.tsx`
4. Add translations in `/client/src/contexts/LanguageContext.tsx`

### Update Statistics
Edit the statistics in `/client/src/pages/Home.tsx`:
```tsx
<div className="text-center">
  <div className="text-5xl font-bold">105M+</div>
  <div className="text-xl">{t.workDone}</div>
</div>
```

### Modify Footer
Edit `/client/src/components/MainLayout.tsx` footer section

---

## 📱 Responsive Design

The website is fully responsive and works on:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

Test responsive design:
1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Select different device sizes

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
pnpm dev --port 3001
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Errors
```bash
# Check TypeScript errors
pnpm tsc --noEmit
```

---

## 🌐 Deployment Options

### Option 1: Static Hosting (Netlify, Vercel)
1. Build the project: `pnpm build`
2. Deploy the `dist/public` folder
3. Configure redirects for SPA routing

### Option 2: Node.js Server
1. Build the project: `pnpm build`
2. Run: `node dist/index.js`
3. Configure reverse proxy (nginx/Apache)

### Option 3: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build
CMD ["node", "dist/index.js"]
```

---

## 📊 Performance Tips

1. **Optimize Images**: Compress images before adding
2. **Lazy Loading**: Components load on demand
3. **Code Splitting**: Automatic route-based splitting
4. **Caching**: Configure browser caching headers
5. **CDN**: Use CDN for static assets in production

---

## 🔒 Security Best Practices

1. **Environment Variables**: Use `.env` for sensitive data
2. **HTTPS**: Always use HTTPS in production
3. **CORS**: Configure CORS properly
4. **Input Validation**: Validate all user inputs
5. **Dependencies**: Keep dependencies updated

---

## 📞 Support

### Contact Information
- **Location**: Minya Governorate, Egypt
- **Phone**: 0862343958
- **Email**: info@magic-minya.gov.eg

### Technical Issues
1. Check this guide first
2. Review error messages in browser console
3. Check server logs
4. Contact technical support

---

## ✅ Testing Checklist

Before deployment, test:
- [ ] All pages load correctly
- [ ] Language switching works
- [ ] Chatbot responds correctly
- [ ] All links work
- [ ] Forms submit properly
- [ ] Mobile responsive
- [ ] Animations smooth
- [ ] No console errors
- [ ] Production build works
- [ ] All images load

---

## 🎓 Learning Resources

### React
- [React Documentation](https://react.dev)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)

### Framer Motion
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Animation Examples](https://www.framer.com/motion/examples)

---

## 🎉 You're All Set!

The MAGIC website is now ready to use. Explore all features, customize as needed, and deploy to production when ready.

**Happy Building! 🚀**
