# Resume Builder

A modern, ATS-friendly resume builder built with Next.js that helps you create professional resumes in minutes. Export your resume to Word format with a clean, minimalist design that passes through Applicant Tracking Systems.

## ✨ Features

### 🎯 **ATS-Friendly Design**
- Clean, professional layout optimized for Applicant Tracking Systems
- Standard section headers and formatting
- Proper typography and spacing for maximum readability

### 📝 **Comprehensive Resume Sections**
- **Personal Information**: Contact details with smart LinkedIn link formatting
- **Professional Summary**: Compelling overview of your background
- **Work Experience**: Detailed work history with bullet point support
- **Education**: Academic background and achievements
- **Skills**: Technical and professional skills with easy management
- **Custom Section Titles**: Personalize section headings to match your style

### 🔄 **Real-Time Preview**
- Live preview that updates as you type
- See exactly how your resume will look
- Responsive design that works on all devices

### 📤 **Export Functionality**
- Export to Microsoft Word (.docx) format
- Professional formatting maintained in exported documents
- Ready-to-submit resume files

### 🎨 **User Experience**
- Intuitive tabbed interface for easy navigation
- Smooth animations and transitions
- Expandable/collapsible sections for better organization
- Auto-save functionality (data persists in browser)

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/resume-builder.git
   cd resume-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📖 How to Use

### 1. **Personal Information**
- Start by filling in your basic contact details
- Add your LinkedIn profile URL (it will automatically display as "LinkedIn" link)
- Include your location and phone number

### 2. **Professional Summary**
- Write a compelling 2-3 sentence summary of your professional background
- Focus on your key strengths and career highlights
- Keep it concise and impactful

### 3. **Work Experience**
- Add your work history starting with the most recent position
- Use bullet points to describe your responsibilities and achievements
- Include specific metrics and accomplishments where possible
- Use action verbs to start each bullet point

### 4. **Education**
- List your educational background
- Include degree, institution, location, and dates
- Add relevant details like GPA, honors, or coursework if applicable

### 5. **Skills**
- Add technical and professional skills
- Use the "+" button or press Enter to add skills quickly
- Remove skills by clicking the "×" button

### 6. **Customize Sections**
- Use the "Sections" tab to customize section headings
- Follow ATS optimization tips provided in the interface
- Keep section names professional and standard

### 7. **Export Your Resume**
- Click the "Export DOCX" button to download your resume
- The exported file maintains professional formatting
- Ready to submit to employers or upload to job boards

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[Zustand](https://zustand-demo.pmnd.rs/)** - State management
- **[docx](https://docx.js.org/)** - Word document generation
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

## 📁 Project Structure

```
resume-builder/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── forms/
│   │   ├── education-form.tsx
│   │   ├── experience-form.tsx
│   │   ├── personal-info-form.tsx
│   │   ├── section-titles-form.tsx
│   │   ├── skills-form.tsx
│   │   └── summary-form.tsx
│   ├── ui/
│   │   └── [shadcn components]
│   ├── footer.tsx
│   ├── resume-editor.tsx
│   └── resume-preview.tsx
├── lib/
│   ├── export.ts
│   ├── store.ts
│   └── utils.ts
└── README.md
```

## 🎯 ATS Optimization Tips

The resume builder follows these ATS best practices:

- **Standard Section Headers**: Uses conventional titles like "Work Experience" and "Education"
- **Clean Formatting**: Simple, readable layout without complex graphics
- **Consistent Typography**: Professional fonts and proper hierarchy
- **Bullet Points**: Proper formatting for easy parsing
- **Contact Information**: Clear, accessible contact details
- **Keywords**: Space for relevant industry keywords in descriptions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anoop Singh**
- GitHub: [@anoop04singh](https://github.com/anoop04singh)


**Created with ❤️ by Anoop Singh**
