"use client"

import { useResumeStore } from "@/lib/store"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function SummaryForm() {
  const { summary, updateSummary } = useResumeStore()

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          value={summary}
          onChange={(e) => updateSummary(e.target.value)}
          placeholder="Briefly describe your professional background and key strengths..."
          className="min-h-[150px]"
        />
      </div>
    </div>
  )
}
