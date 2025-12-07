import NewsEventsHero from '@/components/NewsEventsHero'
import NewsSection from '@/components/NewsSection'
import EventsCalendar from '@/components/EventsCalendar'

export default function NewsEventsPage() {
  return (
    <div className="flex flex-col">
      <NewsEventsHero />
      <NewsSection />
      <EventsCalendar />
    </div>
  )
}

