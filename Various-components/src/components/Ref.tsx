import { useRef, useState } from "react"

function Ref() {
    // let [number, setNumber] = useState(0)
    const ref = useRef(0)
    const inputRef1 = useRef<HTMLInputElement>(null)
    const inputRef2 = useRef<HTMLInputElement>(null)
    const inputRef3 = useRef<HTMLInputElement>(null)

    function handleClick1() {
        // setNumber(n => n+1)
        ref.current++
        if (inputRef1.current) {
            inputRef1.current.focus();
            inputRef1.current.style.backgroundColor = "yellow";
        }
        if (inputRef2.current) inputRef2.current.style.backgroundColor = "";
        if (inputRef3.current) inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2() {
        // setNumber(n => n+1)
        if (inputRef2.current) {
            inputRef2.current.focus();
            inputRef2.current.style.backgroundColor = "yellow";
        }
        if (inputRef1.current) inputRef1.current.style.backgroundColor = "";
        if (inputRef3.current) inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3() {
        // setNumber(n => n+1)
        ref.current++
        if (inputRef3.current) {
            inputRef3.current.focus();
            inputRef3.current.style.backgroundColor = "yellow";
        }
        if (inputRef1.current) inputRef1.current.style.backgroundColor = "";
        if (inputRef2.current) inputRef2.current.style.backgroundColor = "";
    }
  return (
    <>
    {/* <h2>{number}</h2> */}
    <h2>{ref.current}</h2>
  
    <input type="text" ref={inputRef1} />
    <button onClick={handleClick1}>Click me 1!</button>
    <input type="text" ref={inputRef2} />
    <button onClick={handleClick2}>Click me 2!</button>
    <input type="text" ref={inputRef3} />
    <button onClick={handleClick3}>Click me 3!</button>

    </>
  )
}

export default Ref