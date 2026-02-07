import { useState } from 'react';
import sections from '../../sections.json';

interface SectionItem {
  section: string;
  color: string;
}

const Sections: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="rounded-2xl border border-gray-700 bg-[#2A2A2A] p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-100">Sections</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-gray-600 px-3 py-1 text-sm text-gray-200 transition hover:bg-gray-700"
        >
          {isOpen ? 'Hide' : 'Show'}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-3">
          {(sections as SectionItem[]).map((item, index) => (
            <h2
              key={index}
              className="text-lg font-medium"
              style={{ color: item.color }}
            >
              {item.section}
            </h2>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sections;