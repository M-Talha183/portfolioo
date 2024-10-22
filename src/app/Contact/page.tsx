import React from 'react';

const Page = () => {
    return (
        
              <div className=' w-auto h-auto md:w-ful md:h-screen bg-slate-800 items-center pb-12' >
                 <div className="h-auto w-full flex flex-wrap flex-col items-center"> 
                    <p className="text-white font-bold text-3xl md:text-4xl text-center mt-20">Contact Me</p>
                 <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
                 {/* contact form  */}
           <div className='w-96 items-center'>      
            <form className='pl-5'>
                <input className='p-3 w-80 md:w-96 border-black border-2 rounded-xl text-xl' type="text" name="" id="" placeholder='Name' required />
                <input className='p-3 w-80 md:w-96 border-black border-2 rounded-xl text-xl mt-5' type="text" name="" id="" placeholder='email' required />
                <input className='p-3 w-80 md:w-96 border-black border-2 rounded-xl text-xl mt-5' type="text" name="" id="" placeholder='phone' required />
                <input className='p-3 w-80 md:w-96 h-32 border-black border-2 rounded-xl text-xl mt-5' type="text" name="" id="" placeholder='Message' required />

            </form>
            </div>
            <div>
            <button className='w-32 h-10 bg-blue-600 text-white font-bold text-xl rounded-lg hover:bg-blue-900 mt-5'>Submit</button>
            </div>
        </div>




      </div>
 
    );
}

export default Page;
