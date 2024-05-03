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
          eventContent={renderEventContent}
        />
      </div>
    )
  }
  
  // a custom render function
  function renderEventContent(eventInfo: any) {
    return (
      <div className="bg-[red]">
        <b>{eventInfo.timeText}m</b>
        <i>{eventInfo.event.title}</i>
      </div>
    )
  }

