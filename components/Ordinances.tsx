'use client'

import { useState } from 'react'

export default function Ordinances() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterYear, setFilterYear] = useState('all')

  const ordinances = [
    {
      number: 'Ordinance No. 2024-001',
      title: 'An Ordinance Establishing the Barangay Solid Waste Management Program',
      date: '2024-01-15',
      year: '2024',
      status: 'Active',
      description: 'Establishes comprehensive waste management policies and procedures for the barangay.',
    },
    {
      number: 'Ordinance No. 2024-002',
      title: 'An Ordinance Regulating the Operation of Business Establishments',
      date: '2024-02-20',
      year: '2024',
      status: 'Active',
      description: 'Sets guidelines and requirements for business operations within the barangay.',
    },
    {
      number: 'Ordinance No. 2024-003',
      title: 'An Ordinance Prohibiting the Use of Firecrackers and Pyrotechnic Devices',
      date: '2024-03-10',
      year: '2024',
      status: 'Active',
      description: 'Prohibits the use of firecrackers and pyrotechnic devices to ensure public safety.',
    },
    {
      number: 'Ordinance No. 2023-001',
      title: 'An Ordinance Establishing the Barangay Peace and Order Council',
      date: '2023-01-10',
      year: '2023',
      status: 'Active',
      description: 'Creates the Barangay Peace and Order Council to maintain peace and security.',
    },
    {
      number: 'Ordinance No. 2023-002',
      title: 'An Ordinance Regulating the Use of Public Spaces and Facilities',
      date: '2023-04-15',
      year: '2023',
      status: 'Active',
      description: 'Regulates the use of barangay public spaces and facilities for events and activities.',
    },
    {
      number: 'Ordinance No. 2023-003',
      title: 'An Ordinance Establishing the Barangay Health and Sanitation Code',
      date: '2023-06-20',
      year: '2023',
      status: 'Active',
      description: 'Establishes health and sanitation standards for all residents and establishments.',
    },
    {
      number: 'Ordinance No. 2022-001',
      title: 'An Ordinance Prohibiting Illegal Dumping and Littering',
      date: '2022-02-05',
      year: '2022',
      status: 'Active',
      description: 'Prohibits illegal dumping and littering with corresponding penalties.',
    },
    {
      number: 'Ordinance No. 2022-002',
      title: 'An Ordinance Regulating the Construction of Buildings and Structures',
      date: '2022-05-12',
      year: '2022',
      status: 'Active',
      description: 'Sets requirements and guidelines for construction projects within the barangay.',
    },
    {
      number: 'Ordinance No. 2021-001',
      title: 'An Ordinance Establishing the Barangay Disaster Risk Reduction and Management Council',
      date: '2021-03-18',
      year: '2021',
      status: 'Active',
      description: 'Creates the DRRM Council to handle disaster preparedness and response.',
    },
    {
      number: 'Ordinance No. 2021-002',
      title: 'An Ordinance Regulating Noise Pollution',
      date: '2021-07-22',
      year: '2021',
      status: 'Active',
      description: 'Regulates noise levels to maintain peace and quiet in residential areas.',
    },
    {
      number: 'Ordinance No. 2020-001',
      title: 'An Ordinance Establishing the Barangay Environmental Protection Program',
      date: '2020-01-30',
      year: '2020',
      status: 'Active',
      description: 'Establishes programs for environmental protection and conservation.',
    },
    {
      number: 'Ordinance No. 2019-001',
      title: 'An Ordinance Regulating the Operation of Motorized Tricycles',
      date: '2019-05-15',
      year: '2019',
      status: 'Active',
      description: 'Sets regulations for tricycle operations and passenger safety.',
    },
  ]

  const years = ['all', ...Array.from(new Set(ordinances.map(o => o.year)))].sort((a, b) => {
    if (a === 'all') return -1
    if (b === 'all') return 1
    return b.localeCompare(a)
  })

  const filteredOrdinances = ordinances.filter(ordinance => {
    const matchesSearch = ordinance.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ordinance.number.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = filterYear === 'all' || ordinance.year === filterYear
    return matchesSearch && matchesYear
  })

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Barangay Ordinances
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive list of ordinances enacted by Barangay Rizal
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search ordinances..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="sm:w-48">
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Ordinances List */}
        <div className="space-y-4">
          {filteredOrdinances.length > 0 ? (
            filteredOrdinances.map((ordinance, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white border-l-4 border-primary-600 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {ordinance.number}
                      </span>
                      <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                        {ordinance.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {ordinance.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {ordinance.description}
                    </p>
                  </div>
                  <div className="md:ml-4 md:text-right">
                    <p className="text-sm text-gray-500 mb-1">Date Enacted</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {new Date(ordinance.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Year: {ordinance.year}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
                  >
                    View Full Text →
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No ordinances found matching your search criteria.</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Total Ordinances: {filteredOrdinances.length}</p>
        </div>
      </div>
    </section>
  )
}

