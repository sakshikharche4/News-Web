import React from 'react'
import Searchbar from './Searchbar'
import { CiDark } from 'react-icons/ci'
import { replace, useNavigate } from 'react-router-dom'

const Navbar = () => 
  
  {
    const navigate = useNavigate()
  return (
    <div className="px-6">
      <div className="flex items-center justify-around gap-8 py-2">
        
        {/* logo */}
        <div className="font-bold text-2xl text-blue-500">
          NewsApp
        </div>

        {/* navbar */}
        <div className='flex items-center gap-5 font-semibold text-base '>
          <button onClick={()=>navigate('/business' , {replace :true})}>
            <span className='hover:text-lg '>Business</span>
          
          </button>
          <button onClick={()=>navigate('/entertainment' , {replace :true})}>
              <span className='hover:text-lg '>Entertainment</span>
            
          </button>
            <button onClick={()=>navigate('/general' , {replace :true})}>
                <span className='hover:text-lg '>General</span>
            
          </button>
           <button onClick={()=>navigate('/health' , {replace :true})}>
              <span className='hover:text-lg '>Health</span>
            
          </button>
            <button onClick={()=>navigate('/science' , {replace :true})}>
                <span className='hover:text-lg '>Science</span>
            
          </button>
         
           <button onClick={()=>navigate('/technology' , {replace :true})}>
              <span className='hover:text-lg '>Technology</span>
            
          </button>

        </div>
       
          
         
         
           
           

          

    

        {/* searchbar */}
        <div >
          <Searchbar />
        </div>

        {/* mode */}
        <CiDark className="size-8 bg-slate-400 rounded-2xl hover:bg-gray-500 p-1" />
      </div>
    </div>
  )
}

export default Navbar
