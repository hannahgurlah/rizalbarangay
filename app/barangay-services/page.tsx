import BrgyServicesHero from '@/components/BrgyServicesHero'
import BarangayServices from '@/components/BarangayServices'
import Breadcrumb from '@/components/Breadcrumb'

export default function BarangayServicesPage() {
  return (
    <div className="flex flex-col">
      <BrgyServicesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Barangay Services' }
      ]} />
      <BarangayServices />
    </div>
  )
}

