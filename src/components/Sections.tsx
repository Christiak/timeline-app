import { useState } from 'react'
import sections from '../../sections.json'

interface SectionItem {
  section: string
  color: string
}

type SectionsProps = {
  selectedColors: string[]
  onToggleColor: (color: string) => void
}

const Sections = ({
  selectedColors,
  onToggleColor,
}: SectionsProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="rounded-2xl border border-gray-700 bg-[#2A2A2A] p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-100">Sekcie</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-gray-600 px-3 py-1 text-sm text-gray-200 transition hover:bg-gray-700"
        >
          {isOpen ? 'Skryť' : 'Zobraziť'}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-3">
          {(sections as SectionItem[]).map((item, index) => {
            const checked = selectedColors.includes(item.color)

            return (
              <label
                key={index}
                className="flex cursor-pointer items-center gap-3 text-lg font-medium"
              >
                {/* checkbox */}
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggleColor(item.color)}
                  className="h-4 w-4 cursor-pointer accent-white"
                />

                {/* section text */}
                <span
                  className={checked ? 'opacity-100' : 'opacity-60'}
                  style={{ color: item.color }}
                >
                  {index + 1}. {item.section}
                </span>
              </label>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Sections
