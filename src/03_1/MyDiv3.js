
export default function MyDiv3(probs) {
  return (
    <div className="flex flex-col p-2 m-5
    w-3/4 h-3/4 bg-lime-200 text-gray-700">
       {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`}
    </div>
  )
}
