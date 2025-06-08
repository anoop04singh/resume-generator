"use client"

import { useState } from "react"
import { useResumeStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function EducationForm() {
  const { education, addEducation, updateEducation, removeEducation } = useResumeStore()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(education.length > 0 ? 0 : null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const handleAddEducation = () => {
    addEducation({
      degree: "",
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    })
    setExpandedIndex(education.length)
  }

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-4">
              <CardHeader className="py-3 px-4 cursor-pointer" onClick={() => toggleExpand(index)}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">
                    {edu.degree || edu.institution ? `${edu.degree} at ${edu.institution}` : `Education ${index + 1}`}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeEducation(index)
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    {expandedIndex === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </div>
              </CardHeader>

              {expandedIndex === index && (
                <CardContent className="pt-2">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`degree-${index}`}>Degree</Label>
                        <Input
                          id={`degree-${index}`}
                          value={edu.degree}
                          onChange={(e) => updateEducation(index, { degree: e.target.value })}
                          placeholder="Bachelor of Science"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`institution-${index}`}>Institution</Label>
                        <Input
                          id={`institution-${index}`}
                          value={edu.institution}
                          onChange={(e) => updateEducation(index, { institution: e.target.value })}
                          placeholder="University Name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`edu-location-${index}`}>Location</Label>
                      <Input
                        id={`edu-location-${index}`}
                        value={edu.location}
                        onChange={(e) => updateEducation(index, { location: e.target.value })}
                        placeholder="City, State"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`edu-start-date-${index}`}>Start Date</Label>
                        <Input
                          id={`edu-start-date-${index}`}
                          value={edu.startDate}
                          onChange={(e) => updateEducation(index, { startDate: e.target.value })}
                          placeholder="MM/YYYY"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`edu-end-date-${index}`}>End Date</Label>
                        <Input
                          id={`edu-end-date-${index}`}
                          value={edu.endDate}
                          onChange={(e) => updateEducation(index, { endDate: e.target.value })}
                          placeholder="MM/YYYY or Present"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`edu-description-${index}`}>Description (Optional)</Label>
                      <Textarea
                        id={`edu-description-${index}`}
                        value={edu.description}
                        onChange={(e) => updateEducation(index, { description: e.target.value })}
                        placeholder="GPA, honors, relevant coursework, etc."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>

      <Button variant="outline" onClick={handleAddEducation} className="w-full flex items-center gap-2">
        <Plus className="h-4 w-4" /> Add Education
      </Button>
    </div>
  )
}
