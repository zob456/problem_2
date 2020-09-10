import React, { Dispatch, SetStateAction } from 'react'
import { calcBtnStyles } from '../styles/index'

interface Props {
    input: string
    num: string
    setInput: Dispatch<SetStateAction<string>>
    func: () => void
}

const CalcBtn = ({ input, num, setInput, func }: Props) => {
    const handleClick = (input: string) => {
        setInput(input + num)
        func()
    }
    return (
        <button style={calcBtnStyles.btn} onClick={() => handleClick(input)}>
            {num}
        </button>
    )
}

export default CalcBtn
