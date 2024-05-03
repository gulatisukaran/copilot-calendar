import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import { Event } from '../types'

interface Props {
  events: Event[];
}

export const CalendarComponent: React.FC<Props> = ({ events }: Props) => {
    return (
      <div className="w-[60%] h-[60%] z-100">
  
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          weekends={true}
          events={events}
          timeZone='local'
          eventContent={renderEventContent}
        />
      </div>
    )
  }
  
  // a custom render function
  function renderEventContent(eventInfo: any) {
    console.log(eventInfo.timeText)
    return (
      <div>
        <b>{eventInfo.timeText}m</b>
        <div className='w-[2px]'/>
        <i>{eventInfo.event.title}</i>
      </div>
    )
  }

