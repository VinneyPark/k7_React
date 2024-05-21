import MyDiv2 from "./MyDiv2"

// import React from 'react' -> index.js에 있는거라 안써도 됨


export default function MyDiv() {
    const dname1 = 'vdiv1';
    const dname2 = 'vdiv2';
    const dname3 = 'vdiv3';

    return (
        <div className="flex flex-col m-9 p-8 w-2/3 h-2/3 text-black bg-gray-200">
            <div className="w-full">
            {dname1}
            </div>
            {/* <a href = "~~">에서 href는 속성이고 ~~는 값이다 */}
            <MyDiv2 dn1={dname1} dn2={dname2}/>    
        </div>
    )
}