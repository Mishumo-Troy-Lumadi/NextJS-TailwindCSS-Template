const { useState, useEffect, useCallback } = require("react");

function useStorage(objectStorage, key) {

    const [state, setState] = useState(undefined)

    useEffect(() => {
        const value = objectStorage.getItem(key)
        value && setState(JSON.parse(value))
    }, [objectStorage, key])

    const setValue = useCallback(
        (value) => {
            typeof window !== 'undefined' && objectStorage.setItem(key, JSON.stringify(value))
        }, [key, objectStorage]
    )

    return [state, setValue]
}

function useSessionStorage(key) {
    return useStorage(typeof window !== 'undefined' && sessionStorage, key)
}

function useLocalStorage(key) {
    return useStorage(typeof window !== 'undefined' && localStorage, key)
}

export {
    useStorage, useLocalStorage, useSessionStorage
}