import { useState } from "react";
import Sections from "./components/Sections";
import EventList from "./components/EventList";


export default function App() {
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  
  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    )
  }

  return (
    <div className="main-container pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <Sections
        selectedColors={selectedColors}
        onToggleColor={toggleColor}
      />

      <EventList selectedColors={selectedColors} />
    </div >
  );
}
