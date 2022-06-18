import { Switch } from '@headlessui/react'
import { useKeyToggle } from '@hooks/Toggle'

function Toggle({ keys=[],reader='toggle',onChange=()=>{}}) {

    const [toggle, setToggle] = useKeyToggle(keys)

    function handleChange(e){
        setToggle()
        onChange(e)
    }

    return (

        <Switch
            checked={toggle}
            onChange={handleChange}
            className={`${toggle ? 'bg-blue-500' : 'bg-neutral-500'}
          relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <span className="sr-only">{reader}</span>
            <span
                aria-hidden="true"
                className={`${toggle ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>

    );
}

export default Toggle;