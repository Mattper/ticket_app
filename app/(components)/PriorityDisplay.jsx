const PriorityDisplay = ({priority}) => {
  return (
    <>
      <div className='flex justify-start align-baseline'>
        <div className={`w-4 h-4 mx-1 rounded-full ${priority > 0 ? "bg-yellow-400" : "bg-slate-400" }`}/>
        <div className={`w-4 h-4 mx-1 rounded-full ${priority > 1 ? "bg-yellow-400" : "bg-slate-400" }`}/>
        <div className={`w-4 h-4 mx-1 rounded-full ${priority > 2 ? "bg-yellow-400" : "bg-slate-400" }`}/>
        <div className={`w-4 h-4 mx-1 rounded-full ${priority > 3 ? "bg-yellow-400" : "bg-slate-400" }`}/>
        <div className={`w-4 h-4 mx-1 rounded-full ${priority > 4 ? "bg-yellow-400" : "bg-slate-400" }`}/>
      </div>
    </>
  )
}

export default PriorityDisplay