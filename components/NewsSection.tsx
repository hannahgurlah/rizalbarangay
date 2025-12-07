'use client'

import { useState } from 'react'

export default function NewsSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  const newsItems = [
    {
      id: 1,
      title: 'Barangay Rizal Launches "Clean And Green" Campaign',
      date: '2024-02-14',
      category: 'News',
      image: '🌱',
      description: 'Barangay Rizal officially launches its comprehensive "Clean and Green" campaign aimed at promoting environmental awareness and sustainable practices among residents. The campaign includes tree planting activities, waste management seminars, and community clean-up drives.',
      fullContent: 'The Barangay Rizal "Clean and Green" Campaign is a comprehensive environmental initiative designed to transform our community into a more sustainable and eco-friendly place. This campaign includes regular tree planting activities in designated areas, educational seminars on proper waste segregation and recycling, and monthly community clean-up drives. All residents are encouraged to participate and contribute to making Barangay Rizal a cleaner and greener place to live.',
    },
    {
      id: 2,
      title: 'Barangay Rizal Conducts Free Medical And Dental Mission',
      date: '2024-02-10',
      category: 'News',
      image: '🏥',
      description: 'A successful free medical and dental mission was conducted at the Barangay Hall, providing essential health services to over 200 residents. Services included health check-ups, dental examinations, and free medicines.',
      fullContent: 'The free medical and dental mission was organized in partnership with the Municipal Health Office and local volunteer doctors and dentists. Over 200 residents availed of free health check-ups, blood pressure monitoring, dental examinations, tooth extractions, and received free medicines. The mission aims to provide accessible healthcare services to all residents, especially those who cannot afford regular medical consultations.',
    },
    {
      id: 3,
      title: 'Barangay Rizal Holds "Pista Sa Barangay" Celebration',
      date: '2024-02-05',
      category: 'Events',
      image: '🎉',
      description: 'The annual "Pista Sa Barangay" celebration brought together residents for a day of festivities, cultural performances, and community bonding. The event featured traditional dances, local delicacies, and various games for all ages.',
      fullContent: 'The "Pista Sa Barangay" is an annual celebration that showcases the rich culture and traditions of Barangay Rizal. This year\'s celebration featured colorful cultural performances, including traditional Cebuano dances, a showcase of local delicacies, and various games and activities for children and adults. The event strengthened community bonds and provided an opportunity for residents to celebrate together.',
    },
    {
      id: 4,
      title: 'New Barangay Health Center Opens',
      date: '2024-01-28',
      category: 'News',
      image: '🏥',
      description: 'The newly constructed Barangay Health Center officially opens its doors, providing accessible healthcare services to all residents. The facility is equipped with modern medical equipment and staffed by qualified health workers.',
      fullContent: 'The new Barangay Health Center is a state-of-the-art facility that will serve as the primary healthcare provider for all residents. Equipped with modern medical equipment and staffed by qualified health workers, the center offers basic health services, maternal and child care, immunization programs, and health education. This facility brings quality healthcare closer to every Rizalian.',
    },
    {
      id: 5,
      title: 'Barangay Rizal Wins Best Barangay Award',
      date: '2024-01-20',
      category: 'News',
      image: '🏆',
      description: 'Barangay Rizal receives the "Best Barangay Award" from the Municipality of Pinamungajan for outstanding performance in governance, community programs, and public service delivery.',
      fullContent: 'Barangay Rizal has been recognized as the "Best Barangay" by the Municipality of Pinamungajan for its outstanding performance in various areas including good governance, implementation of community programs, efficient public service delivery, and active community participation. This award reflects the hard work and dedication of barangay officials and residents in building a progressive and united community.',
    },
    {
      id: 6,
      title: 'Youth Leadership Training Program Conducted',
      date: '2024-01-15',
      category: 'Events',
      image: '👥',
      description: 'A comprehensive youth leadership training program was conducted for young residents, focusing on leadership skills, community service, and civic engagement. Over 50 youth participants completed the program.',
      fullContent: 'The Youth Leadership Training Program is designed to develop the leadership potential of young residents and prepare them for active participation in community governance. The program covered topics on leadership principles, communication skills, project management, and civic engagement. Over 50 youth participants successfully completed the training and are now actively involved in various barangay programs and activities.',
    },
    {
      id: 7,
      title: 'Barangay Disaster Preparedness Drill',
      date: '2024-01-10',
      category: 'Events',
      image: '🚨',
      description: 'A comprehensive disaster preparedness drill was conducted to test the barangay\'s emergency response capabilities. The drill simulated various disaster scenarios and tested evacuation procedures.',
      fullContent: 'The disaster preparedness drill was organized to test and improve the barangay\'s emergency response capabilities. The drill simulated various disaster scenarios including earthquakes, floods, and fires, and tested evacuation procedures, communication systems, and coordination with emergency responders. This activity ensures that the barangay is well-prepared to respond to any emergency situation.',
    },
    {
      id: 8,
      title: 'Livelihood Training Program for Women',
      date: '2023-12-20',
      category: 'Events',
      image: '💼',
      description: 'A livelihood training program specifically designed for women was conducted, teaching various skills such as handicraft making, food processing, and small business management.',
      fullContent: 'The Livelihood Training Program for Women aims to empower women by providing them with skills and knowledge to start their own small businesses or improve their existing livelihoods. The program covered various topics including handicraft making, food processing, small business management, and financial literacy. Participants received certificates upon completion and are now equipped with skills to generate additional income for their families.',
    },
    {
      id: 9,
      title: 'Barangay Rizal Celebrates 30th Foundation Day',
      date: '2023-12-10',
      category: 'Events',
      image: '🎂',
      description: 'Barangay Rizal celebrated its 30th Foundation Day with a grand celebration featuring cultural performances, recognition of outstanding residents, and a community feast.',
      fullContent: 'The 30th Foundation Day celebration was a momentous occasion that brought together past and present leaders, residents, and guests. The celebration featured cultural performances showcasing the barangay\'s rich heritage, recognition of outstanding residents who have contributed to the community\'s development, and a grand community feast. The event highlighted the barangay\'s journey from its humble beginnings to becoming a progressive and united community.',
    },
    {
      id: 10,
      title: 'Barangay Road Improvement Project Completed',
      date: '2023-11-25',
      category: 'News',
      image: '🛣️',
      description: 'The major road improvement project in Barangay Rizal has been completed, providing better access and improved transportation for residents. The project included road widening and concrete paving.',
      fullContent: 'The road improvement project, which was funded through the Barangay Development Fund and support from the municipal government, has significantly improved transportation and accessibility in the barangay. The project included road widening, concrete paving, and installation of proper drainage systems. This infrastructure improvement benefits all residents and makes the barangay more accessible to visitors and businesses.',
    },
  ]

  const categories = ['all', ...Array.from(new Set(newsItems.map(item => item.category)))]

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            News and Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed and connected with the latest news and events that keep Barangay Rizal moving forward together.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search news and events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="sm:w-48">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-6xl">
                  {item.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No news or events found matching your search criteria.</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Total Items: {filteredNews.length}</p>
        </div>
      </div>
    </section>
  )
}

