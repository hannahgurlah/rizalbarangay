import BrgyServicesHero from '@/components/BrgyServicesHero'
import Breadcrumb from '@/components/Breadcrumb'

export default function SportsEventsPage() {
  return (
    <div className="flex flex-col">
      <BrgyServicesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Barangay Services', href: '/barangay-services' },
        { label: 'Sports and Events' }
      ]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sports and Events</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Showcasing Barangay Rizal's sports and event facilities that inspire active lifestyles, teamwork, and community celebration. Our facilities are available for use by residents and organizations.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Facilities Available</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Barangay Covered Court - for basketball, volleyball, and other indoor sports</li>
                <li>Open field - for outdoor activities and events</li>
                <li>Stage area - for performances and ceremonies</li>
                <li>Multi-purpose hall - for meetings and gatherings</li>
              </ul>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Regular Activities</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Youth Sports Tournament</h4>
                  <p className="text-gray-700">Annual basketball and volleyball tournaments for youth</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Community Events</h4>
                  <p className="text-gray-700">Regular community celebrations and festivals</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Fitness Programs</h4>
                  <p className="text-gray-700">Zumba, aerobics, and other fitness activities</p>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Reserve Facilities</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                <li>Visit the Barangay Hall at least one week before your event</li>
                <li>Fill out the facility reservation form</li>
                <li>Submit required documents and pay reservation fee (if applicable)</li>
                <li>Receive confirmation and permit</li>
                <li>Follow facility rules and regulations</li>
              </ol>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Information</h3>
                <p className="text-gray-700">For facility reservations and inquiries, please visit the Barangay Hall during office hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

