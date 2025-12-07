export default function BrgyServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/rizal-bg.png')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-primary-900 opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Barangay Services
          </h1>
          <p className="text-lg sm:text-xl mb-4 text-primary-100 leading-relaxed">
            Bringing Public Service Closer to Every Rizalian
          </p>
        </div>
      </div>
    </section>
  )
}

