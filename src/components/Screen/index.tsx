export default function Screen({ operation }) {
  return (
    <div 
        className={`
          rounded-3xl border-white border-2 dark:border-indigo-700
          text-white dark:text-indigo-700 text-2xl
          w-full h-2/6 md:h-full md:w-4/12
          flex flex-wrap gap-2.5 justify-around items-stretch
          relative overflow-hidden`}
    >
      <div className='w-full h-full bg-white dark:bg-indigo-700 rounded-3xl opacity-10'></div>
      <div className='absolute bottom-0 h-20 text-white dark:text-indigo-700 text-4xl font-bold w-full p-4 items-center flex justify-end'>{operation}</div>
      <div className='absolute bottom-24 top-0 text-white dark:text-indigo-700 w-full p-1'></div>
    </div>
  )
}