import ResourcesHero from '@/components/ResourcesHero'
import Ordinances from '@/components/Ordinances'
import Resolutions from '@/components/Resolutions'

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      <ResourcesHero />
      <Ordinances />
      <Resolutions />
    </div>
  )
}

