import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Privacy Policy for Origin Books Publishing."
        path="/privacy-policy"
      />

      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Origin Books Publishing collects, uses, and protects your information."
      />

      <section className="bg-paper py-24 lg:py-28">
        <div className="container-editorial max-w-4xl">
          <Reveal>
            <article className="prose prose-slate max-w-none">
              <p className="font-mono text-xs uppercase tracking-widest2 text-slate-500">
                Effective Date: July 27, 2026
              </p>

              <p className="mt-8 text-lg leading-relaxed text-slate-700">
                Welcome to <strong>Origin Books Publishing</strong>. We value your privacy and are
                committed to protecting the personal information of authors, writers, publishers,
                businesses, and visitors who use our website and professional publishing services.
              </p>

              <p>
                Origin Books Publishing provides comprehensive <strong>book publishing services</strong>,
                <strong> self-publishing solutions</strong>, <strong>eBook publishing</strong>,
                <strong> book marketing</strong>, <strong>manuscript editing</strong>,
                <strong> book formatting</strong>, <strong>custom book cover design</strong>,
                <strong> author branding</strong>, <strong>ISBN assistance</strong>,
                <strong> Amazon Kindle Direct Publishing (KDP) support</strong>,
                <strong> print-on-demand publishing</strong>, and other publishing solutions designed
                to help authors successfully publish and promote their books worldwide.
              </p>

              <p>
                By using our website, you agree to the practices described in this Privacy Policy.
              </p>

              <h2>Information We Collect</h2>

              <p>To provide high-quality publishing and author services, we may collect the following information:</p>

              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business or author name</li>
                <li>Book title and manuscript details</li>
                <li>Billing information</li>
                <li>Communication history</li>
                <li>Website usage information</li>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Cookies and analytics data</li>
              </ul>

              <p>
                This information helps us improve our professional publishing services, customer
                support, website performance, and user experience.
              </p>

              <h2>How We Use Your Information</h2>

              <p>Origin Books Publishing may use your information to:</p>

              <ul>
                <li>Provide book publishing services</li>
                <li>Publish eBooks and printed books</li>
                <li>Edit and format manuscripts</li>
                <li>Design professional book covers</li>
                <li>Process payments securely</li>
                <li>Deliver book marketing campaigns</li>
                <li>Respond to customer inquiries</li>
                <li>Improve our publishing platform</li>
                <li>Send project updates</li>
                <li>Provide technical support</li>
                <li>Improve website performance</li>
                <li>Prevent fraud and unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Cookies and Tracking Technologies</h2>

              <p>
                Our website uses cookies and similar technologies to improve browsing, analyze
                website traffic, remember user preferences, and enhance overall performance.
              </p>

              <p>
                Cookies help us understand how visitors interact with our website so we can continue
                improving our publishing and marketing services.
              </p>

              <p>You may disable cookies through your browser settings at any time.</p>

              <h2>Google Analytics</h2>

              <p>
                We may use analytics tools to better understand website traffic, visitor behavior,
                and service performance. These tools help us improve our website and create a better
                experience for authors and publishing clients.
              </p>

              <p>
                Analytics information does not directly identify individual visitors.
              </p>

              <h2>Sharing Your Information</h2>

              <p>
                Origin Books Publishing respects your privacy. We do not sell, rent, or trade your
                personal information.
              </p>

              <p>
                We may share information only when necessary with trusted service providers involved
                in payment processing, website hosting, email communication, printing, book
                distribution, or marketing support. These providers are required to protect your
                information and use it only for the services they perform.
              </p>

              <p>
                We may also disclose information if required by law or to protect our legal rights.
              </p>

              <h2>Data Security</h2>

              <p>
                We implement reasonable technical and organizational measures to safeguard your
                personal information against unauthorized access, disclosure, alteration, or
                destruction.
              </p>

              <p>
                While no internet transmission is completely secure, we continually work to maintain
                industry-standard security practices.
              </p>

              <h2>Author Manuscripts and Intellectual Property</h2>

              <p>
                Origin Books Publishing respects the ownership of every author's work.
              </p>

              <p>
                Authors retain ownership of their original manuscripts unless otherwise agreed in a
                written publishing contract. Any manuscripts, drafts, or related files shared with
                us are handled with appropriate confidentiality and used only to provide the
                requested publishing services.
              </p>

              <h2>Third-Party Services</h2>

              <p>
                Our website may contain links to third-party websites, bookstores, payment providers,
                social media platforms, or publishing platforms.
              </p>

              <p>
                We are not responsible for the privacy practices or content of external websites. We
                encourage users to review the privacy policies of any third-party services they visit.
              </p>

              <h2>Children's Privacy</h2>

              <p>
                Our publishing services are intended for individuals who are at least 18 years old
                or who have the permission of a parent or legal guardian.
              </p>

              <p>We do not knowingly collect personal information from children.</p>

              <h2>Your Privacy Rights</h2>

              <p>Depending on your location, you may have the right to:</p>

              <ul>
                <li>Request access to your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent where applicable</li>
                <li>Request data portability</li>
                <li>Object to certain data processing activities</li>
              </ul>

              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>

              <h2>Changes to This Privacy Policy</h2>

              <p>
                Origin Books Publishing may update this Privacy Policy from time to time to reflect
                changes in our services, legal requirements, or website functionality.
              </p>

              <p>
                The latest version will always be published on this page with the updated effective
                date.
              </p>

              <h2>Contact Us</h2>

              <p>
                If you have any questions regarding this Privacy Policy or our publishing services,
                please contact us through the contact information provided on the Origin Books
                Publishing website.
              </p>

              <p>
                Thank you for trusting Origin Books Publishing with your publishing journey. We are
                committed to protecting your privacy while delivering professional book publishing,
                eBook publishing, editing, formatting, book marketing, author branding, and
                publishing support services.
              </p>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  )
}