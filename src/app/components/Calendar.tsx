import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

interface Event {
    title: string;
    start: Date;
    end: Date;
}

let events: Event[] = [];

events = [
    { title: 'Meeting', start: new Date(), end: new Date("2024-05-5") },
    { title: 'Hello', start: new Date("2024-05-3"), end: new Date("2024-05-5")  }
  ]

export function CalendarComponent() {
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