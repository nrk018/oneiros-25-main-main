import EventTracker from '@/components/eventsections/eventcounter'
import { TimelineDemo } from '@/components/eventsections/events'
import { LampDemo } from '@/components/eventsections/lamp'
import React from 'react'

const Events = () => {
  return (
    <div className='overflow-hidden'>
      <LampDemo />
      <EventTracker />
      <TimelineDemo />
    </div>
  )
}

export default Events
