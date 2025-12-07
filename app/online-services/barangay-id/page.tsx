import OnlineServicesHero from '@/components/OnlineServicesHero'
import Breadcrumb from '@/components/Breadcrumb'

export default function BarangayIDPage() {
  return (
    <div className="flex flex-col">
      <OnlineServicesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Online Services', href: '/online-services' },
        { label: 'Barangay ID' }
      ]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Barangay ID</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Apply for your Barangay ID online. This identification card serves as proof of residency in Barangay Rizal and is required for various transactions and services.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Proof of residency (utility bill, lease agreement, etc.)</li>
                <li>Valid government-issued ID</li>
                <li>2x2 ID picture (recent)</li>
                <li>Birth certificate or valid ID</li>
              </ul>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Apply</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>Fill out the online application form below</li>
                <li>Upload required documents</li>
                <li>Submit your application</li>
                <li>Wait for approval notification</li>
                <li>Claim your Barangay ID at the Barangay Hall</li>
              </ol>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Time</h3>
                <p className="text-gray-700">Barangay ID applications are typically processed within 3-5 business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

