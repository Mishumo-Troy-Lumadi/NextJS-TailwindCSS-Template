const { useState, useEffect, useCallback } = require("react");

function useStorage(objectStorage, key) {

    const [state, setState] = useState(null)

    useEffect(() => {
        const value = objectStorage.getItem(key)
        item && setState(JSON.parse(value))
    }, [objectStorage, key])

    const setValue = useCallback(
        (value) => {
            objectStorage.setItem(key, JSON.stringify(value))
            setState(value)
        }, [key, objectStorage]
    )


    return [state, setValue]
}

function useSessionStorage(key) {
    return useStorage(sessionStorage, key)
}

function useLocalStorage(key) {
    return useStorage(localStorage, key)
}

export {
    useStorage, useLocalStorage, useSessionStorage
}