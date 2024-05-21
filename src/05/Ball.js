
export default function Ball({ n }) {
    // js오브젝트를 나타내는게 ":"를 사용해서 표현한다 ex) b0:
    const colorN = {
        'b0': 'bg-orange-500',
        'b1': 'bg-lime-600',
        'b2': 'bg-sky-600',
        'b3': 'bg-violet-600',
        'b4': 'bg-rose-600'
    }
    
    console.log("ball" , `inline-flex justify-center items-center w-16 h-16 
    rounded-full text-5xl bg-yellow-400 text-white ${colorN["b" + Math.floor(n / 10)]}`)
    return (
        <div className={`inline-flex justify-center items-center w-16 h-16 
      rounded-full text-5xl text-white ${colorN["b" + Math.floor(n / 10)]}`}>

            {n}
        </div>
    )
}
