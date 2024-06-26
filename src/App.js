import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";
import './App.css';
// import logo from './logo.svg' ;
import MyClock from './02/MyClock'; 
import { RiHomeHeartFill } from "react-icons/ri";
// import MyDiv from './03/MyDiv'; 
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
// import FoodMain from  './07/FoodMain' ;
// import TrafficMain from './08/TrafficMain'; 
// import TrafficNav from './08_1/TrafficNav';
// import Traffic from './08_1/Traffic';
// import MyRef from './09/MyRef';
// import Gallery from './10/Gallery';
// import Festival from './11/Festival';
// import RouteMain from './12/RouteMain';

function App() {
  return ( 
    <BrowserRouter>
    <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-yellow-800'>
        <p>React Excersice</p>
        <ul>
          <li><Link to='/MyClock'>시계</Link></li>
          <li><Link to='/Lotto'>로로</Link></li>
          <li><Link to='/BoxOffice'>빡스오피쓰</Link></li>
        </ul>
        
        <p><RiHomeHeartFill className='text-3xl text-zinc-600' /></p>
      </header>
      <main className='grow w-full flex justify-center items-center overflow-y-auto '>
        {/* <div className='flex justify-center items-center w-1/3 h-1/2'>
          <img src={logo} alt="logo" />
        </div> */}
        <Routes>
        <Route path="/MyClock" element={<MyClock />}/>
        {/* <MyClock /> */}
        {/* <MyDiv /> */}
        {/* <MyList /> */}
        <Route path="/Lotto" element={<Lotto />}/>
        {/* <Lotto /> */}
        <Route path="/BoxOffice" element={<BoxOffice />}/>
        {/* <BoxOffice /> */}
        {/* <FoodMain /> */}
        {/* <TrafficMain /> */}
        {/* <TrafficNav /> */}
        {/* <Traffic /> */}
        {/* <MyRef /> */}
        {/* <Gallery /> */}
        {/* <Festival /> */}
        {/* <RouteMain/> */}
        </Routes>
      </main>
      <footer className='flex justify-center items-center h-20 text-2xl bg-emerald-950 text-red-50'>
        Vinney Park, K-Digital 7th Cohort
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
