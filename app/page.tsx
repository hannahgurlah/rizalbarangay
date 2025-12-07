import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Statistics from '@/components/Statistics'
import NewsEvents from '@/components/NewsEvents'
import FAQs from '@/components/FAQs'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Statistics />
      <NewsEvents />
      <FAQs />
    </div>
  )
}
