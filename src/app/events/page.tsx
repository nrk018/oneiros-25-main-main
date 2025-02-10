"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface MajorEvent {
  id: number;
  title: string;
  type: "major";
}

interface MinorEvent {
  id: number;
  title: string;
  image: string;
  description: string;
  type: "minor";
}

type EventItem = MajorEvent | MinorEvent;
type SelectedView = EventItem | "timeline";

const majorEvents: MajorEvent[] = [
  { id: 1, title: "Music", type: "major" },
  { id: 2, title: "Dance", type: "major" },
  { id: 3, title: "Theatre", type: "major" },
  { id: 4, title: "Comedy", type: "major" },
];

const minorEvents: MinorEvent[] = [
  {
    id: 1,
    title: "Rock Night",
    image: "/placeholder.svg?height=600&width=400",
    description: "Experience the electrifying performances of rock bands.",
    type: "minor",
  },
  {
    id: 2,
    title: "Classical Evening",
    image: "/placeholder.svg?height=600&width=400",
    description: "Immerse yourself in the soulful melodies of classical music.",
    type: "minor",
  },
  {
    id: 3,
    title: "Dance Extravaganza",
    image: "/placeholder.svg?height=600&width=400",
    description:
      "Witness breathtaking dance performances from various cultures.",
    type: "minor",
  },
  {
    id: 4,
    title: "Comedy Show",
    image: "/placeholder.svg?height=600&width=400",
    description: "Laugh out loud with our hilarious stand-up comedians.",
    type: "minor",
  },
  {
    id: 5,
    title: "Indie Night",
    image: "/placeholder.svg?height=600&width=400",
    description: "Discover innovative sounds from upcoming indie bands.",
    type: "minor",
  },
  {
    id: 6,
    title: "Jazz Evening",
    image: "/placeholder.svg?height=600&width=400",
    description: "Relax to smooth jazz tunes in an intimate setting.",
    type: "minor",
  },
];

interface SidebarItemProps {
  event: EventItem;
  active: boolean;
  onSelect: (event: EventItem) => void;
}

function SidebarItem({ event, active, onSelect }: SidebarItemProps) {
  return (
    <button
      onClick={() => onSelect(event)}
      aria-label={`Select ${event.title}`}
      className={`w-full text-left p-4 border-b border-gray-600 hover:bg-gray-700 transition-colors flex items-center space-x-4 ${
        active ? "bg-gray-700" : ""
      }`}
    >
      {event.type === "major" ? (
        <div>
          <h3 className="text-lg font-bold">{event.title}</h3>
          <p className="text-xs text-gray-300">Coming Soon</p>
        </div>
      ) : (
        <>
          <div
            className="w-16 h-16 bg-cover bg-center rounded-sm"
            style={{ backgroundImage: `url(${(event as MinorEvent).image})` }}
          />
          <div>
            <h3 className="text-lg font-bold">{event.title}</h3>
            <p className="text-xs text-gray-300">
              {(event as MinorEvent).description.length > 40
                ? (event as MinorEvent).description.substring(0, 40) + "..."
                : (event as MinorEvent).description}
            </p>
          </div>
        </>
      )}
    </button>
  );
}

const timelineItems = [
  {
    day: "Day 1",
    title: "Opening Ceremony",
    description: "Welcome speech and introduction.",
  },
  {
    day: "Day 2",
    title: "Workshops",
    description: "Engaging sessions and interactive activities.",
  },
  {
    day: "Day 3",
    title: "Closing Ceremony",
    description: "Wrap up and awards.",
  },
];

export default function EventsPage() {
  const [selectedView, setSelectedView] = useState<SelectedView>("timeline");

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full sm:w-1/3 md:w-1/4 border-r border-gray-700 overflow-y-auto">
          <div className="px-4 py-3 bg-gray-800 border-b border-gray-700">
            <button
              onClick={() => setSelectedView("timeline")}
              className={`w-full text-left p-4 hover:bg-gray-700 transition-colors flex items-center space-x-4 ${
                selectedView === "timeline" ? "bg-gray-700" : ""
              }`}
            >
              <div>
                <h3 className="text-lg font-bold">Roadmap</h3>
                <p className="text-xs text-gray-300">Event Timeline</p>
              </div>
            </button>
          </div>

          <div className="px-4 py-3 bg-gray-800 border-b border-gray-700">
            <h2 className="text-xl font-bold">Major Events</h2>
          </div>
          {majorEvents.map((event) => (
            <SidebarItem
              key={`major-${event.id}`}
              event={event}
              active={
                typeof selectedView !== "string" &&
                selectedView.id === event.id &&
                selectedView.type === "major"
              }
              onSelect={(ev) => setSelectedView(ev)}
            />
          ))}

          <div className="mt-6 px-4 py-3 bg-gray-800 border-y border-gray-700">
            <h2 className="text-xl font-bold">Minor Events</h2>
          </div>
          {minorEvents.map((event) => (
            <SidebarItem
              key={`minor-${event.id}`}
              event={event}
              active={
                typeof selectedView !== "string" &&
                selectedView.id === event.id &&
                selectedView.type === "minor"
              }
              onSelect={(ev) => setSelectedView(ev)}
            />
          ))}
        </aside>

        {/* Main Details Section */}
        <main className="relative flex-grow border-l border-gray-700 overflow-y-auto">
          <AnimatePresence mode="wait">
            {selectedView === "timeline" ? (
              <motion.div
                key="timeline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6"
              >
                <h1 className="text-3xl font-bold mb-8">Event Roadmap</h1>
                <div className="border-l-2 border-gray-600 ml-4">
                  {timelineItems.map((item, index) => (
                    <div key={index} className="mb-8 relative">
                      <div className="absolute -left-4 top-0 w-8 h-8 bg-gray-800 border-2 border-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">
                          {item.day.slice(-1)}
                        </span>
                      </div>
                      <div className="ml-8">
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <p className="text-sm text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={(selectedView as EventItem).id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full relative flex flex-col bg-gray-800 p-6"
              >
                {selectedView.type === "minor" ? (
                  <>
                    <div className="mb-4">
                      <Image
                        src={
                          (selectedView as MinorEvent).image ||
                          "/placeholder.svg"
                        }
                        alt={selectedView.title}
                        width={400}
                        height={256}
                        className="w-full h-64 object-cover rounded"
                      />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">
                      {selectedView.title}
                    </h2>
                    <p className="text-base text-gray-300">
                      {(selectedView as MinorEvent).description}
                    </p>
                  </>
                ) : (
                  <div className="flex flex-col justify-center items-center h-full">
                    <h2 className="text-3xl font-bold mb-4">
                      {selectedView.title}
                    </h2>
                    <p className="text-base text-gray-300">
                      Details coming soon.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
