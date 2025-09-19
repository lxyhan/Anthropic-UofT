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
            <span className="sr-only">UofT Anthropic Builder Club - </span>Build AI
            that matters.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-orange-900">
            <p>
              Join the University of Toronto's premier AI community. Learn to build
              with Claude, explore cutting-edge AI applications, and connect with
              fellow builders who are shaping the future of artificial intelligence.
            </p>
            <p>
              Coming <span className="text-amber-600 font-semibold">Fall 2025</span> in Toronto.
              Our workshops will teach you practical AI development skills, and you'll
              get free API credits to bring your ideas to life!
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Join the waitlist
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Workshops', 'Coming Soon'],
              ['Free Merch', 'Available'],
              ['API Credits', 'Included'],
              ['Location', 'Toronto'],
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
