import React from 'react';
import Image from 'next/image';
import f1 from "../Assests/f1.jpg"
import f2 from "../Assests/f2.jpg"
import f6 from "../Assests/f6.jpg"
import github1 from "../Assests/github1.jpg"
import Link from 'next/link';

const Page = () => {
    return (
        <div className='bg-black opacity-90 flex flex-wrap justify-center relative'>
            <div className='p-10 '>
                <h3 className='text-white text-xl font-serif '>Portfolio</h3>
                <div className='text-white pt-5 w-40'>
                <p>Thank you for visiting my personal portfolio website. Connect with me over socials. </p>
                </div>

                <div className='text-white pt-5'>
                    <p>Phone : +92 3XXXXXXX</p>
                    <p>Email : abc@gmail.com</p>
                </div>
                <div className='flex gap-3 mt-2'>
                    <div>
                    <p><a className="h-10 w-10 rounded-full bg-white" aria-label="Github" href="https://www.facebook.com/profile.php?id=100095517277602&mibextid=kFxxJD" target="_blank"><Image className='w-8 h-8 rounded-full  ' src={f1} alt="Photo description"  /></a></p> 

                    </div>
                    <div>
                    <p><a className="h-10 w-10 rounded-full bg-white" aria-label="Github" href="https://www.facebook.com/profile.php?id=100095517277602&mibextid=kFxxJD" target="_blank"><Image className='w-8 h-8 rounded-full  ' src={f2} alt="Photo description"  /></a></p> 

                    </div>
                    <div className=''>
                    <p><a className="h-10 w-10 rounded-full bg-white" aria-label="Github" href="https://www.linkedin.com/in/muhammad-talha-4b17522bb/" target="_blank"><Image className='w-8 h-8 rounded-full  ' src={f6} alt="Photo description"  /></a></p> 
                    </div>
                    <div>
                    <p><a className="h-10 w-10 rounded-full bg-white" aria-label="Github" href="https://github.com/Muhammad361738" target="_blank"><Image className='w-8 h-8 rounded-full  ' src={github1} alt="Photo description"  /></a></p> 
                    </div>
                </div>
            </div>

            {/* second coloumn */}
            <div className='p-10'>
              <h3 className='text-white text-xl font-serif '>Useful Links</h3>
                <div className='text-white pt-5'>
                <p className='hover:text-amber-600 pt-3'><Link href="/">Home</Link></p>
                <p className='hover:text-amber-600 pt-3'><Link href="About">About</Link></p>
                <p className='hover:text-amber-600 pt-3'><Link href="Education">Education</Link></p>
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
              <h3 className='text-white text-lg font-serif  '>Our Newsletter</h3>
                <div className='text-white pt-5'>
                <p className=''>Lorem ipsum dolor sit amet consectetur.</p>
                <p className=''>Lorem, ipsum dolor.</p>
                <div className='outline   border-2xl rounded-3xl mt-4 flex justify-end '><button className='outline-none bg-amber-500 text-sm font-bold rounded-3xl w-x p-2  pb-3' >Subscribe</button></div>
               
                </div>
             </div>
            
             

        </div>
    );
}

export default Page;
