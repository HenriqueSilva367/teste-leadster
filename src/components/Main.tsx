'use client';
import Modal from './Modal';
import useModal from '@/hooks/useModal';
import { X } from 'lucide-react';
import Videos from './Video';

export default function Main(){
    const { isOpen, toggle } = useModal();
    return (
        <div className=''>
           <button onClick={toggle}>Open Modal</button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity '>
                    <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                        <div className='relative transform overflow-hidden rounded-lg bg-white  shadow-xl transition-all w-[35rem] h-[44rem] '>
                            <hr className='bg-blues-100 p-1 mt-[-0.3rem] ml-[-2.5rem] mb-5 w-[38rem]  '/>
                            <div className='flex items-end justify-end w-50 mt-5 mr-4'>
                                <button ml-5 onClick={toggle}><X className='text-gray-200'/></button>    
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='w-[17rem] mb-8'><strong className=' text-blues-100'>Webinar:</strong> Como aumentar sua Geração de Leads feat. Traktor</p>
                            </div>
                            <Videos />
                            <div>
                              <div className='p-5 text-start'>
                                <p className='mb-3 font-semibold'>Descrição</p>
                                <hr className='bg-blues-200 ' />
                                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sequi aperiam ratione recusandae eaque libero saepe magnam, natus provident delectus ducimus.</p>
                                <p className='mb-3'>Downloads</p>
                                <hr className='bg-blues-200 ' />
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}