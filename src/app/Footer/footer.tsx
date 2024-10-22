import React from 'react';
import Image from 'next/image';
import f1 from "../Assests/f1.jpg"
import f2 from "../Assests/f2.jpg"
import f6 from "../Assests/f6.jpg"
import f4 from "../Assests/f4.jpg"

const Page = () => {
    return (
        <div className='bg-black opacity-90 flex flex-wrap justify-center relative top-44 md:top-0'>
            <div className='p-10 '>
                <h3 className='text-white text-xl font-serif '>RESTAURENLLY</h3>
                <div className='text-white pt-5'>
                <p>A 108 ADAM Street  </p>
                <p>NY 535008 , USA</p>
                </div>

                <div className='text-white pt-5'>
                    <p>Phone : +123456789</p>
                    <p>Email : abcexample@gmail.com</p>
                </div>

                <div className='flex gap-3 mt-2'>
                    <div>
                        <Image className='h-10 w-10 rounded-full' src={f1} alt = ""></Image>
                    </div>
                    <div>
                        <Image className='h-10 w-10 rounded-full  bg-white' src={f2} alt = ""></Image>
                    </div>
                    <div className=''>
                        <Image className='h-10 w-10 rounded-full bg-white ' src={f6} alt = ""></Image>
                    </div>
                    <div>
                        <Image className='h-10 w-10 rounded-full  bg-white' src={f4} alt = ""></Image>
                    </div>
                </div>
            </div>

            {/* second coloumn */}
            <div className='p-10'>
              <h3 className='text-white text-xl font-serif '>Useful Links</h3>
                <div className='text-white pt-5'>
                <p className='hover:text-amber-600'>Home </p>
                <p className='pt-3 hover:text-amber-600'>About us</p>
                <p className='pt-3 hover:text-amber-600'>Services</p>
                <p className='pt-3 hover:text-amber-600'>Trems of services</p>
                <p className='pt-3 hover:text-amber-600'>Privecy policy</p>
                </div>
             </div>
             {/* third coloumn  */}
             <div className='p-10'>
              <h3 className='text-white text-xl font-serif '>Our Services</h3>
                <div className='text-white pt-5'>
                <p className='hover:text-amber-600'>Web Design</p>
                <p className='pt-3 hover:text-amber-600'>Web Development</p>
                <p className='pt-3 hover:text-amber-600'>Product Management</p>
                <p className='pt-3 hover:text-amber-600'>Marketing</p>
                <p className='pt-3 hover:text-amber-600'>Graphic Design</p>
                </div>
             </div>
             <div className='p-10  '>
              <h3 className='text-white text-xl font-serif  '>Our Newsletter</h3>
                <div className='text-white pt-5'>
                <p className=''>Lorem ipsum dolor sit amet consectetur.</p>
                <p className=''>Lorem, ipsum dolor.</p>
                <div className='outline   border-2xl rounded-3xl mt-4 flex justify-end '><button className='outline-none bg-amber-500 text-xl font-bold rounded-3xl w-x p-3  pb-3' >Subscribe</button></div>
               
                </div>
             </div>
            
             

        </div>
    );
}

export default Page;
