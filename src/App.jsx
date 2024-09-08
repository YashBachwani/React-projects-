import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-300 px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor("red")} className='outline-none px-4 font-bold'style={{color:"red"}}>Red</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 font-bold'style={{color:"green"}}>green</button>
            <button onClick={() => setColor("orange")} className='outline-none px-4 font-bold'style={{color:"orange"}}>orange</button>
            <button onClick={() => setColor("yellow")} className='outline-none px-4 font-bold'style={{color:"yellow"}}>yellow</button>
            <button onClick={() => setColor("#484747")} className='outline-none px-4 font-bold'style={{color:"#484747"}}>grey</button>
            <button onClick={() => setColor("brown")} className='outline-none px-4 font-bold'style={{color:"brown"}}>brown</button>
            <button onClick={() => setColor("black")} className='outline-none px-4 font-bold'style={{color:"black"}}>black</button>
            <button onClick={() => setColor("#fd002c")} className='outline-none px-4 font-bold'style={{color:"#fd002c"}}>pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
