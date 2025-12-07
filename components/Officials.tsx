export default function Officials() {
  const officials = [
    {
      name: 'Juan Dela Cruz',
      position: 'Barangay Captain',
      image: '👨‍💼',
    },
    {
      name: 'Maria Santos',
      position: 'Barangay Secretary',
      image: '👩‍💼',
    },
    {
      name: 'Pedro Garcia',
      position: 'Barangay Treasurer',
      image: '👨‍💼',
    },
    {
      name: 'Ana Rodriguez',
      position: 'Barangay Councilor',
      image: '👩‍💼',
    },
    {
      name: 'Carlos Mendoza',
      position: 'Barangay Councilor',
      image: '👨‍💼',
    },
    {
      name: 'Liza Fernandez',
      position: 'Barangay Councilor',
      image: '👩‍💼',
    },
  ]

  return (
    <section id="officials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Barangay Officials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated public servants working for our community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {officials.map((official, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="text-6xl mb-4">{official.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {official.name}
              </h3>
              <p className="text-primary-600 font-medium">
                {official.position}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Our officials are committed to serving the community with integrity and dedication.
          </p>
        </div>
      </div>
    </section>
  )
}

