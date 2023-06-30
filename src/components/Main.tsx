'use client';
import Modal from './Modal';
import useModal from '@/hooks/useModal';
import { X } from 'lucide-react';

export default function Main(){
    const { isOpen, toggle } = useModal();
    return (
        <div className=''>
           <button onClick={toggle}>Open Modal</button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity '>
                    <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                        <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-10 sm:pb-[40rem]'>
                            <div className='flex items-end justify-end'>
                                <button onClick={toggle}><X /></button>    
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='w-[17rem]'><strong className=' text-blues-100'>Webinar:</strong> Como aumentar sua Geração de Leads feat. Traktor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}