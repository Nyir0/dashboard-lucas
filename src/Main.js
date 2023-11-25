
import { Hello } from './components/titlePage';
import TryNow from './components/TryNow';

function  Main(){

    return(
        <main className='pl-[22vw] pt-[12vh]'>
            <Hello/>  
            <TryNow />              
        </main>
    );
}

export default Main;

