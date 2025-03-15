import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ProfessionalSummary from "@/components/ProfessionalSummary"
import Skills from "@/components/Skills"
import WorkExperience from "@/components/WorkExperience"
import Education from "@/components/Education"
import Projects from '../components/Projects'
import AdditionalInfo from '../components/AdditionalInfo'
import DownloadSection from '../components/DownloadSection'
import Footer from '../components/Footer'
import MarqueeSection from '@/components/MarqueeSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <Navbar />
      <Hero />
      <MarqueeSection />
      <ProfessionalSummary />
      <Skills />
      <WorkExperience />
      <Education />
      <Projects />
      <AdditionalInfo />
      <DownloadSection />
      <Footer />
    </main>
  )
}

