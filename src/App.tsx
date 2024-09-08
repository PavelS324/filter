import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FilterType = 'All' | 'RUBLS' | 'Dollars'

export type oneMoneyType = {
    banknots: string
    value: number
    number: string
}

function App() {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter,setFilter]=useState<FilterType>('All')

    let currentMoney
    if (filter==='All') {
        currentMoney=money
    } else {
        currentMoney=money.filter((filteredMoney) => filteredMoney.banknots===filter)
    }
    const onClickFilterHandler=(nameButton:FilterType)=>{
        console.log(nameButton)
        setFilter(nameButton)
    }

    return (
        NewComponent(currentMoney, onClickFilterHandler)
        // <>
        //     <ul>
        //         {currentMoney.map((oneMoney: oneMoneyType, index: number)=>{
        //             return(
        //                 <li key={index}>
        //                     <span> {oneMoney.banknots} </span>
        //                     <span> {oneMoney.value} </span>
        //                     <span> {oneMoney.number} </span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     <div style={{marginLeft: '35px'}}>
        //         <button onClick={()=>onClickFilterHandler('All')}>All</button>
        //         <button onClick={()=>onClickFilterHandler('RUBLS')}>RUBLS</button>
        //         <button onClick={()=>onClickFilterHandler('Dollars')}>Dollars</button>
        //     </div>
        // </>
    );
}

export default App;
