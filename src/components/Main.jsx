import React, {useState} from 'react'
import Success from './Success'
import Game from './Game'

function Main() {
    const [state, setState] = useState({
        round:1,
        success:false,
        key:0,
        dice1:1,
        dice2:1,
        dice3:1,
        complete:false
    })

    function randomizer(dice){
        const rand = Math.floor(Math.random() * 6)+1;
        // console.log(rand);
        // setState({ ...state, [dice]: rand });
        state[dice]=rand
        // console.log(state[dice], dice);
    }

    function roll(){
        // console.log("Roll");
        if(state.round<2)randomizer("dice1")
        randomizer("dice2")
        randomizer("dice3")
        if(state.round<2)
            setState({ ...state, round:state.round+1})
        else{
            if(state.dice1===state.dice2 && state.dice2===state.dice3)state.success=true
            state.complete=true
            setState({ ...state, round:state.round})
        }
    }

    function restart(){
        setState({
            round:1,
            success:false,
            key:0,
            dice1:1,
            dice2:1,
            dice3:1,
            complete:false
        })
    }

    const {round,success, key, dice1, dice2, dice3, complete}=state;
    const values = {round,success, key, dice1, dice2, dice3, complete}

    return (
        state.success ? 
            <Success /> :
            <Game 
                values={values}
                roll = {roll}
                restart={restart}
            />
    )
}

export default Main