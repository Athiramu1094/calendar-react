import { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css'



function App() {
  const[selectedDate, setSelectedDate] = useState("")

function onClick(value){
  const myDate = String(value.toLocaleDateString())
  setSelectedDate(myDate)
  console.log(value.toLocaleDateString())
}



  return (
    <>
    <div className='container'>
    <Calendar 
    onClickDay={onClick}
    />
    <div className='date'>
    <h2>Select Your Date</h2>
    <span>{selectedDate}</span>
    </div>
    </div>
    </>
  )
}

export default App
