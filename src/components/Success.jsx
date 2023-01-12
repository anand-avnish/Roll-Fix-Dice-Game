import React from 'react'
import Congo from "../images/congo.gif"

function Success() {
    return (
        <div>
            <div className="text-3xl mt-16 text-[#EEEEEE] flex items-center justify-center">
                <img src={Congo} className="w-1/4" alt="Congratulations" />
                Congratulations
                <img src={Congo} className="w-1/4" alt="Congratulations" />
            </div>
            
            {/* <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_kf95m1dj.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player> */}
        </div>
    )
}

export default Success