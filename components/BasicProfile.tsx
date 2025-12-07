export default function BasicProfile() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Basic Profile
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential information about Barangay Rizal, Municipality of Pinamungajan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Location & Geography</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Province</p>
                <p className="text-lg text-gray-900">Cebu</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Municipality</p>
                <p className="text-lg text-gray-900">Pinamungajan</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Barangay</p>
                <p className="text-lg text-gray-900">Barangay Rizal</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Land Area</p>
                <p className="text-lg text-gray-900">634 hectares</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Barangay Hall Address</p>
                <p className="text-lg text-gray-900">Barangay Rizal Hall, Pinamungajan, Cebu</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Contact Number</p>
                <p className="text-lg text-gray-900">(032) 123-4567</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Email Address</p>
                <p className="text-lg text-gray-900">info@barangayrizal-pinamungajan.gov.ph</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Office Hours</p>
                <p className="text-lg text-gray-900">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-lg text-gray-900">Saturday: 8:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

