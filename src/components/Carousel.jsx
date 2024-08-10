import { useEffect, useState } from 'react'

const arr = ["https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]

function ImageSlider() {
    const [index, setIndex] = useState(0)
    function left() {
        index === 0 ? setIndex(arr.length - 1) : setIndex(index - 1)

    }
    function right() {
        index === (arr.length - 1) ? setIndex(0) : setIndex(index + 1)

    }

    useEffect(() => {
        // always clear timeout 
        const clear = setTimeout(() => {
            right()
        }, 2000)
        return () => {
            clearTimeout(clear)
        }
    }, [index])
    return (
        <>
            <button onClick={left}>left</button>
            {/* below method downloads all the images one by one when u click */}
            {/* <img className='m-10 w-96 h-96' src={arr[index]} alt="not" /> */}

            {/* below method downloads all the images once when u refresh the page */}
            {arr.map((item, i) => <img key={item} className={'m-10 w-96 h-96 ' + (index === i ? "block" : "hidden")} src={item} alt="not" />)}
            <button onClick={right}>Right</button>
        </>
    )
}

export default ImageSlider