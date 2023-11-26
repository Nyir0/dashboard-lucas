

import { Grafico } from './charts';
import { Table } from './table';

export function Hello(){
    return(
        <>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col pb-8 max-sm:pb-16 relative overflow-hidden">
                    <div className="flex pr-5 max-sm:relative">
                        <div className='flex flex-col w-2/3 max-sm:w-full max-sm:pl-10'>
                            <span className="text-3xl font-bold">Good morning, Marla</span>
                            <span className="text-xl text-gray-500 font-semibold">Here's what's happening at the store today.</span>
                            <div className="flex flex-wrap justify-around gap-8 py-12 max-sm:py-0">
                            {/* <img src="img/man-chart.svg" alt="" /> */}
                                <section className='flex w-full justify-around max-sm:flex-col'>
                                    <span className="flex space-x-3 transform transition-transform hover:scale-105 cursor-pointer max-sm:my-5">
                                        <span className="flex flex-col items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-indigo-500 w-5 h-5 icon icon--feather"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-green-500 w-4 h-4 mt-2 icon icon--feather"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                            <span className="text-xs text-green-500 font-semibold">3%</span>
                                        </span>
                                        <span>
                                            <span className="block text-sm text-gray-500 mb-2 font-semibold">Total Sales</span>
                                            <span className="text-3xl font-bold">$12,400</span>
                                        </span>
                                    </span>
                                    <span href="#" className="flex space-x-3 transform transition-transform hover:scale-105 cursor-pointer max-sm:my-5">
                                        <span className="flex flex-col items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-yellow-500 w-5 h-5 icon icon--feather"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-green-500 w-4 h-4 mt-2 icon icon--feather"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                            <span className="text-xs text-green-500 font-semibold">5%</span>
                                        </span>
                                        <span>
                                            <span className="block text-sm text-gray-500 mb-2 font-semibold">Total Visits</span>
                                            <span className="text-3xl font-bold">123,540</span>
                                        </span>
                                    </span>
                                    <span href="#" className="flex space-x-3 transform transition-transform hover:scale-105 cursor-pointer max-sm:my-5">
                                        <span className="flex flex-col items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-sky-500 w-5 h-5 icon icon--feather"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-red-500 w-4 h-4 mt-2 icon icon--feather"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                            <span className="text-xs text-red-500 font-semibold">7%</span>
                                        </span>
                                        <span>
                                            <span className="block text-sm text-gray-500 mb-2 font-semibold">Total Expenses</span>
                                            <span className="text-3xl font-bold">$54,300</span>
                                        </span>
                                    </span>
                                </section>              
                            </div>
                        </div>
                        <img src="img/girl-charts.svg" className='max-sm:absolute max-sm:opacity-50 max-sm:-bottom-12 max-sm:w-[70vw] max-sm:right-0 max-sm:-z-10' alt="" />
                    </div>
                    <section className='shadow-[0_5px_20px_5px_rgba(0,0,0,0.3)] w-[97%] mx-2 rounded-3xl'>
                        <Grafico/>
                    </section>
                    <Table/>
                </div>
            </div>
            
        </>
    );
};