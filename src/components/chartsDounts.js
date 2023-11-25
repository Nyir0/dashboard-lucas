import './chartDoughnut';
function Dounts() {

    return (
        <div className="flex m-4 max-md:flex max-xl:flex-col max-md:space-x-8 max-xl:space-x-0 space-y-8 max-md:space-y-0 max-xl:space-y-8 items-start order-4 max-xl:order-none col-span-6 max-xl:col-span-1">
            <div className='flex flex-col card p-6 w-[50vw] mr-3 min-h-[37.5vh]'>
                <strong>Sales by Category</strong>
                <div className='flex'>
                    <canvas id="myChart" width="150" height="150" className='my-3'></canvas>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="card max-md:w-1/2 max-xl:w-full p-6 w-[50vw] ml-3 min-h-[37.5vh]">
                <div className="card__header">
                    <h3 className="text-lg font-bold">Customer Gender</h3>
                </div>
                <div className="card__body flex items-center space-x-8">
                    <div className="flex items-center w-1/2 space-x-4">
                        <a href="#" className="button button--icon button--flat button--flat--soft scheme-primary w-16 h-16">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor" className="icon icon--ionicons"><title>Male</title><path d="M442 48h-90a22 22 0 000 44h36.89l-60.39 60.39c-68.19-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 00246 0c62.57-62.58 67.43-161.35 14.57-229.54L420 123.11V160a22 22 0 0044 0V70a22 22 0 00-22-22zM313.92 381.92a130.13 130.13 0 01-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0 50.69 133.16 0 183.84z"></path></svg>
                        </a>
                        <div>
                            <span className="text-sm text-gray-500">Male</span>
                            <div className="text-2max-xl font-bold">40%</div>
                        </div>
                    </div>
                    <div className="flex items-center w-1/2 space-x-4">
                        <a href="#" className="button button--icon button--flat button--flat--soft scheme-primary w-16 h-16">
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