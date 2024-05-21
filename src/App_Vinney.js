
import './App.css';
// from 뒤에는 js의 경로를 쓰면됨
import { FcHome } from "react-icons/fc";
// import MyDiv from './03/MyDiv';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import BoxOffice from './06/BoxOffice';
import FoodMain from './07/FoodMain'

/*react는 컴포넌트를 만들어 원하는데 넣어 쓰는게 react임. react는 js파일을 만드는거다. 
function (= component)에서 return에서 던진 tag 한묶음을 가지고온다. .*/

function App() {
  return ( /* .js파일 이름은 반드시 대문자로 시작, return이 있어야 함, 
   return에는 우리가 알고있는 tag를 적을 예정, div, span 등등, return은 한묶음만 한다. 
   자식노드는 여러개있어도 부모노드는 반드시 한개여야한다.*/
    <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-yellow-800'>
        <p>header</p>
        <p>k-digital</p>
        <p><FcHome className='text-3xl text-zinc-600' /></p>
      </header>
      <main className='grow flex justify-center items-center'>
        {/* <MyDiv /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        <BoxOffice/>
      </main>
      <footer className='flex justify-center items-center h-20 text-2xl bg-emerald-950 text-red-50'>
        footer
      </footer>
    </div>
  );
}

export default App;
