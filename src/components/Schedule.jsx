'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

const schedule = [
  {
    date: 'Oct 15',
    dateTime: '2024-10-15',
    summary:
      'Introduction to AI development with Claude and fundamental concepts.',
    timeSlots: [
      {
        name: 'Welcome & Setup',
        description: 'Getting started with Claude API',
        start: '6:00PM',
        end: '6:30PM',
      },
      {
        name: 'Workshop Session',
        description: 'Building your first AI chatbot',
        start: '6:30PM',
        end: '7:30PM',
      },
      {
        name: 'Hands-on Practice',
        description: 'Code along and Q&A',
        start: '7:30PM',
        end: '8:00PM',
      },
      {
        name: 'Networking',
        description: 'Meet fellow builders',
        start: '8:00PM',
        end: '8:30PM',
      },
    ],
  },
  {
    date: 'Oct 29',
    dateTime: '2024-10-29',
    summary:
      'Advanced AI applications and real-world use cases.',
    timeSlots: [
      {
        name: 'Workshop Prep',
        description: 'Environment setup check',
        start: '6:00PM',
        end: '6:15PM',
      },
      {
        name: 'Advanced Techniques',
        description: 'Prompt engineering and fine-tuning',
        start: '6:15PM',
        end: '7:15PM',
      },
      {
        name: 'Project Building',
        description: 'Build an AI-powered web app',
        start: '7:15PM',
        end: '8:00PM',
      },
      {
        name: 'Demo Time',
        description: 'Show off your creations',
        start: '8:00PM',
        end: '8:30PM',
      },
    ],
  },
  {
    date: 'Nov 12',
    dateTime: '2024-11-12',
    summary:
      'Hackathon prep session and final workshop before the big event.',
    timeSlots: [
      {
        name: 'Hackathon Overview',
        description: 'Rules, prizes, and team formation',
        start: '6:00PM',
        end: '6:30PM',
      },
      {
        name: 'Technical Workshop',
        description: 'Advanced AI integration patterns',
        start: '6:30PM',
        end: '7:30PM',
      },
      {
        name: 'Team Formation',
        description: 'Find your hackathon teammates',
        start: '7:30PM',
        end: '8:00PM',
      },
      {
        name: 'Hackathon Kickoff',
        description: 'November hackathon event preview',
        start: '8:00PM',
        end: '8:30PM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pr-8 sm:pb-0 sm:pl-0">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="data-selected:not-data-focus:outline-hidden">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="data-selected:not-data-focus:outline-hidden"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-orange-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-orange-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur-sm',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-orange-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-orange-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-orange-600 sm:text-5xl">
            Three hands-on workshops to level up your AI building skills.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-orange-900">
            Learn to build with Claude API, get free credits to experiment,
            and prepare for our November hackathon. All workshops include
            free merch and networking opportunities.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-top-40 -bottom-32" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
