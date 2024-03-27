
function Card() {




    return (
        <div>
            <div className='grid grid-cols-12  bg-[#333] rounded-lg max-w-[1400px] gap-2 '>
                <div className='col-span-12 md:col-span-6'>

                    <div className="relative   rounded-lg  overflow-hidden  fontt">
                        <div className="relative">
                            <img className="rounded-lg" src='/img2.png' alt="" />

                            <div className="absolute inset-0 flex flex-col items-center justify-start p-5">
                                <div className="flex justify-between w-full">
                                    <div>
                                        <img className='w-10 h-10 filter invert' src='/diamond.svg' alt="" />
                                    </div>
                                    <div className='cursor-pointer'>
                                        <img className='w-6 h-6 mt-2' src='/dropdown.svg' alt="" />

                                    </div>
                                </div>
                                <div className="absolute inset-x-0 bottom-0   bg-opacity-20 bg-black border-t border-gray-400 backdrop-filter backdrop-blur-lg flex flex-col items-center justify-end p-5 rounded-t-[15px]">
                                    <div className="flex justify-between w-full text-white">
                                        <div>
                                            <p className='text-lg '>InDifferent Studios</p>
                                            <p className='text-[12px] md:text-sm  '>Peter Bob  </p>
                                            <p className='text-xs md:text-sm mt-2  opacity-80'>Hey! We are Sarah, Jenny Lennart and Korbi, together we are inDifferent Studios, an ambitious photography</p>
                                        </div>
                                        <div className='cursor-pointer'>
                                            <p className=' whitespace-nowrap'>Photographer</p>
                                            <p className='text-end   text-md mt-2'>218k</p>

                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2 items-center w-full text-white">
                                        <div>

                                            <p className='text-sm   mt-2'>Los Angeles-California (United States)</p>
                                        </div>
                                        <div className='cursor-pointer'>

                                            <div className='flex justify-between  gap-2'>
                                                <a>
                                                    <span className='bg-white rounded-full w-9 h-9 flex justify-center items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                                        </svg>

                                                    </span>

                                                </a>
                                                <a >
                                                    <span className='bg-white rounded-full w-9 h-9 flex justify-center items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                        </svg>

                                                    </span>

                                                </a>
                                                <a>
                                                    <span className='bg-white rounded-full w-9 h-9 flex justify-center items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>


                                                    </span>

                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='col-span-12 md:col-span-6 h-[500px] lg:h-[700px] overflow-y-auto px-2 '>
                    <div className='col-span-12 sticky top-0 z-50 bg-[#333] '>
                        <h1 className='text-xl px-2 py-2  text-white'>Where am i</h1>
                        <div className='grid grid-cols-12  sticky top-0 z-50  rounded-md font-bold'>

                            <div className='col-span-3'>
                                <div className=' px-1 relative '>


                                    <div className='border border-white rounded-md'>
                                        <p className='py-1 px-2 text-[12px] md:text-sm   text-white'>From</p>
                                    </div>



                                </div>
                            </div>
                            <div className='col-span-3'>
                                <div className=' px-1 relative '>

                                    <div className='border border-white rounded-md'>
                                        <p className='py-1 px-2 text-[12px] md:text-sm    text-white'>To</p>
                                    </div>



                                </div>
                            </div>
                            <div className='col-span-3'>
                                <div className=' px-1 relative '>

                                    <div className='border border-white rounded-md'>
                                        <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap  overflow-x-auto  text-white'>Country</p>
                                    </div>



                                </div>
                            </div>
                            <div className='col-span-3'>
                                <div className=' px-1 relative '>

                                    <div className='border border-white rounded-md'>
                                        <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap   overflow-x-auto text-white'>City</p>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='grid grid-cols-12 mt-2'>

                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm   text-white'>1.03.2024</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm    text-white'>2.04.2024</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap  overflow-x-auto  text-white'>United States</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap   overflow-x-auto text-white'>Los Angeles</p>
                                </div>



                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-12'>

                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm   text-white'>1.03.2024</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm    text-white'>2.04.2024</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap  overflow-x-auto  text-white'>United States</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap   overflow-x-auto text-white'>Los Angeles</p>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12'>

                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm   text-white'>1.03.2024</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm    text-white'>2.04.2024</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap  overflow-x-auto  text-white'>United States</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap   overflow-x-auto text-white'>Los Angeles</p>
                                </div>



                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-12'>

                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm   text-white'>1.03.2024</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm    text-white'>2.04.2024</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap  overflow-x-auto  text-white'>United States</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap   overflow-x-auto text-white'>Los Angeles</p>
                                </div>



                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-12'>

                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm   text-white'>1.03.2024</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm    text-white'>2.04.2024</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap  overflow-x-auto  text-white'>United States</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap   overflow-x-auto text-white'>Los Angeles</p>
                                </div>



                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-12'>

                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm   text-white'>1.03.2024</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm    text-white'>2.04.2024</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap  overflow-x-auto  text-white'>United States</p>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='py-2 px-1 relative '>

                                <div className='border border-white rounded-md'>
                                    <p className='py-1 px-2 text-[12px] md:text-sm  whitespace-nowrap   overflow-x-auto text-white'>Los Angeles</p>
                                </div>



                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Card
