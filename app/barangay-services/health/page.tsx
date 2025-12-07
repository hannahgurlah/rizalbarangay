import BrgyServicesHero from '@/components/BrgyServicesHero'
import Breadcrumb from '@/components/Breadcrumb'

export default function HealthPage() {
  return (
    <div className="flex flex-col">
      <BrgyServicesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Barangay Services', href: '/barangay-services' },
        { label: 'Health' }
      ]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Health Services</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Delivering accessible and quality health services to promote the well-being and safety of every Rizalian through compassionate health care. Our health programs are designed to ensure that all residents have access to essential health services.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Services Offered</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Free medical check-ups and consultations</li>
                <li>Immunization programs for children and adults</li>
                <li>Maternal and child health services</li>
                <li>Dental services and oral health programs</li>
                <li>Health education and awareness campaigns</li>
                <li>First aid and emergency medical assistance</li>
                <li>Referral services to hospitals and clinics</li>
              </ul>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Regular Programs</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Monthly Medical Mission</h4>
                  <p className="text-gray-700">Free medical and dental services every first Saturday of the month</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Vaccination Drive</h4>
                  <p className="text-gray-700">Regular vaccination programs for children and adults</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Health Seminars</h4>
                  <p className="text-gray-700">Educational seminars on various health topics</p>
                </div>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Barangay Health Center</h3>
                <p className="text-gray-700 mb-2">Open: Monday to Friday, 8:00 AM - 5:00 PM</p>
                <p className="text-gray-700">For emergencies, please contact the Barangay Hall immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

