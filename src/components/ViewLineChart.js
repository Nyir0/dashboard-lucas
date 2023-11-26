import "./LineChart";

function Linechart(){
    return(
        <div className="w-[40vw] max-sm:w-full h-[40vh] px-10 py-4 max-sm:px-8">
            <div className="flex mb-5">
                <d1v className='flex items-center mr-10'>
                    <span className='w-3 h-3 rounded-full bg-[#989FE0] mr-4'></span>
                    <span>Earnings</span>
                </d1v>
                <d1v className='flex items-center'>
                    <span className='w-3 h-3 rounded-full bg-[#b0c6e3] mr-4'></span>
                    <span>Expenses</span>
                </d1v>
            </div>
            <select>
                <option value="2023" key="">2023</option>
                <option value="2023" key="">2022</option>
                <option value="2023" key="">2021</option>
                <option value="2023" key="">2020</option>
            </select>
            <canvas id="myLineChart"></canvas>
            <div className="flex flex-col max-sm:items-center">
                <div className="flex pl-[1.4vw] max-sm:pl-0 text-[var(--color-text1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="text-primary-500 icon icon--feather w-[3vw] max-sm:w-[10vw]"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    <span className="text-m max-sm:text-[5vw]">Total Revenue</span>
                </div>
                <div className="flex max-sm:w-[55vw]">
                    <span className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="text-green-500 w-6 h-6 icon icon--feather"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        <span className="text-s max-sm:text-[5vw] text-green-500 font-semibold">3%</span>
                    </span>
                    <span className="flex text-g max-sm:text-[10vw] items-center text-[var(--color-text1)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="text-primary-500 icon icon--feather w-[3vw] max-sm:w-[10vw]"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        1,176
                    </span>
                </div>
            </div>
        </div>
    );
}
export default Linechart;