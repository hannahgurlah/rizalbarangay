'use client'

import { useState } from 'react'

export default function Resolutions() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterYear, setFilterYear] = useState('all')

  const resolutions = [
    {
      number: 'Resolution No. 2024-001',
      title: 'A Resolution Approving the Annual Budget for Fiscal Year 2024',
      date: '2024-01-05',
      year: '2024',
      status: 'Approved',
      description: 'Approves the annual budget allocation for barangay programs and services.',
    },
    {
      number: 'Resolution No. 2024-002',
      title: 'A Resolution Supporting the Municipal Health Program',
      date: '2024-02-10',
      year: '2024',
      status: 'Approved',
      description: 'Expresses support for the municipal health program and commits barangay participation.',
    },
    {
      number: 'Resolution No. 2024-003',
      title: 'A Resolution Commending Outstanding Barangay Volunteers',
      date: '2024-03-25',
      year: '2024',
      status: 'Approved',
      description: 'Recognizes and commends outstanding volunteers for their service to the community.',
    },
    {
      number: 'Resolution No. 2023-001',
      title: 'A Resolution Requesting Additional Street Lighting',
      date: '2023-01-20',
      year: '2023',
      status: 'Approved',
      description: 'Requests the municipal government to install additional street lighting in key areas.',
    },
    {
      number: 'Resolution No. 2023-002',
      title: 'A Resolution Establishing the Barangay Scholarship Program',
      date: '2023-03-15',
      year: '2023',
      status: 'Approved',
      description: 'Establishes a scholarship program for deserving students in the barangay.',
    },
    {
      number: 'Resolution No. 2023-003',
      title: 'A Resolution Supporting the Construction of a New Barangay Hall',
      date: '2023-05-10',
      year: '2023',
      status: 'Approved',
      description: 'Expresses support for the construction of a new barangay hall facility.',
    },
    {
      number: 'Resolution No. 2023-004',
      title: 'A Resolution Declaring Barangay Rizal as a Drug-Free Community',
      date: '2023-07-18',
      year: '2023',
      status: 'Approved',
      description: 'Declares Barangay Rizal as a drug-free community and commits to maintaining this status.',
    },
    {
      number: 'Resolution No. 2022-001',
      title: 'A Resolution Approving the Barangay Development Plan 2022-2025',
      date: '2022-01-12',
      year: '2022',
      status: 'Approved',
      description: 'Approves the comprehensive development plan for the barangay.',
    },
    {
      number: 'Resolution No. 2022-002',
      title: 'A Resolution Requesting Road Improvement Projects',
      date: '2022-04-08',
      year: '2022',
      status: 'Approved',
      description: 'Requests the municipal government to prioritize road improvement projects.',
    },
    {
      number: 'Resolution No. 2022-003',
      title: 'A Resolution Establishing the Barangay Livelihood Program',
      date: '2022-06-22',
      year: '2022',
      status: 'Approved',
      description: 'Establishes livelihood programs to support residents and reduce poverty.',
    },
    {
      number: 'Resolution No. 2021-001',
      title: 'A Resolution Supporting the COVID-19 Vaccination Program',
      date: '2021-02-15',
      year: '2021',
      status: 'Approved',
      description: 'Expresses full support for the COVID-19 vaccination program and encourages participation.',
    },
    {
      number: 'Resolution No. 2021-002',
      title: 'A Resolution Commemorating the 27th Foundation Day',
      date: '2021-04-10',
      year: '2021',
      status: 'Approved',
      description: 'Commemorates the 27th foundation day of Barangay Rizal.',
    },
    {
      number: 'Resolution No. 2021-003',
      title: 'A Resolution Establishing the Barangay Youth Council',
      date: '2021-08-30',
      year: '2021',
      status: 'Approved',
      description: 'Establishes the Barangay Youth Council to promote youth participation in governance.',
    },
    {
      number: 'Resolution No. 2020-001',
      title: 'A Resolution Approving the Barangay Disaster Preparedness Plan',
      date: '2020-03-05',
      year: '2020',
      status: 'Approved',
      description: 'Approves the comprehensive disaster preparedness and response plan.',
    },
    {
      number: 'Resolution No. 2020-002',
      title: 'A Resolution Supporting Environmental Protection Initiatives',
      date: '2020-06-18',
      year: '2020',
      status: 'Approved',
      description: 'Expresses support for environmental protection and conservation initiatives.',
    },
    {
      number: 'Resolution No. 2019-001',
      title: 'A Resolution Requesting the Establishment of a Barangay Health Center',
      date: '2019-02-25',
      year: '2019',
      status: 'Approved',
      description: 'Requests the establishment of a barangay health center to serve residents.',
    },
    {
      number: 'Resolution No. 2019-002',
      title: 'A Resolution Commending Outstanding Barangay Employees',
      date: '2019-12-10',
      year: '2019',
      status: 'Approved',
      description: 'Recognizes and commends barangay employees for their dedicated service.',
    },
  ]

  const years = ['all', ...Array.from(new Set(resolutions.map(r => r.year)))].sort((a, b) => {
    if (a === 'all') return -1
    if (b === 'all') return 1
    return b.localeCompare(a)
  })

  const filteredResolutions = resolutions.filter(resolution => {
    const matchesSearch = resolution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resolution.number.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = filterYear === 'all' || resolution.year === filterYear
    return matchesSearch && matchesYear
  })

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Barangay Resolutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete list of resolutions passed by the Barangay Council
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search resolutions..."
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

        {/* Resolutions List */}
        <div className="space-y-4">
          {filteredResolutions.length > 0 ? (
            filteredResolutions.map((resolution, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {resolution.number}
                      </span>
                      <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                        {resolution.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {resolution.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {resolution.description}
                    </p>
                  </div>
                  <div className="md:ml-4 md:text-right">
                    <p className="text-sm text-gray-500 mb-1">Date Approved</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {new Date(resolution.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Year: {resolution.year}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                  >
                    View Full Text →
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No resolutions found matching your search criteria.</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Total Resolutions: {filteredResolutions.length}</p>
        </div>
      </div>
    </section>
  )
}

