export default function BarangayOfficials() {
  const officials = [
    {
      name: 'Juan Dela Cruz',
      position: 'Barangay Captain',
      image: '👨‍💼',
      responsibilities: 'Overall administration and leadership of the barangay',
    },
    {
      name: 'Maria Santos',
      position: 'Barangay Secretary',
      image: '👩‍💼',
      responsibilities: 'Documentation, record-keeping, and administrative support',
    },
    {
      name: 'Pedro Garcia',
      position: 'Barangay Treasurer',
      image: '👨‍💼',
      responsibilities: 'Financial management and budget oversight',
    },
    {
      name: 'Ana Rodriguez',
      position: 'Barangay Councilor',
      image: '👩‍💼',
      responsibilities: 'Legislative functions and community representation',
    },
    {
      name: 'Carlos Mendoza',
      position: 'Barangay Councilor',
      image: '👨‍💼',
      responsibilities: 'Legislative functions and community representation',
    },
    {
      name: 'Liza Fernandez',
      position: 'Barangay Councilor',
      image: '👩‍💼',
      responsibilities: 'Legislative functions and community representation',
    },
    {
      name: 'Roberto Tan',
      position: 'Barangay Councilor',
      image: '👨‍💼',
      responsibilities: 'Legislative functions and community representation',
    },
    {
      name: 'Carmen Lim',
      position: 'Barangay Councilor',
      image: '👩‍💼',
      responsibilities: 'Legislative functions and community representation',
    },
  ]

  const committees = [
    {
      name: 'Committee on Peace and Order',
      chairperson: 'Ana Rodriguez',
      members: ['Carlos Mendoza', 'Roberto Tan'],
    },
    {
      name: 'Committee on Health and Sanitation',
      chairperson: 'Liza Fernandez',
      members: ['Carmen Lim'],
    },
    {
      name: 'Committee on Education',
      chairperson: 'Carlos Mendoza',
      members: ['Ana Rodriguez'],
    },
    {
      name: 'Committee on Infrastructure',
      chairperson: 'Roberto Tan',
      members: ['Liza Fernandez', 'Carmen Lim'],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Barangay Officials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated public servants working for our community
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Executive Officials</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {officials.slice(0, 3).map((official, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-6xl mb-4">{official.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {official.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {official.position}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {official.responsibilities}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Barangay Councilors</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {officials.slice(3).map((official, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-6xl mb-4">{official.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {official.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {official.position}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {official.responsibilities}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Barangay Committees</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {committees.map((committee, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {committee.name}
                </h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Chairperson:</span> {committee.chairperson}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Members:</span> {committee.members.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

