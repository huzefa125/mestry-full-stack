import { useState } from 'react'
import Cards from './Components/Cards'
import Navbar from './Components/Navbar'


function App() {



  const data = [
    {image : "https://media.istockphoto.com/id/1321486723/photo/japanese-man-spending-weekend-morning-painting-in-his-bedroom-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=JXw7o4Od_P7DTOUu3Q2ndsyyzjopOjRQl3kqm1Y2TbU=",name : "Atif Aslam",Artist : "Musician",added:false},
    {image : "https://images.unsplash.com/photo-1658314756129-5b27f344b65b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QXJ0aXN0fGVufDB8fDB8fHww",name : "Atif Aslam",Artist : "Musician",added:false},
    {image : "https://plus.unsplash.com/premium_photo-1673676883851-761e734d6cec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEFydGlzdHxlbnwwfHwwfHx8MA%3D%3D",name : "Atif Aslam",Artist : "Musician",added:false},
    {image : "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFydGlzdHxlbnwwfHwwfHx8MA%3D%3D",name : "Atif Aslam",Artist : "Musician",added:false},
    {image : "https://images.unsplash.com/photo-1551180452-aea351b23949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEFydGlzdHxlbnwwfHwwfHx8MA%3D%3D",name:"Shaikh Huzefa" ,Artist : "Coder",added:true}
  ]

  const [songdata,setdata]=useState(data)

  // const handleClick = (index)=>{
  //   setdata((prev)=>{
  //     return prev.map((item,itemindex)=>{
  //       if(itemindex === index)
  //         return {...item,added : !item.added}
  //       return item;
  //     })
  //   })
  // }

const handleClick = (index)=>{
  setdata((prev)=>{
    return prev.map((item,indexitem)=>{
      if(indexitem === index)
        return{...item,added:!item.added}
      return item
    })
  })
}
  return (
    <>
    
     <div className='w-full h-screen bg-zinc-300 '>
      <Navbar data={songdata}></Navbar>
      <div className='px-20 flex gap-12 mt-10 mt-10 flex-wrap'>
        {songdata.map((item,index)=>(


          <Cards
          key = {index}
          name = {item.name}
          artist={item.Artist}
          image={item.image}
          added={item.added}
          handleClick={handleClick}
          index={index}
          ></Cards>
        ))}
      </div>
     
     </div>

    </>
  )
}

export default App
