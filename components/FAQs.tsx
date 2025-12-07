'use client'

import { useState } from 'react'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How can I request medical or financial assistance from the Barangay?',
      answer: 'You may approach the Barangay Social Services desk or Barangay Captain and submit a written request with supporting documents (e.g., medical certificate, prescription, or billing statement).',
    },
    {
      question: 'What are the requirements for a Barangay Clearance?',
      answer: 'To obtain a Barangay Clearance, you need to present a valid ID, proof of residency, and fill out the application form at the Barangay Hall during office hours.',
    },
    {
      question: 'Can I authorize someone to claim my barangay documents?',
      answer: 'Yes, you can authorize someone to claim your documents by providing a written authorization letter and a copy of your valid ID, along with the authorized person\'s valid ID.',
    },
    {
      question: 'How do I access the courses?',
      answer: 'You can access available courses by visiting the Barangay Education desk or checking our online portal for course schedules and registration information.',
    },
  ]

  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              FAQs
            </h2>
            <p className="text-2xl font-semibold text-gray-700 mb-4">
              Frequently Asked Questions every Rizalian
            </p>
            <p className="text-gray-600 leading-relaxed">
              We've gathered the most common questions from our constituents to help you get started.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-primary-600 font-bold text-xl flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

