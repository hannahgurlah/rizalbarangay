import OurBarangayHero from '@/components/OurBarangayHero'
import BasicProfile from '@/components/BasicProfile'
import Demographics from '@/components/Demographics'
import History from '@/components/History'
import BarangayOfficials from '@/components/BarangayOfficials'

export default function OurBarangayPage() {
  return (
    <div className="flex flex-col">
      <OurBarangayHero />
      <BasicProfile />
      <Demographics />
      <History />
      <BarangayOfficials />
    </div>
  )
}

