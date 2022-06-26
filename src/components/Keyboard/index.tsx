import styled from 'styled-components'

export default function Keyboard({ operation, setOperation, action, setAction, value, setValue }) {
  const listOperation = ['+', '-', '*', '=']
  const handleOperation = (text:string) => {
    console.log(Number(text));
    if(Number(text)){
      if(operation.length <= 25){
        setOperation(operation+text)
      }
    } else {

    }
    
  }

  return (
    <div 
      className={`
        rounded-3xl border-white border-2 dark:border-indigo-700
        text-white dark:text-indigo-700 text-2xl
        w-full h-4/6 md:h-full md:w-6/12 p-1 md:p-3
        flex flex-wrap gap-2.5 justify-around items-stretch`}
    >
      <div className='flex w-full gap-1 font-bold'>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('7')}
        >
          7
        </Button>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('8')}
        >
          8
        </Button>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('9')}
        >
          9
        </Button>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('*')}
        >
          *
        </Button>
      </div>
      <div className='flex w-full gap-1 font-bold'>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('4')}
        >
          4
        </Button>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('5')}
        >
          5
        </Button>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('6')}
        >
          6
        </Button>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('-')}
        >
          -
        </Button>
      </div>
      <div className='flex w-full gap-1 font-bold'>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('1')}
        >
          1
        </Button>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('2')}
        >
          2
        </Button>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('3')}
        >
          3
        </Button>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('+')}
        >
          +
        </Button>
      </div>
      <div className='flex w-full gap-1 font-bold'>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('-')}
        >
          ANS
        </Button>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('0')}
        >
          0
        </Button>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('.')}
        >
          .
        </Button>
        <Button 
          className='hover:bg-white/40 dark:hover:bg-indigo-700/40'
          onClick={()=>handleOperation('=')}
        >
          =
        </Button>
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