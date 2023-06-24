// export const useCounterState = () => useState<number>('counter', () => 0)

export const useCounterState = () => {
    const counter = useState<number>('counter', () => 0)
    
    const addCounter = () => {
        counter.value++
    }
    const subtractCounter = () => {
        if(counter.value > 0) counter.value--
    }
    const resetCounter = () => {
        counter.value = 0
    }

    return {
        counter: readonly(counter),
        addCounter: addCounter,
        subtractCounter: subtractCounter,
        resetCounter: resetCounter
    }
}
