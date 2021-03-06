import React,{useState} from "react";
function useCalc(initialValue=0,stepValue){
    const [count,setCount] = useState(initialValue);

    const increment = ()=>{
        setCount(prevState => prevState+stepValue );
    }

    const decrement = ()=>{
        setCount(prevState => prevState-stepValue );
    }

    const reset = ()=>{
        setCount(initialValue );
    }

    return [count,increment,decrement,reset];
}
export default useCalc;