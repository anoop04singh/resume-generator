"use client"

import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx"
import saveAs from "file-saver"

export const exportToDocx = async (resumeData: any) => {
  const { personalInfo, summary, experience, education, skills, sectionTitles } = resumeData

  // Create document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Header with name
          new Paragraph({
            text: `${personalInfo.firstName} ${personalInfo.lastName}`,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),

          // Contact info
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
            children: [
              new TextRun(`${personalInfo.email}`),
              personalInfo.phone ? new TextRun(` | ${personalInfo.phone}`) : new TextRun(""),
              personalInfo.location ? new TextRun(` | ${personalInfo.location}`) : new TextRun(""),
              personalInfo.linkedin ? new TextRun(` | LinkedIn`) : new TextRun(""),
            ],
          }),

          // Summary section
          ...(summary
            ? [
                new Paragraph({
                  text: sectionTitles.summary.toUpperCase(),
                  heading: HeadingLevel.HEADING_2,
                  spacing: { before: 400, after: 200 },
                }),
                new Paragraph({
                  text: summary,
                  spacing: { after: 400 },
                }),
              ]
            : []),

          // Experience section
          ...(experience.length > 0
            ? [
                new Paragraph({
                  text: sectionTitles.experience.toUpperCase(),
                  heading: HeadingLevel.HEADING_2,
                  spacing: { before: 400, after: 200 },
                }),
                ...experience.flatMap((job) => [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: job.title,
                        bold: true,
                      }),
                      new TextRun({
                        text: ` | ${job.company}`,
                        bold: true,
                      }),
                      job.location ? new TextRun(` | ${job.location}`) : new TextRun(""),
                      new TextRun({
                        text: `\t${job.startDate} - ${job.endDate || "Present"}`,
                      }),
                    ],
                    spacing: { before: 200, after: 100 },
                  }),
                  new Paragraph({
                    text: job.description,
                    spacing: { after: 300 },
                  }),
                ]),
              ]
            : []),

          // Education section
          ...(education.length > 0
            ? [
                new Paragraph({
                  text: sectionTitles.education.toUpperCase(),
                  heading: HeadingLevel.HEADING_2,
                  spacing: { before: 400, after: 200 },
                }),
                ...education.flatMap((edu) => [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: edu.degree,
                        bold: true,
                      }),
                      new TextRun({
                        text: ` | ${edu.institution}`,
                        bold: true,
                      }),
                      edu.location ? new TextRun(` | ${edu.location}`) : new TextRun(""),
                      new TextRun({
                        text: `\t${edu.startDate} - ${edu.endDate || "Present"}`,
                      }),
                    ],
                    spacing: { before: 200, after: 100 },
                  }),
                  ...(edu.description
                    ? [
                        new Paragraph({
                          text: edu.description,
                          spacing: { after: 300 },
                        }),
                      ]
                    : []),
                ]),
              ]
            : []),

          // Skills section
          ...(skills.length > 0
            ? [
                new Paragraph({
                  text: sectionTitles.skills.toUpperCase(),
                  heading: HeadingLevel.HEADING_2,
                  spacing: { before: 400, after: 200 },
                }),
                new Paragraph({
                  text: skills.join(" • "),
                }),
              ]
            : []),
        ],
      },
    ],
  })

  // Generate and save document
  const buffer = await Packer.toBuffer(doc)
  const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" })
  saveAs(blob, "resume.docx")
}
