import data from "../../data.json";

type TimelineEntry = {
	date: string;
	description: string;
	color: string;
};

type EventListProps = {
  selectedColors: string[]
}

const EventList = ({ selectedColors }: EventListProps) => {
  const filteredData: TimelineEntry[] =
    selectedColors.length === 0
      ? data
      : data.filter(item => selectedColors.includes(item.color))

  return (
    <div className='pt-6'>
			<ul className="space-y-0">
				{filteredData.map((entry, index) => (
					<li
						key={index}
						className="relative flex items-center gap-3 py-1.5 pl-6 text-sm"
					>
						{/* Dot on the line */}
						<span
							className="absolute left-0 h-2 w-2 shrink-0 rounded-full bg-white ring-2 ring-white"
							style={{ backgroundColor: entry.color }}
							aria-hidden
						/>

						<time
							className="shrink-0 font-medium"
							dateTime={entry.date}
							style={{ color: entry.color }}
						>
							{entry.date} - <span> </span>
						</time>
						<span className="min-w-0 flex-1" style={{ color: entry.color }}>
							{entry.description}
						</span>
					</li>
				))}
			</ul>
		</div>		
  )
}

export default EventList