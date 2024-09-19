import { FC } from 'react'

const Calendar: FC = () => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const daysInMonth: number[] = []
  for (let i = 1; i <= 31; i++) {
    daysInMonth.push(i)
  }

  return (
    <div className="flex items-start w-3/5 max-w-2xl bg-cyan-500 text-white p-4 border border-black rounded-lg shadow-md">
      <div className="flex flex-col w-2/5 pr-4">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-xl font-bold mb-4">Calendar</h1>
          <div className="flex justify-between align-center w-full mb-4">
            <div className="flex justify-between w-full">
              <h2 className="text-md font-semibold">Month</h2>
              <h2 className="text-md font-semibold">Year</h2>
            </div>
            <div className="flex justify-between w-full">
              <button className="px-2 py-1 bg-gray-800 text-white rounded text-xs">
                Prev
              </button>
              <button className="px-2 py-1 bg-gray-800 text-white rounded text-xs">
                Next
              </button>
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex justify-left">
              {weekDays.map((day) => (
                <span key={day} className="text-xs w-8 text-center">
                  {day}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-left">
            {daysInMonth.map((day) => (
              <span key={day} className="flex justify-center w-8 h-8 text-xs">
                {day}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-3/5 pl-4">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-md font-semibold mb-2">Events</h2>
          <div className="flex flex-col items-center mb-2 w-full">
            <h3 className="text-sm font-semibold mb-1">Time</h3>
            <div className="flex mb-2">
              <input
                className="mx-1 p-1 border rounded text-xs"
                type="number"
                placeholder="Hrs"
                name="hours"
                min={0}
                max={24}
              />
              <input
                className="mx-1 p-1 border rounded text-xs"
                type="number"
                placeholder="Min"
                name="minutes"
                min={0}
                max={60}
              />
              <input
                className="mx-1 p-1 border rounded text-xs"
                type="number"
                placeholder="Sec"
                name="seconds"
                min={0}
                max={60}
              />
            </div>
            <textarea
              className="mb-2 p-2 border rounded w-full text-xs"
              placeholder="Description"
            ></textarea>
            <div className="flex mb-2">
              <button className="mx-1 px-2 py-1 bg-green-600 text-white rounded text-xs">
                Add
              </button>
              <button className="mx-1 px-2 py-1 bg-red-600 text-white rounded text-xs">
                Close
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="mb-2 text-center">
            <div className="text-xs mb-1">date</div>
            <div className="text-xs mb-1">time</div>
            <div className="text-xs"> descr</div>
          </div>
          <div className="text-xs mb-2">text</div>
          <div className="flex justify-center w-full">
            <button className="mx-1 px-2 py-1 bg-blue-600 text-white rounded text-xs">
              Edit
            </button>
            <button className="mx-1 px-2 py-1 bg-red-600 text-white rounded text-xs">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
