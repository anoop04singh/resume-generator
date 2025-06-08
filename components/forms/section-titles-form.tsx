"use client"

import { useResumeStore } from "@/lib/store"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SectionTitlesForm() {
  const { sectionTitles, updateSectionTitle } = useResumeStore()

  const sections = [
    { key: "summary" as const, label: "Professional Summary Section", placeholder: "Professional Summary" },
    { key: "experience" as const, label: "Work Experience Section", placeholder: "Work Experience" },
    { key: "education" as const, label: "Education Section", placeholder: "Education" },
    { key: "skills" as const, label: "Skills Section", placeholder: "Skills" },
  ]

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <Card key={section.key} className="border border-gray-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700">{section.label}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              <Label htmlFor={`${section.key}Title`} className="text-sm font-medium">
                Section Title
              </Label>
              <Input
                id={`${section.key}Title`}
                value={sectionTitles[section.key]}
                onChange={(e) => updateSectionTitle(section.key, e.target.value)}
                placeholder={section.placeholder}
                className="font-medium"
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">ATS Optimization Tips</h4>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>• Use standard section titles like "Work Experience" or "Professional Experience"</li>
          <li>• Avoid creative titles that ATS systems might not recognize</li>
          <li>• Keep section names simple and professional</li>
          <li>• Use consistent formatting throughout your resume</li>
        </ul>
      </div>
    </div>
  )
}
