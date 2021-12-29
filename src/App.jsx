import { useState } from 'react'
import Navbar from './components/Navbar'
import UsersFunc from './components/UsersFunc'
import UsersClass from './components/UsersClass'

const App = () => {

  const [dark, setDark] = useState(localStorage.dark ? localStorage.dark : false)

  const toggleDark = () => {
    setDark(!dark)
    localStorage.dark = dark
  }

  const [showFunc, setShowFunc] = useState(true)

  const toggleComponent = () => {
    setShowFunc(!showFunc)
  }
  
  return (
    <div className={dark ? 'dark' : ""}>
      <div className="app w-full min-h-screen flex justify-center items-center">
        <div className='w-full max-w-xl bg-coolGray-100 dark:bg-coolGray-700 p-4 big-shadow-2 rounded-xl'>
          <Navbar myToggleDark={toggleDark} myDark={dark}/>
          <div className='flex py-4 justify-center'>
            <button className='bg-teal-400 rounded-full p-3' onClick={toggleComponent}>
              Toggle component
            </button>
          </div>
          {showFunc ? <UsersFunc/> : <UsersClass/>}    
        </div>

      </div>

    </div>
  )
}

export default App
