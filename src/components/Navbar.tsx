'use client';

export default function Navbar(){

    return (
        <nav className='flex flex-col items-center justify-center w-screen'>
            <div className='flex items-center justify-center w-screen'>
                <ul className="flex">
                    <li>
                        <div className="">
                            <input id="agencia-checkbox-list" type="checkbox" value="" className="hidden peer" />
                            <label htmlFor="agencia-checkbox-list" className="text- inline-flex items-center justify-between w-full px-3 py-1 hover:text-blues-100 hover:border-blues-100  border border-blues-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blues-100 peer-checked:bg-blues-100 peer-checked:text-white">Agências</label>
                        </div>
                    </li>
                    <li>
                        <div className="ml-5">
                            <input id="chatbot-checkbox-list" type="checkbox" value="" className="hidden peer" />
                            <label htmlFor="chatbot-checkbox-list" className="text- inline-flex items-center justify-between w-full px-3 py-1 hover:text-blues-100 hover:border-blues-100 border border-blues-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blues-100 peer-checked:bg-blues-100 peer-checked:text-white">Chatbot</label>
                        </div>
                    </li>
                    <li>
                        <div className="ml-5">
                            <input id="marketing-checkbox-list" type="checkbox" value="" className="hidden peer" />
                            <label htmlFor="marketing-checkbox-list" className="text- inline-flex items-center justify-between w-full px-3 py-1 hover:text-blues-100 hover:border-blues-100 border border-blues-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blues-100 peer-checked:bg-blues-100 peer-checked:text-white">Marketing Digital</label>
                        </div>
                    </li>
                    <li>
                        <div className="ml-5">
                            <input id="geração-checkbox-list" type="checkbox" value="" className="hidden peer" />
                            <label htmlFor="geração-checkbox-list" className="text- inline-flex items-center justify-between w-full px-3 py-1 hover:text-blues-100 hover:border-blues-100 border border-blues-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blues-100 peer-checked:bg-blues-100 peer-checked:text-white">Geração de Leads</label>
                        </div>
                    </li>
                    <li>
                        <div className="ml-5">
                            <input id="midia-checkbox-list" type="checkbox" value="" className="hidden peer" />
                            <label htmlFor="midia-checkbox-list" className="text- inline-flex items-center justify-between w-full px-3 py-1 hover:text-blues-100 hover:border-blues-100 border border-blues-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blues-100 peer-checked:bg-blues-100 peer-checked:text-white">Mídia Page</label>
                        </div>
                    </li>
                </ul>
                <div className="flex ml-24">
                    <p className="w-40 font-semibold">Ordenar por</p>
                    <select className=" border border-blues-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue='' value="">Data de Publicação</option>
                        <option value="a">Mais recentes</option>
                        <option value="c">Mais antigas</option>
                    </select>
                </div>
            </div>
            <hr className="w-[71rem] bg-gray-200 border-1 dark:bg-gray-700 mt-5" />
    </nav>
    )
}