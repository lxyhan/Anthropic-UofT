import { Container } from '@/components/Container'
import { ShimmerButton } from '@/components/ui/shimmer-button'

export function HackerGuide() {
  return (
    <section className="relative py-32 sm:py-40">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
      
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Minimalist heading */}
          <h2 className="font-display text-4xl font-semibold tracking-tight text-orange-600 sm:text-5xl lg:text-6xl">
            Ready to build?
          </h2>
          
          {/* Clean subtitle */}
          <p className="mt-6 text-lg leading-8 text-orange-900 sm:text-xl">
            Everything you need to get started: event overview, tracks, judging rubric,
            submission requirements, and Claude API resources.
          </p>
          
          {/* Centered CTA button with ample spacing */}
          <div className="mt-12 flex justify-center">
            <a 
              href="https://www.notion.so/Anthropic-AI-Hackathon-29e5c06320b780f591bfd264241f4ed5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <ShimmerButton
                className="shadow-2xl px-12 py-5 text-lg"
                background="linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)"
                shimmerColor="#a78bfa"
                borderRadius="16px"
              >
                <span className="flex items-center gap-3 font-semibold tracking-tight text-white">
                  View Hacker Guide
                  <svg 
                    className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </span>
              </ShimmerButton>
            </a>
          </div>
          
          {/* Optional subtitle hint */}
          <p className="mt-6 text-sm text-orange-600/70">
            Opens in a new tab. Join the Discord for announcements, team formation, and support:
            {' '}
            <a
              href="https://discord.gg/hnZtXj3btN"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted"
            >
              discord.gg/hnZtXj3btN
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}
