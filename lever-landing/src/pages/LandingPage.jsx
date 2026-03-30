import Nav from '../components/Nav'
import Hero from '../components/Hero'
import HealthCheck from '../components/HealthCheck'
import Marquee from '../components/Marquee'
import SystemPipeline from '../components/SystemPipeline'
import Comparison from '../components/Comparison'
import Deliverables from '../components/Deliverables'
import StatsBar from '../components/StatsBar'
import CaseStudies from '../components/CaseStudies'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Nav />
      <main>
        <Hero />
        <HealthCheck />
        <Marquee />
        <SystemPipeline />
        <Comparison />
        <Deliverables />
        <StatsBar />
        <CaseStudies />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
