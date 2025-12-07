import OnlineServicesHero from '@/components/OnlineServicesHero'
import Breadcrumb from '@/components/Breadcrumb'

export default function BarangayClearancePage() {
  return (
    <div className="flex flex-col">
      <OnlineServicesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Online Services', href: '/online-services' },
        { label: 'Barangay Clearance' }
      ]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Barangay Clearance</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Request a Barangay Clearance online. This document certifies that you are a resident of Barangay Rizal with good standing in the community.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Valid government-issued ID</li>
                <li>Proof of residency</li>
                <li>Purpose of clearance</li>
              </ul>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Request</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>Fill out the online request form</li>
                <li>Provide required information and documents</li>
                <li>Submit your request</li>
                <li>Pay the processing fee (if applicable)</li>
                <li>Claim your clearance at the Barangay Hall</li>
              </ol>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Time</h3>
                <p className="text-gray-700">Barangay Clearance is typically issued on the same day or within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

