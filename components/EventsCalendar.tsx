'use client'

import { useState } from 'react'

export default function EventsCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const upcomingEvents = [
    {
      id: 1,
      title: 'Barangay Assembly Meeting',
      date: '2024-03-15',
      time: '9:00 AM',
      location: 'Barangay Hall',
      description: 'Quarterly barangay assembly meeting to discuss community concerns and updates.',
      category: 'Meeting',
    },
    {
      id: 2,
      title: 'Community Clean-Up Drive',
      date: '2024-03-20',
      time: '7:00 AM',
      location: 'Barangay Rizal',
      description: 'Monthly community clean-up drive. All residents are encouraged to participate.',
      category: 'Community',
    },
    {
      id: 3,
      title: 'Free Health Check-Up',
      date: '2024-03-25',
      time: '8:00 AM - 12:00 PM',
      location: 'Barangay Health Center',
      description: 'Free health check-up for all residents including blood pressure, blood sugar, and BMI screening.',
      category: 'Health',
    },
    {
      id: 4,
      title: 'Youth Sports Tournament',
      date: '2024-04-05',
      time: '8:00 AM',
      location: 'Barangay Covered Court',
      description: 'Annual youth sports tournament featuring basketball and volleyball competitions.',
      category: 'Sports',
    },
    {
      id: 5,
      title: 'Senior Citizens Day',
      date: '2024-04-10',
      time: '9:00 AM',
      location: 'Barangay Hall',
      description: 'Special event for senior citizens with health services, entertainment, and free lunch.',
      category: 'Community',
    },
    {
      id: 6,
      title: 'Earth Day Celebration',
      date: '2024-04-22',
      time: '7:00 AM',
      location: 'Barangay Rizal',
      description: 'Earth Day celebration with tree planting activities and environmental awareness program.',
      category: 'Environment',
    },
  ]

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const getEventsForMonth = (month: number, year: number) => {
    return upcomingEvents.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate.getMonth() === month && eventDate.getFullYear() === year
    })
  }

  const currentMonthEvents = getEventsForMonth(selectedMonth, selectedYear)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mark your calendars and join us for these upcoming community events
          </p>
        </div>

        {/* Month/Year Selector */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex gap-4 items-center">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {months.map((month, index) => (
                <option key={index} value={index}>{month}</option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {[2024, 2025].map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {currentMonthEvents.length > 0 ? (
            currentMonthEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border-l-4 border-primary-600 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {event.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <span className="mr-2">🕐</span>
                        {event.time}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-2">📍</span>
                        {event.location}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-500 text-lg">No events scheduled for this month.</p>
            </div>
          )}
        </div>

        {/* All Upcoming Events */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Upcoming Events</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded">
                    {event.category}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {event.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  📅 {new Date(event.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  🕐 {event.time}
                </p>
                <p className="text-sm text-gray-600">
                  📍 {event.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

