import BrgyServicesHero from '@/components/BrgyServicesHero'
import Breadcrumb from '@/components/Breadcrumb'

export default function SocialServicesPage() {
  return (
    <div className="flex flex-col">
      <BrgyServicesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Barangay Services', href: '/barangay-services' },
        { label: 'Social Services' }
      ]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Social Services</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Providing compassionate and responsive social services that promote community welfare, empowerment, and shared responsibility. We are committed to supporting the most vulnerable members of our community.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Services Offered</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Financial assistance for medical emergencies</li>
                <li>Food assistance programs</li>
                <li>Livelihood assistance and support</li>
                <li>Senior citizen services and benefits</li>
                <li>Persons with disabilities (PWD) support</li>
                <li>Solo parent assistance</li>
                <li>Disaster relief and assistance</li>
                <li>Burial assistance</li>
              </ul>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Apply for Assistance</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>Visit the Barangay Social Services desk</li>
                <li>Fill out the application form</li>
                <li>Submit required documents (medical certificate, prescription, billing statement, etc.)</li>
                <li>Wait for assessment and approval</li>
                <li>Receive assistance upon approval</li>
              </ol>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Required Documents</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Barangay clearance</li>
                  <li>Valid ID</li>
                  <li>Medical certificate (for medical assistance)</li>
                  <li>Proof of income or certificate of indigency</li>
                  <li>Other supporting documents as required</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-700 mb-2">Monday to Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-700">Saturday: 8:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

