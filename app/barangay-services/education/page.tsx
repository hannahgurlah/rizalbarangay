import BrgyServicesHero from '@/components/BrgyServicesHero'

export default function EducationPage() {
  return (
    <div className="flex flex-col">
      <BrgyServicesHero />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Education Services</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Empowering every Rizalian through accessible, quality education that nurtures growth and lifelong learning. We believe that education is the foundation for a better future and work to provide educational opportunities for all residents.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Programs and Services</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Scholarship programs for deserving students</li>
                <li>Educational assistance and support</li>
                <li>Skills training and livelihood programs</li>
                <li>Computer literacy programs</li>
                <li>Adult education and continuing education</li>
                <li>Reading programs for children</li>
                <li>Tutoring and academic support</li>
              </ul>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Scholarship Program</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-4">
                  Barangay Rizal offers scholarship programs for students who demonstrate academic excellence and financial need. Applications are accepted annually.
                </p>
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Proof of residency in Barangay Rizal</li>
                  <li>School records and transcripts</li>
                  <li>Certificate of good moral character</li>
                  <li>Proof of family income</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Information</h3>
                <p className="text-gray-700">For inquiries about educational programs and scholarships, please visit the Barangay Hall during office hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

