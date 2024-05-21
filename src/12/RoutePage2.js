import { useSearchParams, useLocation } from "react-router-dom"


export default function RoutePage2() {

  const fruits = ['🍎', '🍌'];
  const loc = useLocation();

  const [sParams] = useSearchParams();
  const item = sParams.get('item')

  return (
    <div>
      <h1>RoutePage2</h1>
      <div>
        
      </div>
    </div>
  )
}
