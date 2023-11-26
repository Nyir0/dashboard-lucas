
import { Hello } from './components/titlePage';
import TryNow from './components/TryNow';
import Dounts from './components/chartsDounts';

function  Main(){

    return(
        <main className='pl-[22vw] pt-[12vh] max-sm:px-2 max-sm:pt-20'>
            <Hello/>  
            <TryNow />              
            <Dounts/>
        </main>
    );
}

export default Main;

