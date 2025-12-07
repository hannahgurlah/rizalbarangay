export default function OnlineServices() {
  const services = [
    'Barangay ID',
    'Barangay Clearance',
    'Certificate of Residency',
    'Certificate of Good Moral',
    'Certificate of Solo Parent',
    'Barangay Business Clearance',
    'Certificate of Non-Residency',
    'Certificate of Guardianship',
    'Certificate of Appearance',
    'Certificate of No Derogatory Record / No Pending Case',
    'Barangay Covered Court Permit',
    'Barangay Event Permit',
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-900 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 min-h-[120px] flex items-center justify-center"
            >
              <h3 className="text-lg font-semibold text-center">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

