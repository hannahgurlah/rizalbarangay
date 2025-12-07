import BrgyServicesHero from '@/components/BrgyServicesHero'
import Breadcrumb from '@/components/Breadcrumb'

export default function LuponPage() {
  return (
    <div className="flex flex-col">
      <BrgyServicesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Barangay Services', href: '/barangay-services' },
        { label: 'Lupon' }
      ]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Lupon Tagapamayapa</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                The Lupon Tagapamayapa of Barangay Rizal upholds peace and harmony by resolving community disputes through fair and amicable mediation. Our dedicated mediators work tirelessly to ensure that conflicts are resolved peacefully without the need for formal court proceedings.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Services Offered</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Mediation of community disputes</li>
                <li>Conciliation services for barangay residents</li>
                <li>Arbitration for civil disputes</li>
                <li>Legal counseling and guidance</li>
                <li>Conflict resolution training</li>
              </ul>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to File a Complaint</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>Visit the Barangay Hall during office hours</li>
                <li>Request a complaint form from the Lupon Secretary</li>
                <li>Fill out the complaint form with complete details</li>
                <li>Submit the form along with supporting documents</li>
                <li>Attend the scheduled mediation hearing</li>
              </ol>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Information</h3>
                <p className="text-gray-700">For inquiries, please visit the Barangay Hall or contact the Lupon Secretary.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

