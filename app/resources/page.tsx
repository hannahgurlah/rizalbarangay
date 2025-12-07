import ResourcesHero from '@/components/ResourcesHero'
import Ordinances from '@/components/Ordinances'
import Resolutions from '@/components/Resolutions'
import Breadcrumb from '@/components/Breadcrumb'

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      <ResourcesHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Resources' }
      ]} />
      <Ordinances />
      <Resolutions />
    </div>
  )
}

