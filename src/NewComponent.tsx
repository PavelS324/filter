import React, {useState} from "react";
import {oneMoneyType} from "./App";


export function NewComponent(currentMoney: Array<oneMoneyType>, onClickFilterHandler: any) {

    return (
        <>
            <ul>
                {currentMoney.map((oneMoney: oneMoneyType, index: number)=>{
                    return(
                        <li key={index}>
                            <span> {oneMoney.banknots} </span>
                            <span> {oneMoney.value} </span>
                            <span> {oneMoney.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={()=>onClickFilterHandler('All')}>All</button>
                <button onClick={()=>onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={()=>onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    );
}