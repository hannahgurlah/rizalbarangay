import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/rizal-logo.png"
                  alt="Barangay Rizal Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div style={{ fontFamily: 'Georgia, serif' }}>
                <p className="text-sm" style={{ fontSize: '14px' }}>Republic of the Philippines</p>
                <p className="text-sm pb-1" style={{ fontSize: '16px' }}>Municipality of Pinamungajan</p>
                <p className="text-sm" style={{ fontSize: '20px' }}>Barangay Rizal</p>
              </div>
            </div>
            <p className="text-primary-200 text-sm">
              © 2025 Barangay Rizal, Municipality of Pinamungajan. <br />All Rights Reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Government Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <ul className="space-y-2 text-primary-200 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">Office of the President</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Office of the Vice President</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Senate of the Philippines</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">House of Representatives</a>
                </li>
              </ul>
              <ul className="space-y-2 text-primary-200 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">Supreme Court</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Court of Appeals</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Sandiganbayan</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">LGU - Pinamungajan</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal & Help</h4>
            <ul className="space-y-2 text-primary-200 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Contact Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
