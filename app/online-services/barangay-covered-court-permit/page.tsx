import OnlineServicesHero from '@/components/OnlineServicesHero'
import Breadcrumb from '@/components/Breadcrumb'

export default function BarangayCoveredCourtPermitPage() {
  return (
    <div className="flex flex-col">
      <OnlineServicesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Online Services', href: '/online-services' },
        { label: 'Barangay Covered Court Permit' }
      ]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Barangay Covered Court Permit</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Apply for a Barangay Covered Court Permit online. This permit allows you to use the barangay covered court for your events, sports activities, or gatherings.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Valid government-issued ID</li>
                <li>Event details (date, time, purpose)</li>
                <li>Expected number of attendees</li>
                <li>Barangay clearance</li>
              </ul>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Apply</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>Fill out the online permit application form</li>
                <li>Provide event details and schedule</li>
                <li>Submit your application at least one week before the event</li>
                <li>Pay the permit fee (if applicable)</li>
                <li>Wait for approval</li>
                <li>Claim your permit at the Barangay Hall</li>
              </ol>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Time</h3>
                <p className="text-gray-700">Barangay Covered Court Permit is typically processed within 3-5 business days. Apply at least one week in advance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

