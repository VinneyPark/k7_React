
import { Link } from "react-router-dom"

export default function RouteHome() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='w-full text-3xl font-bold'>
        RouteHome
      </h1>
      <div className='w-full grid grid-cols-2 m-10'>
        <div className='w-full flex flex-col justify-center'>
          <h2>Page1</h2>
          <ul>
            <li><Link to='/p1/🍎'>사과🍎</Link></li>
            <li><Link to='/p1/🍌'>바나나🍌</Link></li>
            <li><Link to='/p1/🥕'>당근🥕</Link></li>
          </ul>
        </div>
        <div className='w-full flex flex-col justify-center'>
          <h2>Page2</h2>
          <ul>
            <li><Link to='/p2?item=🍎'>사과🍎</Link></li>
            <li><Link to='/p2?item=🍌'>바나나🍌</Link></li>
            <li><Link to='/p2?item=🥕'>당근🥕</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
