import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { FAQ } from '@/components/FAQ';

const RIGHTS_DATA = [
  {
    category: 'NYSC-Specific Rights',
    items: [
      {
        id: 'monthly-allowance',
        question: 'What is my entitled monthly allowance?',
        answer: 'As of 2024, NYSC corps members are entitled to a monthly allowance of ₦33,000. This is a standard entitlement that should not be delayed. If your allowance is late, you have the right to make a formal complaint to the NYSC Directorate.',
      },
      {
        id: 'insurance',
        question: 'Am I covered by insurance during service?',
        answer: 'Yes, you are entitled to personal accident insurance coverage for the duration of your service. This covers accidental death, permanent disability, and medical treatment. Ensure you are registered with the insurance scheme and understand your coverage limits.',
      },
      {
        id: 'service-location',
        question: 'Can I be posted to a dangerous location?',
        answer: 'You have the right to a posting location where you can work safely. NYSC should avoid posting corps members to areas with active conflict or extreme danger. If you believe your posting is unsafe, you can request a review.',
      },
      {
        id: 'accommodation',
        question: 'What accommodation is provided?',
        answer: 'You are entitled to reasonable accommodation during your service. While NYSC provides orientation camps and some postings have designated accommodation, the standard varies. You can seek assistance from your camp or local government office if accommodation is inadequate.',
      },
      {
        id: 'medical-care',
        question: 'Am I entitled to medical care?',
        answer: 'Yes, you have the right to basic medical care during your service. You can access healthcare at designated NYSC clinics or partner hospitals. Keep your insurance card with you and report any medical emergencies immediately.',
      },
    ],
  },
  {
    category: 'Fundamental Human Rights',
    items: [
      {
        id: 'freedom-expression',
        question: 'Do I have freedom of expression as a corps member?',
        answer: 'Yes, you have the constitutional right to freedom of expression. While serving, you must maintain professional conduct at your place of assignment, but you cannot be punished for expressing your views on public matters outside of work hours.',
      },
      {
        id: 'freedom-assembly',
        question: 'Can I participate in peaceful protests?',
        answer: 'Yes, you have the right to peaceful assembly and association. You can participate in lawful protests or demonstrations. However, you must do so responsibly and not while on official duty or in ways that bring your service into disrepute.',
      },
      {
        id: 'freedom-religion',
        question: 'Can I practice my religion freely?',
        answer: 'Yes, you have the right to freedom of religion and conscience. NYSC should respect your religious beliefs and practices. You are entitled to observe religious holidays and practices as permitted by law.',
      },
      {
        id: 'non-discrimination',
        question: 'Am I protected from discrimination?',
        answer: 'Yes, the law prohibits discrimination based on race, ethnicity, gender, religion, disability, or other protected characteristics. If you experience discrimination during your service, you have the right to report it and seek redress.',
      },
      {
        id: 'dignity',
        question: 'What protections do I have against degrading treatment?',
        answer: 'You have the right to be treated with dignity and respect. This includes protection from torture, cruel treatment, harassment, and sexual abuse. You have the right to report any abuse and seek legal remedies.',
      },
    ],
  },
  {
    category: 'During Orientation Camp',
    items: [
      {
        id: 'camp-rules',
        question: 'What are the basic rules during orientation?',
        answer: 'Orientation camps have discipline and order. You are expected to follow camp rules, maintain cleanliness, participate in physical activities, and respect superiors and fellow corps members. However, any punishment must be lawful and proportionate.',
      },
      {
        id: 'harassment',
        question: 'What should I do if I experience harassment at camp?',
        answer: 'Report it immediately to the camp commandant, medical officer, or the welfare officer. Document the incident with dates, times, and witnesses. If not resolved, escalate to your state office or contact HRVC for support.',
      },
      {
        id: 'medical-camp',
        question: 'What medical services are available at camp?',
        answer: 'The camp medical center provides basic healthcare, vaccinations, and emergency services. You have the right to access these services free of charge. If you need specialized treatment, the camp can refer you to a hospital.',
      },
      {
        id: 'grievance-camp',
        question: 'How do I lodge a complaint during camp?',
        answer: 'Use the official complaint channels: speak to your platoon commander, visit the welfare officer, or report to the camp commandant. You can also report anonymously through HRVC if you fear retaliation.',
      },
    ],
  },
  {
    category: 'Postings & Assignments',
    items: [
      {
        id: 'posting-criteria',
        question: 'How is posting placement decided?',
        answer: 'NYSC uses factors like your qualifications, location preferences, and national needs. While you can indicate preferences, final placement is at NYSC\'s discretion. You should be notified in advance to prepare.',
      },
      {
        id: 'unfair-posting',
        question: 'Can I appeal my posting if I feel it\'s unfair?',
        answer: 'Yes, you can appeal to your state NYSC office within the specified period. Grounds for appeal include health issues, personal hardship, or posting outside your qualification. Appeals must be submitted with supporting documents.',
      },
      {
        id: 'work-hours',
        question: 'What are my work hour requirements?',
        answer: 'As a corps member, you are expected to work reasonable hours appropriate to your assignment. You are entitled to regular rest days and reasonable working conditions. Excessive work hours without compensation may violate your rights.',
      },
      {
        id: 'workplace-safety',
        question: 'Am I entitled to a safe working environment?',
        answer: 'Yes, your employer must provide a workplace free from hazards. This includes adequate equipment, training for dangerous tasks, and safety measures. Report any unsafe conditions to your supervisor and NYSC.',
      },
    ],
  },
  {
    category: 'CDS & Election Duties',
    items: [
      {
        id: 'election-participation',
        question: 'Must I participate in election duties?',
        answer: 'Election duties are a key responsibility for corps members. However, you have the right to fair compensation, transportation, security, and appropriate training. You should be briefed on duties, risks, and your rights.',
      },
      {
        id: 'election-safety',
        question: 'What are my safety protections during elections?',
        answer: 'NYSC and election authorities must ensure your safety. This includes security at polling stations, protection from violence, and transportation in secure vehicles. Report any security threats or violence immediately.',
      },
      {
        id: 'cds-duties',
        question: 'What are my rights during Community Development Service (CDS)?',
        answer: 'CDS aims to benefit communities while providing service. You have the right to appropriate supervision, safety during projects, and support from local leaders. The project should align with your skills and the community\'s needs.',
      },
      {
        id: 'project-conditions',
        question: 'What if CDS project conditions are poor?',
        answer: 'You can report poor conditions to your team leader and NYSC coordinator. If issues persist, escalate through official channels. You are not obligated to work in unsafe or inhumane conditions.',
      },
    ],
  },
];

