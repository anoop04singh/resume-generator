"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PersonalInfoForm } from "@/components/forms/personal-info-form"
import { ExperienceForm } from "@/components/forms/experience-form"
import { EducationForm } from "@/components/forms/education-form"
import { SkillsForm } from "@/components/forms/skills-form"
import { SummaryForm } from "@/components/forms/summary-form"
import { SectionTitlesForm } from "@/components/forms/section-titles-form"
import { useResumeStore } from "@/lib/store"
import { exportToDocx } from "@/lib/export"
import { motion } from "framer-motion"
import { Download, User, FileText, Briefcase, GraduationCap, Award, Settings } from "lucide-react"

export function ResumeEditor() {
  const [activeTab, setActiveTab] = useState("personal")
  const resumeData = useResumeStore((state) => state)

  const handleExportDocx = async () => {
    await exportToDocx(resumeData)
  }

  const tabs = [
    { id: "personal", label: "Personal", icon: User },
    { id: "summary", label: "Summary", icon: FileText },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Award },
    { id: "sections", label: "Sections", icon: Settings },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="shadow-lg border-0">
        <CardHeader className="border-b bg-gray-50/50">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-semibold text-gray-900">Resume Builder</CardTitle>
              <p className="text-sm text-gray-600 mt-1">Create your professional resume</p>
            </div>
            <Button onClick={handleExportDocx} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4" />
              Export DOCX
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-6 w-full rounded-none border-b bg-gray-50/30 h-auto p-0">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-xs font-medium">{tab.label}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>
            <div className="p-6">
              <TabsContent value="personal" className="mt-0">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    <p className="text-sm text-gray-600">Add your contact details and basic information</p>
                  </div>
                  <PersonalInfoForm />
                </div>
              </TabsContent>
              <TabsContent value="summary" className="mt-0">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Professional Summary</h3>
                    <p className="text-sm text-gray-600">Write a compelling summary of your professional background</p>
                  </div>
                  <SummaryForm />
                </div>
              </TabsContent>
              <TabsContent value="experience" className="mt-0">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Work Experience</h3>
                    <p className="text-sm text-gray-600">Add your professional work history</p>
                  </div>
                  <ExperienceForm />
                </div>
              </TabsContent>
              <TabsContent value="education" className="mt-0">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                    <p className="text-sm text-gray-600">Add your educational background</p>
                  </div>
                  <EducationForm />
                </div>
              </TabsContent>
              <TabsContent value="skills" className="mt-0">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
                    <p className="text-sm text-gray-600">List your technical and professional skills</p>
                  </div>
                  <SkillsForm />
                </div>
              </TabsContent>
              <TabsContent value="sections" className="mt-0">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Section Headings</h3>
                    <p className="text-sm text-gray-600">Customize the titles of each section</p>
                  </div>
                  <SectionTitlesForm />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  )
}
