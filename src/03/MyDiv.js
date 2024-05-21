import MyDiv2 from "./MyDiv2"
// 1. useState를 import해서 동적 UI를 만든다
import { useState } from "react";
// import React from 'react' -> index.js에 있는거라 안써도 됨


export default function MyDiv() {
    //2. state변수 선언, 배열[]안에는 변경시킬값과 함수명이 들어간다. "set"을써서 바꿔야한다.
    const [n, setN] = useState(0); //react가 n이라는 변수를 감지하게된다. dom을 다시 그리게 된다, 초기값은 0으로 줬다.

    const dname1 = 'vdiv1';
    const dname2 = 'vdiv2'; 
    const dname3 = 'vdiv3';
    let cnt = 0;
    
    const handleCount = () => {
        // cnt++ 써도된는데 교수님은 별로 안좋아함
        cnt = cnt + 1;
        setN(n+1); 
        console.log("handleCount = ", cnt)
    } 


    return (
        <div className="flex flex-col m-9 p-8 w-2/3 h-2/3 text-black bg-gray-200">
             <div className="w-full border p-2 m-2 flex bg-slate-50 justify-end items-end">
                <span className="inline-flex mx-5" onClick={handleCount}>
                    👍
                </span>
                <span>
                    {n}
                </span>
             </div>
            <div className="w-full">
            {dname1}
            </div>
            {/* <a href = "~~">에서 href는 속성이고 ~~는 값이다 */}
            <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3}/>    
        </div>
    )
}