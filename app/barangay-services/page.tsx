import BrgyServicesHero from '@/components/BrgyServicesHero'
import BarangayServices from '@/components/BarangayServices'

export default function BarangayServicesPage() {
  return (
    <div className="flex flex-col">
      <BrgyServicesHero />
      <BarangayServices />
    </div>
  )
}

