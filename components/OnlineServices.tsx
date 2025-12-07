import Link from 'next/link'

export default function OnlineServices() {
  const services = [
    {
      name: 'Barangay ID',
      link: '/online-services/barangay-id',
    },
    {
      name: 'Barangay Clearance',
      link: '/online-services/barangay-clearance',
    },
    {
      name: 'Certificate of Residency',
      link: '/online-services/certificate-of-residency',
    },
    {
      name: 'Certificate of Good Moral',
      link: '/online-services/certificate-of-good-moral',
    },
    {
      name: 'Certificate of Solo Parent',
      link: '/online-services/certificate-of-solo-parent',
    },
    {
      name: 'Barangay Business Clearance',
      link: '/online-services/barangay-business-clearance',
    },
    {
      name: 'Certificate of Non-Residency',
      link: '/online-services/certificate-of-non-residency',
    },
    {
      name: 'Certificate of Guardianship',
      link: '/online-services/certificate-of-guardianship',
    },
    {
      name: 'Certificate of Appearance',
      link: '/online-services/certificate-of-appearance',
    },
    {
      name: 'Certificate of No Derogatory Record / No Pending Case',
      link: '/online-services/certificate-of-no-derogatory-record',
    },
    {
      name: 'Barangay Covered Court Permit',
      link: '/online-services/barangay-covered-court-permit',
    },
    {
      name: 'Barangay Event Permit',
      link: '/online-services/barangay-event-permit',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="bg-blue-900 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 min-h-[120px] flex items-center justify-center hover:bg-blue-800"
            >
              <h3 className="text-lg font-semibold text-center">
                {service.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

