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

export function ExperienceForm() {
  const { experience, addExperience, updateExperience, removeExperience } = useResumeStore()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(experience.length > 0 ? 0 : null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const handleAddExperience = () => {
    addExperience({
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    })
    setExpandedIndex(experience.length)
  }

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {experience.map((job, index) => (
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
                    {job.title || job.company ? `${job.title} at ${job.company}` : `Experience ${index + 1}`}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeExperience(index)
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
                        <Label htmlFor={`job-title-${index}`}>Job Title</Label>
                        <Input
                          id={`job-title-${index}`}
                          value={job.title}
                          onChange={(e) => updateExperience(index, { title: e.target.value })}
                          placeholder="Software Engineer"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`company-${index}`}>Company</Label>
                        <Input
                          id={`company-${index}`}
                          value={job.company}
                          onChange={(e) => updateExperience(index, { company: e.target.value })}
                          placeholder="Acme Inc."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`location-${index}`}>Location</Label>
                      <Input
                        id={`location-${index}`}
                        value={job.location}
                        onChange={(e) => updateExperience(index, { location: e.target.value })}
                        placeholder="City, State"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`start-date-${index}`}>Start Date</Label>
                        <Input
                          id={`start-date-${index}`}
                          value={job.startDate}
                          onChange={(e) => updateExperience(index, { startDate: e.target.value })}
                          placeholder="MM/YYYY"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`end-date-${index}`}>End Date</Label>
                        <Input
                          id={`end-date-${index}`}
                          value={job.endDate}
                          onChange={(e) => updateExperience(index, { endDate: e.target.value })}
                          placeholder="MM/YYYY or Present"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`description-${index}`}>Description</Label>
                      <Textarea
                        id={`description-${index}`}
                        value={job.description}
                        onChange={(e) => updateExperience(index, { description: e.target.value })}
                        placeholder="Describe your responsibilities and achievements..."
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

      <Button variant="outline" onClick={handleAddExperience} className="w-full flex items-center gap-2">
        <Plus className="h-4 w-4" /> Add Experience
      </Button>
    </div>
  )
}
