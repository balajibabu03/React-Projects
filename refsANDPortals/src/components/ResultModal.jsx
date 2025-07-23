import { forwardRef, useImperativeHandle, useRef } from "react"

let ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
  let dialog = useRef()
  useImperativeHandle(ref, ()=>{
    return {
      open(){
        dialog.current.showModal();
      }   
    }
  })

  return (
    <dialog ref={dialog} className="result-modal">
        <h2>You {result}</h2>
        <p>The target time is <strong>{targetTime} secounds.</strong></p>
        <p>You stopped the timer with <strong>X secounds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
  )
}
)

export default ResultModal
