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
    date: 'Nov 1 - Nov 22',
    dateTime: '2025-11-01',
    summary:
      'Build Period - Teams work independently with Claude API access, office hours, and support.',
    timeSlots: [
      {
        name: 'Build Period',
        description: 'Ongoing now until Nov 22 at 11:59 PM ET',
        start: 'Ongoing',
        end: '',
      },
      {
        name: 'Office Hours',
        description: 'Thursdays at 7:00 PM — feedback, ideas, and API guidance',
        start: 'Thursdays',
        end: '7:00PM',
      },
      {
        name: 'Submission Deadline',
        description: 'Devpost submission with demo video and GitHub repo due Nov 22 at 11:59 PM ET',
        start: 'Nov 22',
        end: '11:59PM',
      },
    ],
  },
  {
    date: 'Nov 23',
    dateTime: '2025-11-23',
    summary:
      'Demo Day - Live judging, awards, and networking at Bahen Center for Information Technology.',
    timeSlots: [
      {
        name: 'Check-in & Setup',
        description: 'Teams arrive, set up laptops and demos. Light breakfast & coffee available.',
        start: '10:30AM',
        end: '11:00AM',
      },
      {
        name: 'Opening Ceremony + Keynotes',
        description:
          'Welcome from organizers and sponsors, overview of judging process and prizes.',
        start: '11:00AM',
        end: '11:45AM',
      },
      {
        name: 'Lunch & Team Prep',
        description:
          'Catered lunch; teams finalize demo flow and technical setup before judging.',
        start: '11:45AM',
        end: '12:30PM',
      },
      {
        name: 'Judging Sessions & Workshops',
        description:
          'Teams rotate through judging rooms in 15–20 minute slots. Parallel workshops and lightning talks.',
        start: '12:30PM',
        end: '4:00PM',
      },
      {
        name: 'Break & Final Deliberations',
        description:
          'Judges finalize scores; attendees grab refreshments, visit sponsor tables, and continue networking.',
        start: '4:00PM',
        end: '5:00PM',
      },
      {
        name: 'Closing Ceremony & Awards',
        description:
          'Winning teams announced and closing remarks, followed by open networking and wrap-up.',
        start: '5:00PM',
        end: '7:00PM',
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
            Anthropic AI Hackathon: Build, Ship, Demo.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-orange-900">
            Over 20 days, you&apos;ll go from prompt drop to live Demo Day at the Bahen
            Center for Information Technology. Build with Claude API, ship a
            polished demo, and present your work to judges from Anthropic,
            Agentiiv, and campus organizations.
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
