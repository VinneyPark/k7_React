import {useState} from "react";
import {useEffect} from "react";

export default function MyListItem({title, imgUrl, content}) {
  const [cnt, setCnt ] = useState(0);

  const handleClick = () => {
    setCnt(cnt + 1);
    console.log(title, 'cnt= ', cnt);
  }

  //컴포넌트 생성시 최초 한번만 실행
  useEffect(()=>{
    console.log(title, '생성')
  }, []);

  // state변수가 변경
  useEffect(() => {
    console.log(title, '변경 cnt = ', cnt);
  }, [cnt]);

  // 컴포넌트가 변경되면 항상 실행
  useEffect(()=>{
    console.log(title, '변경됨')
  })

  return (
    <div className="flex w-full justify-center items-center p-2 bg-slate-200">
        <div className='flex w-1/3'>
            <img src={imgUrl} alt={title} />
        </div>
        <div className="flex flex-col w-2/3 m-2 p-2">
            <div className="font-bold h-12">
                {title}
            </div>
            <div className='h-24'>
                {content}
            </div>
            <div className="flex justify-end font-bold items-center space-x-1 flex-grow">
                <span onClick={handleClick}>👍</span>
                <span>좋아요</span>
                <span>{cnt}</span>
            </div>
        </div>
    </div>
  )
}
