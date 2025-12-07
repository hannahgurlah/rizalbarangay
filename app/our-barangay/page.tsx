import OurBarangayHero from '@/components/OurBarangayHero'
import BasicProfile from '@/components/BasicProfile'
import Demographics from '@/components/Demographics'
import History from '@/components/History'
import BarangayOfficials from '@/components/BarangayOfficials'
import Breadcrumb from '@/components/Breadcrumb'

export default function OurBarangayPage() {
  return (
    <div className="flex flex-col">
      <OurBarangayHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Our Barangay' }
      ]} />
      <BasicProfile />
      <Demographics />
      <History />
      <BarangayOfficials />
    </div>
  )
}

