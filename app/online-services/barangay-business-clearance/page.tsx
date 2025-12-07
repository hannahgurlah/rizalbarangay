import OnlineServicesHero from '@/components/OnlineServicesHero'
import Breadcrumb from '@/components/Breadcrumb'

export default function BarangayBusinessClearancePage() {
  return (
    <div className="flex flex-col">
      <OnlineServicesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Online Services', href: '/online-services' },
        { label: 'Barangay Business Clearance' }
      ]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Barangay Business Clearance</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Apply for a Barangay Business Clearance online. This clearance is required for businesses operating within Barangay Rizal.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Business registration documents (DTI or SEC)</li>
                <li>Valid government-issued ID of business owner</li>
                <li>Proof of business address in Barangay Rizal</li>
                <li>Barangay clearance of business owner</li>
                <li>Tax identification number (TIN)</li>
              </ul>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Apply</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>Fill out the online business clearance form</li>
                <li>Upload all required business documents</li>
                <li>Submit your application</li>
                <li>Pay the processing fee</li>
                <li>Wait for inspection and approval</li>
                <li>Claim your business clearance at the Barangay Hall</li>
              </ol>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Time</h3>
                <p className="text-gray-700">Barangay Business Clearance is typically processed within 3-5 business days after site inspection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

