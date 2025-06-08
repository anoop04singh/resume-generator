"use client"

import { useResumeStore } from "@/lib/store"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function ResumePreview() {
  const { personalInfo, summary, experience, education, skills, sectionTitles } = useResumeStore()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="sticky top-8"
    >
      <Card className="shadow-lg border-0" id="resume-preview">
        <CardContent className="p-8 bg-white">
          {/* Personal Info */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-gray-900">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <div className="text-sm text-gray-600 flex flex-wrap justify-center gap-x-4 gap-y-1">
              {personalInfo.email && <span>{personalInfo.email}</span>}
              {personalInfo.phone && <span>{personalInfo.phone}</span>}
              {personalInfo.location && <span>{personalInfo.location}</span>}
              {personalInfo.linkedin && (
                <a
                  href={
                    personalInfo.linkedin.startsWith("http")
                      ? personalInfo.linkedin
                      : `https://${personalInfo.linkedin}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Summary */}
          {summary && (
            <div className="mb-8">
              <h2 className="text-base font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1 mb-3">
                {sectionTitles.summary}
              </h2>
              <p className="text-sm leading-relaxed text-gray-800">{summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-base font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1 mb-3">
                {sectionTitles.experience}
              </h2>
              {experience.map((job, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">{job.title}</h3>
                    <span className="text-sm text-gray-600 font-medium">
                      {job.startDate} - {job.endDate || "Present"}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">
                    {job.company}
                    {job.location && <span className="text-gray-600"> | {job.location}</span>}
                  </div>
                  {job.description && (
                    <div className="text-sm text-gray-800 leading-relaxed">
                      {job.description.split("\n").map((line, lineIndex) => (
                        <div key={lineIndex} className="mb-1">
                          {line.trim().startsWith("•") || line.trim().startsWith("-") ? (
                            <div className="flex items-start">
                              <span className="mr-2 mt-1">•</span>
                              <span>{line.replace(/^[•-]\s*/, "")}</span>
                            </div>
                          ) : line.trim() ? (
                            <div>{line}</div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className="mb-8">
              <h2 className="text-base font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1 mb-3">
                {sectionTitles.education}
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <span className="text-sm text-gray-600 font-medium">
                      {edu.startDate} - {edu.endDate || "Present"}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    {edu.institution}
                    {edu.location && <span className="text-gray-600"> | {edu.location}</span>}
                  </div>
                  {edu.description && <p className="text-sm text-gray-800 leading-relaxed">{edu.description}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h2 className="text-base font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1 mb-3">
                {sectionTitles.skills}
              </h2>
              <div className="text-sm text-gray-800 leading-relaxed">{skills.join(" • ")}</div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
