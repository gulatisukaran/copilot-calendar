"use client";
import "@copilotkit/react-ui/styles.css";
import { CalendarComponent } from "./components/Calendar";
import React, { useState } from "react";
import {
  CopilotKit,
  useCopilotAction,
  useMakeCopilotReadable,
} from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { INSTRUCTIONS } from "./instructions";
import { Event } from "./types";

const HomePage = () => {
  return (
    <CopilotKit url="/api/copilotkit">
      <CopilotSidebar
        instructions={INSTRUCTIONS}
        labels={{
          initial: "Welcome to the calendar! How can I assist you today?",
        }}
        defaultOpen={true}
        clickOutsideToClose={false}
      >
        <Main />
      </CopilotSidebar>
    </CopilotKit>
  );
};

const initialEvents: Event[] = [
  { title: 'Go to gym', start: new Date(2024, 4, 3, 6, 0, 0, 0), end: new Date(2024, 4, 3, 8, 30, 0, 0)},
  { title: 'Go to gym', start: new Date(2024, 4, 4, 6, 0, 0, 0), end: new Date(2024, 4, 4, 8, 30, 0, 0)},
  { title: 'Product Meeting with Anna', start: new Date(2024, 4, 3, 14, 0, 0, 0), end: new Date(2024, 4, 3, 17, 0, 0, 0)},
  { title: 'Attend offline tech event', start: new Date(2024, 4, 3, 0, 0,0,  0), end: new Date(2024, 4, 5, 17, 30, 0, 0)},
]

function convertToLocaleString(events: Event[]) {
  return events.map(event => ({
    title: event.title,
    start: event.start.toLocaleString(),
    end: event.end.toLocaleString()
  }));
}


const Main = () => {
  console.log(new Date(2024, 4, 3, 19, 5, 0, 0));
  console.log(new Date().toLocaleString());

  console.log(initialEvents)

  const [events, setEvents] = useState<Event[]>(initialEvents);

  // create a copilotAction to create a calendar whenever the user makes a request.

  useCopilotAction({
    name: "createCalendarEvent",
    description: "Create a new calendar event as specified by the user",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "The title of the event",
        attributes: [{
          name: "title",
          type: "string",
          description: "Name of the event"
        },
        {
          name: "start",
          type: "date",
          description: "Date from which the event starts in the calendar. The event can extend for several days."
        },
        {
          name: "end",
          type: "date",
          description: "Date at which the event ends in the calendar"
        },
      ],
      },
    ],

    render: "Creating the event for you...",

    handler: () => {
      // Do nothing.
      // The preview component will optionally handle committing the changes.
    },
  });



  useMakeCopilotReadable("The users events are: " + JSON.stringify(convertToLocaleString(initialEvents)) + "In this string the time is in 24 hour format.");
  useMakeCopilotReadable("The current time is : " + new Date().toLocaleString());

  return (
    <div className="w-screen h-screen">
      <CalendarComponent events={events}/>
    </div>
  );
};


export default HomePage;
