import { useEffect, useState } from 'react'

/**
 * `useToggle` is a custom hook that returns a state variable and a function to toggle
 * that state variable.
 * @param [defaultValue=false] - The default value of the toggle.
 * @returns An array with two elements. The first element is the state, the second
 * element is the toggle function.
 */
export default function useToggle(defaultValue = false) {
    const [state, setState] = useState(defaultValue)

    function toggle(value){
        setState(current=> typeof value === 'boolean'? value : !current)
    }

    return [state,toggle]
}

/**
 * It returns a state and a setState function that toggles the state when the user presses a key
 * combination that includes a key in the keys array.
 * @param [keys] - an array of keys that you want to toggle the state with.
 * @param [defaultValue=false] - The default value of the toggle.
 * @returns The return value of the function is an array with two elements. The first element is the
 * state of the toggle, and the second element is the function to toggle the state.
 */
function useKeyToggle(keys = [],defaultValue=false){
    const [state, setState] = useToggle(defaultValue)
    
    useEffect(() => {

        function handle(e) {
            e.preventDefault()
            setState()
        }
        
        function toggle(e){
            ((e.metakey || e.ctrlKey) && keys.includes(e.key)) && handle(e)
        }

        typeof window != 'undefined' && window.addEventListener('keydown',toggle)

         return () => {
            window.removeEventListener('keydown', toggle)
        }
    },[keys, setState])

    return [state,setState]
}

export {
    useKeyToggle
}