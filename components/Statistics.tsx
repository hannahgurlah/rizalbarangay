export default function Statistics() {
  const stats = [
    {
      number: '2340',
      label: 'POPULATION',
    },
    {
      number: '30',
      label: 'YEARS OF FOUNDATION',
    },
    {
      number: '634 ha',
      label: 'LAND AREA',
    },
    {
      number: '1000+',
      label: 'BARANGAY PROGRAMS',
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-200 p-8 rounded-lg text-center"
            >
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

