import './chartDoughnut';
function Dounts() {

    return (
        <div className="flex m-4 max-md:flex max-xl:flex-col max-md:space-y-0 items-start order-4 max-xl:order-none col-span-6 max-xl:col-span-1 relative">
            <div className='flex flex-col card p-6 w-[50vw] max-sm:w-full mr-3 min-h-[37.5vh]'>
                <strong>Sales by Category</strong>
                <div className='flex pt-5 justify-evenly'>
                    <canvas id="myChart" width="120" height="120" className='my-3'></canvas>
                    <div className='pt-1'>
                        <d1v className='flex items-center my-2'>
                            <span className='w-3 h-3 rounded-full bg-[#989FE0] mr-4'></span>
                            <span>Electronics 8.1k</span>
                        </d1v>
                        <d1v className='flex items-center my-2'>
                            <span className='w-3 h-3 rounded-full bg-[#67C087] mr-4'></span>
                            <span>Women´s 10.9k</span>
                        </d1v>
                        <d1v className='flex items-center my-2'>
                            <span className='w-3 h-3 rounded-full bg-[#EFD654] mr-4'></span>
                            <span>Phones 3.0k</span>
                        </d1v>
                        <div className='flex items-center my-2'>
                            <span className='w-3 h-3 rounded-full bg-[#E0989D] mr-4'></span>
                            <span>Others 5.5k</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card max-sm:w-full max-xl:w-full p-6 w-[50vw] ml-3 max-sm:ml-0 min-h-[23vh]">
                <div className="card__header">
                    <h3 className="text-lg font-bold">Customer Gender</h3>
                </div>
                <div className="card__body flex items-center space-x-8">
                    <div className="flex items-center w-1/2 space-x-4">
                        <a href="#" className="button button--icon button--flat button--flat--soft scheme-primary">
                            <img src="img/male.svg" alt="" />
                        </a>
                        <div>
                            <span className="text-sm text-gray-500">Male</span>
                            <div className="text-2max-xl font-bold">40%</div>
                        </div>
                    </div>
                    <div className="flex items-center w-1/2 space-x-4">
                        <a href="#" className="button button--icon button--flat button--flat--soft scheme-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor" className="icon icon--ionicons"><title>Female</title><path d="M430 190c0-95.94-78.06-174-174-174S82 94.06 82 190c0 88.49 66.4 161.77 152 172.61V394h-36a22 22 0 000 44h36v36a22 22 0 0044 0v-36h36a22 22 0 000-44h-36v-31.39c85.6-10.84 152-84.12 152-172.61zm-304 0c0-71.68 58.32-130 130-130s130 58.32 130 130-58.32 130-130 130-130-58.32-130-130z"></path></svg>
                        </a>
                        <div>
                            <span className="text-sm text-gray-500">Female</span>
                            <div className="text-2max-xl font-bold">60%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dounts;