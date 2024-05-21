import MyListData from "./MyListData.json";
import MyListItem from "./MyListItem";


export default function MyList() {
  console.log(MyListData)

  const tags = MyListData.map(item => <MyListItem key={item.title} //동적으로 만들때는 key값을 줘야한다.
                                                  title={item.title} 
                                                  imgUrl={item.imgUrl} 
                                                  content={item.content}/>)

    return (
        //https://tailwindcss.com/docs/grid-template-columns 에서 grid template확인
    <div className='w-full grid grid-cols-2 gap-4'> 
      {tags}
    </div>
  )
}
