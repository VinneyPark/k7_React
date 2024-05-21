import box from "./BoxOffice.json";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeInfo from "./BoxOfficeInfo";

import { useState, useEffect } from "react";

export default function BoxOffice() {
  const [dailyList , setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();

  useEffect(() => {
    setDailyList(box.boxOfficeResult.dailyBoxOfficeList);
  }, []);

  useEffect(() => {
    setSelMv(dailyList[0]);
  } , [dailyList]);

    // //dailyList가 배열이니 필요한걸 맵을 돌면서 뽑으려면 map을 써야한다. array안에서 돌면서 movie이름을 찾으면된다. 
    // const dailyList = box.boxOfficeResult.dailyBoxOfficeList;
    // // dailylist중 10개를 뽑으려고함
    // //object에 접근 =  . 연산자
    // const tags = dailyList.map(item => <li key={item.movieNm}>{item.rank}  {item.movieNm}</li>);
    return (
      <div className="w-full h-full">
        <div className="w-full flex flex-col justify-start items-center mt-10">
          <table
            className="w-11/12 text-left text-sm font-light text-surface">
            <BoxOfficeThead />
            <BoxOfficeTbody dailyList = {dailyList} setSelMv ={setSelMv} />
          </table>
          {selMv && <BoxOfficeInfo selMv ={selMv} />}
        </div>
      </div>
    )
  }