"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface PersonalInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  linkedin: string
}

interface Experience {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
}

interface Education {
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  description: string
}

interface SectionTitles {
  summary: string
  experience: string
  education: string
  skills: string
}

interface ResumeState {
  personalInfo: PersonalInfo
  summary: string
  experience: Experience[]
  education: Education[]
  skills: string[]
  sectionTitles: SectionTitles

  updatePersonalInfo: (info: Partial<PersonalInfo>) => void
  updateSummary: (summary: string) => void

  addExperience: (exp: Experience) => void
  updateExperience: (index: number, exp: Partial<Experience>) => void
  removeExperience: (index: number) => void

  addEducation: (edu: Education) => void
  updateEducation: (index: number, edu: Partial<Education>) => void
  removeEducation: (index: number) => void

  addSkill: (skill: string) => void
  removeSkill: (index: number) => void

  updateSectionTitle: (section: keyof SectionTitles, title: string) => void
}

export const useResumeStore = create<ResumeState>()(
  persist(
    (set) => ({
      personalInfo: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "(123) 456-7890",
        location: "New York, NY",
        linkedin: "linkedin.com/in/johndoe",
      },
      summary:
        "Dedicated and detail-oriented professional with 5+ years of experience in software development. Proven track record of delivering high-quality solutions and collaborating effectively with cross-functional teams.",
      experience: [
        {
          title: "Senior Software Engineer",
          company: "Tech Solutions Inc.",
          location: "New York, NY",
          startDate: "01/2020",
          endDate: "Present",
          description:
            "• Led development of cloud-based applications using React and Node.js\n• Improved system performance by 40% through code optimization\n• Mentored junior developers and conducted code reviews",
        },
        {
          title: "Software Developer",
          company: "Digital Innovations",
          location: "Boston, MA",
          startDate: "06/2017",
          endDate: "12/2019",
          description:
            "• Developed and maintained web applications using JavaScript and PHP\n• Collaborated with UX designers to implement responsive interfaces\n• Participated in Agile development processes",
        },
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          institution: "University of Technology",
          location: "Boston, MA",
          startDate: "09/2013",
          endDate: "05/2017",
          description: "GPA: 3.8/4.0, Dean's List",
        },
      ],
      skills: ["JavaScript", "React", "Node.js", "TypeScript", "HTML/CSS", "Git", "Agile", "Problem Solving"],
      sectionTitles: {
        summary: "Professional Summary",
        experience: "Work Experience",
        education: "Education",
        skills: "Skills",
      },

      updatePersonalInfo: (info) =>
        set((state) => ({
          personalInfo: { ...state.personalInfo, ...info },
        })),

      updateSummary: (summary) => set({ summary }),

      addExperience: (exp) =>
        set((state) => ({
          experience: [...state.experience, exp],
        })),

      updateExperience: (index, exp) =>
        set((state) => ({
          experience: state.experience.map((item, i) => (i === index ? { ...item, ...exp } : item)),
        })),

      removeExperience: (index) =>
        set((state) => ({
          experience: state.experience.filter((_, i) => i !== index),
        })),

      addEducation: (edu) =>
        set((state) => ({
          education: [...state.education, edu],
        })),

      updateEducation: (index, edu) =>
        set((state) => ({
          education: state.education.map((item, i) => (i === index ? { ...item, ...edu } : item)),
        })),

      removeEducation: (index) =>
        set((state) => ({
          education: state.education.filter((_, i) => i !== index),
        })),

      addSkill: (skill) =>
        set((state) => ({
          skills: [...state.skills, skill],
        })),

      removeSkill: (index) =>
        set((state) => ({
          skills: state.skills.filter((_, i) => i !== index),
        })),

      updateSectionTitle: (section, title) =>
        set((state) => ({
          sectionTitles: {
            ...state.sectionTitles,
            [section]: title,
          },
        })),
    }),
    {
      name: "resume-storage",
    },
  ),
)
