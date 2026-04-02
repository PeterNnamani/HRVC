import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ReportForm } from '@/components/ReportForm';
import { Phone, MessageCircle, AlertTriangle } from 'lucide-react';

export default function Report() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Report a Violation</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Your safety and privacy are our top priority. Report anonymously and securely. We're here to listen and help.
            </p>
          </div>
        </section>

        {/* Emergency Alert */}
        <section className="py-8 md:py-12 bg-red-50 dark:bg-red-950 border-b border-red-200 dark:border-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4">
              <AlertTriangle size={32} className="text-red-600 dark:text-red-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">
                  In Immediate Danger?
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-4">
                  If you are in immediate physical danger, please contact emergency services first:
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center gap-2">
                    <Phone size={20} className="text-red-600 dark:text-red-400" />
                    <span className="font-semibold text-red-900 dark:text-red-100">Police: 191</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={20} className="text-red-600 dark:text-red-400" />
                    <span className="font-semibold text-red-900 dark:text-red-100">Ambulance: 112</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Completely Anonymous</h3>
                <p className="text-foreground/60 text-sm">
                  We don't ask for your name or identifying information. Your identity is protected always.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quick & Easy</h3>
                <p className="text-foreground/60 text-sm">
                  Submit your report in minutes. No lengthy forms or complicated processes.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Secure & Safe</h3>
                <p className="text-foreground/60 text-sm">
                  Your report is encrypted and stored securely. No information is shared without consent.
                </p>
              </div>
            </div>

            {/* Report Form */}
            <ReportForm />

            {/* Additional Resources */}
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Other Ways to Report
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle size={24} className="text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">WhatsApp</h3>
                  </div>
                  <p className="text-foreground/60 mb-4">
                    Send your report directly to our WhatsApp number for quick assistance.
                  </p>
                  <a
                    href="https://wa.me/2348078836002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-semibold hover:underline"
                  >
                    Chat with us on WhatsApp →
                  </a>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone size={24} className="text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">Phone Call</h3>
                  </div>
                  <p className="text-foreground/60 mb-4">
                    Prefer to speak to someone? Call our hotline to report verbally.
                  </p>
                  <a
                    href="tel:+2348078836002"
                    className="text-accent font-semibold hover:underline"
                  >
                    Call: +234 807 883 6002 →
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Reporting FAQs
              </h2>

              <div className="space-y-4">
                <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                  <summary className="font-semibold text-foreground flex justify-between items-center">
                    Is my report really anonymous?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-foreground/60 mt-4">
                    Yes, completely. We do not ask for any personal information and cannot trace your identity. Your report is stored securely and accessed only by authorized staff members who are bound by confidentiality.
                  </p>
                </details>

                <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                  <summary className="font-semibold text-foreground flex justify-between items-center">
                    What happens after I submit my report?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-foreground/60 mt-4">
                    Your report is reviewed by our team within 48 hours. We assess the violation and determine the appropriate next steps, which may include documenting the case, providing support resources, or escalating to relevant authorities with your consent.
                  </p>
                </details>

                <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                  <summary className="font-semibold text-foreground flex justify-between items-center">
                    Can I follow up on my report?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-foreground/60 mt-4">
                    After submission, you'll receive a reference ID. You can use this to follow up with us through WhatsApp or phone. We can provide updates on your case while maintaining your anonymity.
                  </p>
                </details>

                <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                  <summary className="font-semibold text-foreground flex justify-between items-center">
                    What if I'm afraid of retaliation?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-foreground/60 mt-4">
                    Your anonymity is guaranteed. No one at NYSC or your workplace will know you reported unless you choose to tell them. We also provide guidance on how to protect yourself while seeking justice.
                  </p>
                </details>

                <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                  <summary className="font-semibold text-foreground flex justify-between items-center">
                    Do I need evidence to report?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-foreground/60 mt-4">
                    No. Your account alone is valid. However, if you have evidence (photos, documents, messages), it helps us document the violation more thoroughly. You can share evidence later through secure channels.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
