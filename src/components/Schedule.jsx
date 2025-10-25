'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

const schedule = [
  {
    date: 'Nov 1',
    dateTime: '2025-11-01',
    summary:
      'Challenge Release - Virtual livestream revealing the hackathon prompt and requirements.',
    timeSlots: [
      {
        name: 'Prompt Drop Event',
        description: 'Virtual livestream - Challenge revealed',
        start: '12:00PM',
        end: '12:30PM',
      },
      {
        name: 'Technical Requirements',
        description: 'Judging criteria and guidelines announced',
        start: '12:30PM',
        end: '1:00PM',
      },
      {
        name: 'Resource Distribution',
        description: 'Claude API credits and documentation access',
        start: '1:00PM',
        end: '1:30PM',
      },
      {
        name: 'Q&A Session',
        description: 'Live Q&A with organizers',
        start: '1:30PM',
        end: '2:00PM',
      },
    ],
  },
  {
    date: 'Nov 1 - Nov 23',
    dateTime: '2025-11-01',
    summary:
      'Preparation Period - Teams work independently with full Claude API access and weekly support.',
    timeSlots: [
      {
        name: 'Independent Building',
        description: 'Teams work on their projects with full API access',
        start: 'Ongoing',
        end: '',
      },
      {
        name: 'Weekly Office Hours',
        description: 'Virtual support sessions every Wednesday at 7:00 PM',
        start: 'Wednesdays',
        end: '7:00PM',
      },
      {
        name: 'Mid-point Check-in',
        description: 'Optional team progress sharing (November 6)',
        start: 'Nov 6',
        end: '',
      },
      {
        name: 'Final Submission',
        description: 'Deadline: November 12, 11:59 PM',
        start: 'Nov 12',
        end: '11:59PM',
      },
    ],
  },
  {
    date: 'Nov 23',
    dateTime: '2025-11-23',
    summary:
      'Demo Day - Final presentations, judging, and awards at MY150, Myhal Centre.',
    timeSlots: [
      {
        name: 'Check-in & Setup',
        description: 'Team arrival and demo setup',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Team Demos',
        description: 'Project presentations and judging',
        start: '10:00AM',
        end: '2:00PM',
      },
      {
        name: 'Lunch & Networking',
        description: 'Food and networking with participants',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Awards Ceremony',
        description: 'Winner announcements and closing',
        start: '3:00PM',
        end: '6:00PM',
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
            Three-phase hackathon: Challenge, Build, Demo.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-orange-900">
            From challenge release to demo day, you&apos;ll have 23 days to build 
            with Claude API. Join 300+ participants across 150+ teams competing 
            for prizes at the Myhal Centre.
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
