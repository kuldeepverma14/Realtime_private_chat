import { useState } from 'react'

function TableItemCheck() {

    const arr = [2, 4, 5, undefined,null]
    const [a, setA] = useState(arr)
    const [check, setCheck] = useState(null)


    function checkFunc(i) {
        if (check === i) {
            setCheck(null)
        } else {

            setCheck(i)
        }
    }

    const func = (i) => {
        const newarr = a.filter((item,index) => index !== i)
        setA(newarr)
    }

return (

    <>
        <ul className="flex flex-col items-center ">
            {a?.map((item, i) => {
                return (
                    <div key={i} className={`${check === i ? "bg-gray-400" : ""} flex items-center gap-10 mt-5`}>
                        <input type="checkbox" onChange={() => checkFunc(i)}
                            checked={check === i}
                        />
                        <li className="" >{item}  </li>
                        {check === i ? <button className="bg-red-500 p-2  rounded " onClick={() => func(i)}>delete</button> : null}
                    </div>
                )
            })}
        </ul>
    </>
)
}

export default TableItemCheck