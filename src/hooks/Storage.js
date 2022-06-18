const { useState, useEffect, useCallback } = require("react");

/**
 * It returns a state and a setter function that will store the state in the object
 * storage
 * @param objectStorage - The storage object to use. This can be either localStorage or
 * sessionStorage.
 * @param key - The key to store the value under.
 * @returns A function that takes two arguments, objectStorage and key, and returns an
 * array with two elements. The first element is the state, and the second element is a
 * function that takes a value and sets the state.
 */
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

/**
 * It returns a function that returns a value from sessionStorage if it exists, otherwise it returns
 * the default value.
 * @param key - The key to store the value under.
 * @returns The useStorage function is being returned.
 */
function useSessionStorage(key) {
    return useStorage(typeof window !== 'undefined' && sessionStorage, key)
}

/**
 * It returns a function that returns a value from localStorage if it exists, otherwise it returns
 * the default value.
 * @param key - The key to store the value under.
 * @returns The useStorage function is being returned.
 */
function useLocalStorage(key) {
    return useStorage(typeof window !== 'undefined' && localStorage, key)
}

export {
    useStorage, useLocalStorage, useSessionStorage
}