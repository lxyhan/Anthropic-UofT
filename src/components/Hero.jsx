import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-orange-600 sm:text-7xl">
            <span className="sr-only">Anthropic x UofTAI x Blueprint - </span>Anthropic AI Hackathon
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-orange-900">
            <p>
              Join 300+ builders at the University of Toronto&apos;s premier AI hackathon. 
              Build with Claude API, compete for prizes, and connect with fellow innovators 
              shaping the future of artificial intelligence.
            </p>
            <p>
              Challenge Release: <span className="text-amber-600 font-semibold">October 27, 2025</span> at 12:00 PM
              <br />
              Demo Day: <span className="text-amber-600 font-semibold">November 15, 2025</span> at MY150, Myhal Centre
            </p>
          </div>
          <Button href="#schedule" className="mt-10 w-full sm:hidden">
            View Schedule
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Participants', '300'],
              ['Teams', '150-160'],
              ['Prep Period', '20 Days'],
              ['Demo Day', 'Nov 15'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-orange-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-orange-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
