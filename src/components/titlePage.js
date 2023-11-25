export function Hello(){
    return(
        <>
            <div className="grid grid-cols-6 xl:grid-cols-3 gap-8">
                <div className="pb-8 xl:pb-16 relative overflow-hidden">
                    <img src="./img.svg" alt="Seu SVG" />
                    <div className="ml-5">
                        <div className="text-3xl">Good morning, Marla</div>
                        <div className="text-xl text-gray-500">Here's what's happening at the store today.</div>
                    </div>
                    <div className="flex flex-wrap md:justify-around gap-8 mt-10 mr-72 ml-5">
                        <a href="#" className="flex space-x-3 transform transition-transform hover:scale-105">
                            <span className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-indigo-500 w-5 h-5 icon icon--feather"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-green-500 w-4 h-4 mt-2 icon icon--feather"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                <span className="text-xs text-green-500">3%</span>
                            </span>
                            <span>
                                <span className="block text-sm text-gray-500 mb-2">Total Sales</span>
                                <span className="text-3xl">$12,400</span>
                            </span>
                        </a>
                        <a href="#" className="flex space-x-3 transform transition-transform hover:scale-105">
                            <span className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-yellow-500 w-5 h-5 icon icon--feather"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-green-500 w-4 h-4 mt-2 icon icon--feather"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                <span className="text-xs text-green-500">5%</span>
                            </span>
                            <span>
                                <span className="block text-sm text-gray-500 mb-2">Total Visits</span>
                                <span className="text-3xl">123,540</span>
                            </span>
                        </a>
                        <a href="#" className="flex space-x-3 transform transition-transform hover:scale-105">
                            <span className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-sky-500 w-5 h-5 icon icon--feather"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-red-500 w-4 h-4 mt-2 icon icon--feather"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                <span className="text-xs text-red-500">7%</span>
                            </span>
                            <span>
                                <span className="block text-sm text-gray-500 mb-2">Total Expenses</span>
                                <span className="text-3xl">$54,300</span>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="md:flex xl:flex-col md:space-x-8 xl:space-x-0 space-y-8 md:space-y-0 xl:space-y-8 order-3 xl:order-none col-span-6 xl:col-span-1">                               
                    <div className="bg-gradient-to-br from-primary-600 to-primary-400 shadow rounded flex md:flex-col xl:flex-row md:w-1/2 xl:w-full md:gap-10 xl:relative">
                        <div className="flex-1 min-w-0 p-lg">
                            <div className="text-xl font-semibold text-white">Try pro version</div>
                            <p className="text-sm mb-5 w-2/3 pr-3 text-primary-200">Unlock the full power of selling for 2 weeks for free!</p>
                            <a href="#" className="button button--soft scheme-primary">Try now!</a>
                        </div>
                        <div className="flex justify-end self-end w-1/3 md:w-3/5 md:self-center xl:w-36 xl:absolute bottom-0 right-3 overflow-hidden">
                            
                        </div>
                    </div>
                    <div className="flex-1 card">
                        <div className="card__header">
                            <h3 className="text-lg font-bold">
                                Customer Reviews
                            </h3>
                            <a href="#" className="text-primary-500 hover:text-primary-400 inline-flex items-center">
                                See more
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 icon icon--feather"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </a>
                        </div>
                        <div className="card__body">
                            <div className="flex justify-between py-4 px-8 border bg-gray-100 rounded">
                                <div className="inline-flex text-yellow-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon--heroiconsSolid"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon--heroiconsSolid"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon--heroiconsSolid"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon--heroiconsSolid"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 icon icon--heroiconsSolid"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <div className="font-bold">4.0 out of 5</div>
                            </div>
                            <div className="py-8 text-sm text-center">Total <span className="font-bold">445</span> reviews</div>
                            <div className="space-y-5">
                                <div className="flex items-center gap-5 text-sm">
                                    <span className="font-bold w-10">5 star</span>
                                    <div className="flex-1 rounded-full bg-gray-200">
                                        <div className="rounded-full bg-blue-400 h-2 w-50"></div>
                                    </div>
                                    <span className="w-8">50%</span>
                                </div>
                                <div className="flex items-center gap-5 text-sm">
                                    <span className="font-bold w-10">4 star</span>
                                    <div className="flex-1 rounded-full bg-gray-200">
                                        <div className="rounded-full bg-blue-400 h-2 w-15"></div>
                                    </div>
                                    <span className="w-8">15%</span>
                                </div>
                                <div className="flex items-center gap-5 text-sm">
                                    <span className="font-bold w-10">3 star</span>
                                    <div className="flex-1 rounded-full bg-gray-200">
                                        <div className="rounded-full bg-blue-400 h-2 w-13"></div>
                                    </div>
                                    <span className="w-8">13%</span>
                                </div>
                                <div className="flex items-center gap-5 text-sm">
                                    <span className="font-bold w-10">2 star</span>
                                    <div className="flex-1 rounded-full bg-gray-200">
                                        <div className="rounded-full bg-blue-400 h-2 w-12"></div>
                                    </div>
                                    <span className="w-8">12%</span>
                                </div>
                                <div className="flex items-center gap-5 text-sm">
                                    <span className="font-bold w-10">1 star</span>
                                    <div className="flex-1 rounded-full bg-gray-200">
                                        <div className="rounded-full bg-blue-400 h-2 w-10"></div>
                                    </div>
                                    <span className="w-8">10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};