export default function KnowYourRights() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-border bg-white p-10 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/80 mb-3">
                Know Your Rights
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Your rights as an NYSC corps member, explained clearly.
              </h1>
              <p className="text-foreground/70 leading-8">
                Explore practical guidance on allowances, safety, workplace protections, and reporting channels so you know what is owed to you and how to act if that trust is broken.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {RIGHTS_DATA.map((section) => (
                <div key={section.category} className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-foreground mb-6 border-b border-accent/20 pb-5">
                    {section.category}
                  </h2>
                  <FAQ items={section.items} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  NYSC Contact Information
                </h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>
                    <strong>National HQ:</strong> Abuja
                  </p>
                  <p>
                    <strong>Website:</strong> www.nysc.gov.ng
                  </p>
                  <p>
                    <strong>Toll-Free:</strong> Call 107 (from any network)
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Emergency Hotlines
                </h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>
                    <strong>Police:</strong> 191
                  </p>
                  <p>
                    <strong>Ambulance:</strong> 112
                  </p>
                  <p>
                    <strong>HRVC Support:</strong> Available 24/7
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Important Documents
                </h3>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="text-accent hover:underline text-sm block"
                  >
                    NYSC Act & Regulations (PDF)
                  </a>
                  <a
                    href="#"
                    className="text-accent hover:underline text-sm block"
                  >
                    Corps Member Rights Charter (PDF)
                  </a>
                  <a
                    href="#"
                    className="text-accent hover:underline text-sm block"
                  >
                    Complaint Procedures Guide (PDF)
                  </a>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Legal Support
                </h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>
                    Legal Aid Foundation provides free legal assistance
                  </p>
                  <a href="#" className="text-accent hover:underline">
                    Find nearest office →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Experienced a Violation?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Report it anonymously and safely. We're here to help.
            </p>
            <a
              href="/report"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Report a Violation
            </a>
          </div>
        </section>
      </main>

      <section className='bg-accent'>
        <div style={{ height: '9px', width: '100%', borderRadius: '50%' }}></div>
      </section>
      <Footer />
    </div>
  );
}
