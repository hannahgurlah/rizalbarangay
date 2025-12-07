import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Online Services',
      description: 'Enjoy hassle-free transactions—request certificates, send inquiries, and access public information anytime, anywhere.',
      link: '/online-services',
    },
    {
      title: 'Lupon',
      description: 'The Lupon Tagapamayapa of Barangay Rizal upholds peace and harmony by resolving community disputes through fair and amicable mediation.',
      link: '/barangay-services/lupon',
    },
    {
      title: 'Health',
      description: 'Delivering accessible and quality health services to promote the well-being and safety of every Rizalian through compassionate health care.',
      link: '/barangay-services/health',
    },
    {
      title: 'Education',
      description: 'Empowering every Rizalian through accessible, quality education that nurtures growth and lifelong learning.',
      link: '/barangay-services/education',
    },
    {
      title: 'Social Services',
      description: 'Providing compassionate and responsive social services that promote community welfare, empowerment, and shared responsibility.',
      link: '/barangay-services/social-services',
    },
    {
      title: 'Sports and Events',
      description: 'Showcasing Barangay Rizal\'s sports and event facilities that inspire active lifestyles, teamwork, and community celebration.',
      link: '/barangay-services/sports-events',
    },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <p className="text-sm text-gray-600 uppercase tracking-wide">Barangay Services</p>
        </div>
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Bringing Public Service Closer to Every Rizalian
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link href={service.link} className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                More...
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
