export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Barangay Rizal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about our community, history, and mission
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our History</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Barangay Rizal has been a cornerstone of the community for decades, named in honor of 
              Dr. Jose Rizal, the national hero of the Philippines. Our barangay has grown from a 
              small community into a thriving neighborhood that values unity, progress, and service.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We are committed to fostering a safe, inclusive, and prosperous environment for all 
              residents while preserving our rich cultural heritage and traditions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              To provide efficient, transparent, and responsive governance that addresses the needs 
              of our constituents while promoting community development and social welfare.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              A progressive, self-reliant, and harmonious barangay where every resident enjoys 
              quality public service and a high standard of living.
            </p>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
            <div className="text-gray-600">Residents</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Years of Service</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Dedicated Service</div>
          </div>
        </div>
      </div>
    </section>
  )
}

