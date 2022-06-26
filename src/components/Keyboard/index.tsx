import styled from 'styled-components'

export default function Keyboard() {
    return (
      <div 
        className={`
          rounded-3xl border-white border-2 dark:border-indigo-700
          text-white dark:text-indigo-700 text-2xl
          w-full h-4/6 md:h-full md:w-6/12 p-1 md:p-3
          flex flex-wrap gap-2.5 justify-around items-stretch`}
      >
        <div className='flex w-full gap-1 font-bold'>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>7</Button>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>8</Button>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>9</Button>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>*</Button>
        </div>
        <div className='flex w-full gap-1 font-bold'>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>4</Button>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>5</Button>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>6</Button>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>-</Button>
        </div>
        <div className='flex w-full gap-1 font-bold'>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>1</Button>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>2</Button>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>3</Button>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>+</Button>
        </div>
        <div className='flex w-full gap-1 font-bold'>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>-</Button>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>0</Button>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>.</Button>
          <Button className='hover:bg-white/40 dark:hover:bg-indigo-700/40'>=</Button>
        </div>

      </div>
    )
}

const Button = styled.div`
  height: 100%;
  flex-grow: 1;

  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

`