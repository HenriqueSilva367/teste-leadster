import Image from 'next/image'
import Logo from "../../public/logo.png";
import InconHeader from "../../public/asset-header.png"

export default function Header() {
    return (
      <div className='flex items-center justify-center p-10 flex-col'>
        <Image src={Logo} alt='Logo Leadster' />
        
        <div className='flex flex-col items-center justify-center bg-blues-50 w-screen h-[500px] mt-10'> 
          <span className='border-solid border-2 border-blues-100 rounded-tl-lg rounded-tr-lg rounded-br-lg px-5 py-1 text-blues-100 font-bold uppercase'>WEBINARS EXCLUSIVOS</span>
          <h2 className='text-5xl text-blues-200 mt-5 font-medium'>Menos Conversinha,</h2>
          <div className='ml-[46rem] mb-[-2rem]'>
            <Image src={InconHeader} alt='Incone Leadster' />
          </div>
          <h1 className='text-8xl text-blues-100 font-bold'>Mais Conversão</h1>          
          <hr className="w-[49rem] bg-gray-200 border-1 dark:bg-gray-700 mt-5" />
          <p className='mt-5'>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
        </div>
      </div>
    )
  }
  