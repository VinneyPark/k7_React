import Ball  from "./Ball" ;
import ButtonC from "../UI/ButtonC";
import { useState } from "react";

export default function Lotto() {
  const [tags, setTags] = useState() ;

  const handleOk = () => {
    let arr = [] ;

    while(arr.length < 7){
      let n = Math.floor(Math.random() * 45) + 1 ;

      if (!arr.includes(n)) arr.push(n)
    }

    let tm = arr.map(item => <Ball n={item} key={item} /> );

    //배열 중간 추가
    tm.splice(6, 0, <span className="text-3xl mx-2" key="sp">+</span>);
    // console.log(tags)

    setTags(tm) ;
  }
  return (
    <div className="w-full flex flex-col
                    justify-center items-center">
      <div className="m-10">
        {tags}
      </div>
      <div>
        <ButtonC caption={'확인'} bcolor={'orange'} handleClick={handleOk} />
      </div>
    </div>
  )
}

// import Ball from "./Ball";
// import ButtonC from "../UI/ButtonC";
// import { useState } from "react";

// export default function Lotto() {
//     const [tags, setTags] = useState();

//     const handleOK = () => {
        
//     while (arr.length < 7) {
//         let n = Math.floor(Math.random() * 45) + 1;

//         if (!arr.includes(n)) arr.push(n)
//     }
//     }

//     let tm = arr.map(item => <Ball n={item} key={item} />);


//     tm.splice(6, 0, <span className="text-3xl mx-2" key="sp">+</span>);

//     setTags(tm);

//     return (
//         <div className="w-full flex flex-col justify-center items-center">
//             <div className="m-10">
//                 {tags}
//             </div>
//             <div>
//             <ButtonC caption={'확인'} bcolor={'blue'} handleClick={handleOK} />
//             </div>
//         </div>
//     )
// }








// export default function Lotto() {
//   const [lNumbers, setLNumbers] = useState([]);

//   const generateLNumbers = () => {
//     let arr = [];

//     while (arr.length < 7) {
//       let n = Math.floor(Math.random() * 45) + 1;
//       if (!arr.includes(n)) arr.push(n);
//     }

//     setLNumbers(arr);
//   };

//   return (
//     <div>
//       <h2>로또 번호</h2>
//       <button onClick={generateLNumbers}>번호 생성</button>
//       <div>
//         {lNumbers.map((number, index) => (
//           <span key={index} className={`sp${Math.floor(number / 10)}`} onClick={() => console.log(`You clicked number ${number}`)}>
//             {number}
//           </span>
//         ))}
//         <span className="spplus">+</span>
//       </div>
//     </div>
//   );
// }