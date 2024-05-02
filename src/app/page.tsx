"use client";
import "@copilotkit/react-ui/styles.css";

import { CalendarComponent } from "./components/Calendar";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import SingleSpreadsheet from "./components/SingleSpreadsheet";
import {
  CopilotKit,
  useCopilotAction,
  useMakeCopilotReadable,
} from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { INSTRUCTIONS } from "./instructions";
import { canonicalSpreadsheetData } from "./utils/canonicalSpreadsheetData";
import { SpreadsheetData } from "./types";
import { PreviewSpreadsheetChanges } from "./components/PreviewSpreadsheetChanges";

const HomePage = () => {
  return (
    <CopilotKit url="/api/copilotkit">
      <CopilotSidebar
        instructions={INSTRUCTIONS}
        labels={{
          initial: "Welcome to the calendar! How can I help you?",
        }}
        defaultOpen={true}
        clickOutsideToClose={false}
      >
        <Main />
      </CopilotSidebar>
    </CopilotKit>
  );
};

const Main = () => {

  const [events, setEvents] = useState({

  });


  // create a copilotAction to create a calendar whenever the user makes a request.

  useCopilotAction({
    name: "createCalendarEvent",
    description: "Create a new calendar event as specified by the user",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "The title of the event",
        attributes: [
          {
            name: "cells",
            type: "object[]",
            description: "The cells of the row",
            attributes: [
              {
                name: "value",
                type: "string",
                description: "The value of the cell",
              },
            ],
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

  useMakeCopilotReadable("The users events are: " + events);

  return (
    <div className="w-screen h-screen">
      <CalendarComponent />
    </div>
  );
};




export default HomePage;
