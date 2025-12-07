export default function Demographics() {
  const demographics = [
    {
      category: 'Total Population',
      value: '2,340',
      description: 'As of 2024',
      icon: '👥',
    },
    {
      category: 'Number of Households',
      value: '580',
      description: 'Average household size: 4.03',
      icon: '🏠',
    },
    {
      category: 'Male Population',
      value: '1,180',
      description: '50.4% of total population',
      icon: '👨',
    },
    {
      category: 'Female Population',
      value: '1,160',
      description: '49.6% of total population',
      icon: '👩',
    },
    {
      category: 'Youth Population (0-17)',
      value: '820',
      description: '35.0% of total population',
      icon: '🧒',
    },
    {
      category: 'Senior Citizens (60+)',
      value: '280',
      description: '12.0% of total population',
      icon: '👴',
    },
  ]

  const ageGroups = [
    { range: '0-5 years', count: '180', percentage: '7.7%' },
    { range: '6-12 years', count: '320', percentage: '13.7%' },
    { range: '13-17 years', count: '320', percentage: '13.7%' },
    { range: '18-30 years', count: '580', percentage: '24.8%' },
    { range: '31-45 years', count: '420', percentage: '17.9%' },
    { range: '46-59 years', count: '240', percentage: '10.3%' },
    { range: '60+ years', count: '280', percentage: '12.0%' },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Demographics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Statistical overview of Barangay Rizal's population and community composition
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {demographics.map((demo, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-4">{demo.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {demo.category}
              </h3>
              <p className="text-3xl font-bold text-primary-600 mb-2">
                {demo.value}
              </p>
              <p className="text-sm text-gray-600">
                {demo.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Age Group Distribution</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Age Group</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Population</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {ageGroups.map((group, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">{group.range}</td>
                    <td className="py-3 px-4 text-right text-gray-900 font-medium">{group.count}</td>
                    <td className="py-3 px-4 text-right text-primary-600 font-semibold">{group.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

