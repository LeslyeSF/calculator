import styled from 'styled-components'
import Switch from '@mui/material/Switch'
import { useState } from 'react'
import { BsSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'
import HeadPage from '../components/HeadPage'
import Keyboard from '../components/Keyboard'
import Screen from '../components/Screen'


export default function Home() {
  const [check, setCheck] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
  };
  
  return (
    <div className={`w-screen h-screen bg-slate-50 flex justify-center ${(check)? 'dark' :''}`}>
      <HeadPage titlePage={'Calculator'}/>
      <Calculator className='bg-gradient-to-r from-blue-300 via-purple-400 to-purple-600  dark:from-slate-900 dark:via-slate-900 dark:to-slate-900'>
        <div className='flex gap-1 items-center text-2xl text-white dark:text-indigo-700'>
          <BsSunFill/>
          <Switch
            checked={check}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <BsFillMoonFill/>
        </div>
        <div className='flex flex-col h-5/6 gap-2 md:flex-row md:justify-around md:h-5/6 md:w-full'>
          <Screen/>
          <Keyboard/>
        </div>
      </Calculator>
    </div>
  )
}

const Calculator = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`