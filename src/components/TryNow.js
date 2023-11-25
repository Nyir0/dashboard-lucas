function TryNow(){
    return(
        <div className="flex max-md:space-x-8 max-xl:space-x-0 space-y-8 max-md:space-y-0 max-xl:space-y-8 order-3 max-xl:order-none col-span-6 max-xl:col-span-1 px-4">                               
            <div className="flex flex-col banner-tryNow w-1/2 bg-gradient-to-br from-primary-600 to-primary-400 shadow rounded max-md:w-1/2 max-max-xl:w-full max-md:gap-10 max-xl:relative mr-3">
                <div className="flex flex-col items-start min-w-0 p-10 relative h-[70vh]">
                    <div className="text-max-xl font-semibold text-white">Try pro version</div>
                    <p className="text-sm mb-5 w-2/3 pr-3 text-primary-200 text-white">Unlock the full power of selling for 2 weeks for free!</p>
                    <button href="#" className="bg-white py-3 px-5 rounded-lg font-bold text-[#6183cc]">Try now!</button>
                    <img class="max-w-[60%] absolute -bottom-[4.5vh] left-[7vw]" src="img/man-chart.svg" alt=""/>
                </div>
                <div className="flex justify-end self-end w-1/3 max-md:w-3/5 max-md:self-center max-xl:w-36 max-xl:absolute bottom-0 right-3 overflow-hidden">
                </div>
            </div>
            <div className="flex flex-col card w-1/2 my-0 p-4 ml-3">
                <div className="flex justify-between">
                    <h3 className="text-lg font-bold">
                        Customer Reviews
                    </h3>
                    <a href="#" className="text-primary-500 hover:opacity-80 inline-flex items-center font-bold text-[var(--color-text1)]">
                        See more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 icon icon--feather"><polyline points="9 18 15 12 9 6"></polyline></svg>
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
    )
}

export default TryNow;