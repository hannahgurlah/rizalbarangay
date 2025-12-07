export default function NewsEvents() {
  const newsItems = [
    {
      title: 'Barangay Rizal Launches "Clean And Green" Campaign',
      date: '14 Feb • News',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Barangay Rizal Conducts Free Medical And Dental Mission',
      date: '10 Feb • News',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Barangay Rizal Holds "Pista Sa Barangay" Celebration',
      date: '5 Feb • Events',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]

  return (
    <section id="news" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <p className="text-sm text-gray-600 uppercase tracking-wide">Latest News and Events</p>
        </div>
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 max-w-3xl">
            Stay informed and connected with the latest news and events that keep Barangay Rizal moving forward together.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {item.date}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

