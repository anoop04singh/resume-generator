import { ResumeEditor } from "@/components/resume-editor"
import { ResumePreview } from "@/components/resume-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold mb-2 text-gray-800">Resume Builder   </h1>
          <p className="text-gray-600">Create an ATS-friendly resume in minutes</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ResumeEditor />
          <ResumePreview />
        </div>
      </div>
      <Footer />
    </main>
  )
}
