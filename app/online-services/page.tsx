import OnlineServicesHero from '@/components/OnlineServicesHero'
import OnlineServices from '@/components/OnlineServices'
import Breadcrumb from '@/components/Breadcrumb'

export default function OnlineServicesPage() {
  return (
    <div className="flex flex-col">
      <OnlineServicesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Online Services' }
      ]} />
      <OnlineServices />
    </div>
  )
}

