import OnlineServicesHero from '@/components/OnlineServicesHero'
import Breadcrumb from '@/components/Breadcrumb'

export default function CertificateOfSoloParentPage() {
  return (
    <div className="flex flex-col">
      <OnlineServicesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Online Services', href: '/online-services' },
        { label: 'Certificate of Solo Parent' }
      ]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certificate of Solo Parent</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Apply for a Solo Parent Certificate online. This certificate entitles solo parents to various benefits and privileges under the Solo Parents Welfare Act.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Valid government-issued ID</li>
                <li>Birth certificate of child/children</li>
                <li>Proof of solo parent status (death certificate, annulment papers, etc.)</li>
                <li>Proof of residency</li>
                <li>Income tax return or certificate of indigency</li>
              </ul>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Apply</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>Complete the online application form</li>
                <li>Upload all required documents</li>
                <li>Submit your application</li>
                <li>Wait for verification and approval</li>
                <li>Claim your certificate at the Barangay Hall</li>
              </ol>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Time</h3>
                <p className="text-gray-700">Solo Parent Certificate is typically processed within 5-7 business days after verification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

