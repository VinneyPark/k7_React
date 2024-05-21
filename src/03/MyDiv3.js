
export default function MyDiv3({dn1, dn2, dn3}) {
  return (
    <div className="flex flex-col p-2 m-5
    w-3/4 h-3/4 bg-lime-200 text-gray-700">
       {`${dn1} > ${dn2} > ${dn3}`}
    </div>
  )
}
