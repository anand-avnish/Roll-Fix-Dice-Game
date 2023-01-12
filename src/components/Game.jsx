import React from 'react'
import Dice from './Dice'

function Game({values, roll, restart}) {

    const Roll = e => {
        e.preventDefault();
        roll();
    }

    const Restart = e => {
        e.preventDefault();
        restart();
    }

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="p-3 mt-10 text-2xl w-max bg-[#EEEEEE]">Round {values.round}</h1>
            </div>
            <hr className='h-1 bg-[#EEEEEE]'/>
            <div className="flex justify-around mt-10">
                <Dice point={values.dice1} />
                <Dice point={values.dice2} />
                <Dice point={values.dice3} />
            </div>
            {values.complete?
                <button className="p-3 bg-red-500 border-2 border-black shadow-md shadow-red-400 text-[#EEEEEE] mt-10" onClick={Restart}>Restart</button>:
                <button className="p-3 bg-[#EEEEEE] border-2 border-black text-[#222222] mt-10 shadow-md shadow-[#999999]" onClick={Roll}>Roll Dice</button>}
        </div>
    )
}

export default Game