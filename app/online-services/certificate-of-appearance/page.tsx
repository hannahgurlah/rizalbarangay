import OnlineServicesHero from '@/components/OnlineServicesHero'
import Breadcrumb from '@/components/Breadcrumb'

export default function CertificateOfAppearancePage() {
  return (
    <div className="flex flex-col">
      <OnlineServicesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Online Services', href: '/online-services' },
        { label: 'Certificate of Appearance' }
      ]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certificate of Appearance</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Request a Certificate of Appearance online. This document certifies that you appeared before the Barangay officials for a specific purpose.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Valid government-issued ID</li>
                <li>Purpose of appearance</li>
                <li>Date and time of appearance</li>
              </ul>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Request</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>Complete the online application form</li>
                <li>Provide details of your appearance</li>
                <li>Submit your request</li>
                <li>Appear at the Barangay Hall on the scheduled date</li>
                <li>Claim your certificate after appearance</li>
              </ol>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Time</h3>
                <p className="text-gray-700">Certificate of Appearance is typically issued on the same day after your appearance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

