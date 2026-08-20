import { Head } from 'vite-react-ssg'
import {
  BenefitsSection,
  ComplianceSection,
  ConsultationSection,
  FinalCtaSection,
  Footer,
  Header,
  HeroSection,
  PricingSection,
  QuestionsSection,
  TrustMetricsSection,
  WhyUsSection,
} from '../../components/prt-cfo'
import './part-time-cfo.css'
import MeetJatinSection from '../../components/prt-cfo/MeetJatinSection'
import SocialProofSection from '../../components/prt-cfo/SocialProofSection'

function PartTimeCfoPage() {
  return (
    <>
      <Head>
        <title>Part-Time CFO Services | Growwth Partners</title>
        <meta
          name="description"
          content="Fractional CFO services for startups, small businesses, medium businesses, and enterprise teams across Singapore and Australia."
        />
      </Head>

      <div className="pcfo-page">
        <Header />
        <main>
          <HeroSection />
          <TrustMetricsSection />
          <BenefitsSection />
          <QuestionsSection />
          <SocialProofSection/>
          <MeetJatinSection/>
          <ConsultationSection />
          <WhyUsSection />
          <PricingSection />
          <ComplianceSection />
          <FinalCtaSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default PartTimeCfoPage
