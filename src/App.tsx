

import Sections from "./components/Sections";
import Timeline from "./components/Timeline";


export default function App() {
  return (
    <div className="main-container pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <Sections />

      <Timeline />
    </div >
  );
}
