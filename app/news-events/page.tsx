import NewsEventsHero from '@/components/NewsEventsHero'
import NewsSection from '@/components/NewsSection'
import EventsCalendar from '@/components/EventsCalendar'
import Breadcrumb from '@/components/Breadcrumb'

export default function NewsEventsPage() {
  return (
    <div className="flex flex-col">
      <NewsEventsHero />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'News and Events' }
      ]} />
      <NewsSection />
      <EventsCalendar />
    </div>
  )
}

