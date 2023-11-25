
import { Grafico } from './components/charts';
import { Hello } from './components/titlePage';
import { Table } from './components/table';

function  Main(){

    return(
        <main>
            <Hello/>
                
            <Grafico/>
            <Table/>
        </main>
    );
}

export default Main;

