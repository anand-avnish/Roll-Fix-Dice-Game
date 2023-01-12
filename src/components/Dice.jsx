import React from 'react'

function Dice({point}) {
    // console.log(point);
    return (
        <div className="h-20 w-20 border-2 border-black flex flex-col justify-around content-around rounded-lg flex-wrap bg-[#999999]">
            {[...Array(point),].map((e, i) => <span key={i} className="h-1/3 w-1/3 flex justify-center items-center"><span className="h-3 w-3 bg-black rounded-full"></span></span>)}
        </div>
    )
}

export default Dice