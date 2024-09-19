import { FC } from 'react'
import Calendar from './components/Calendar'


const App: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Calendar />
    </div>
  )
}

export default App