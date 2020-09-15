import React from 'react'
import { useRecoilState } from 'recoil'
import { calcState } from '../atoms/atoms'
import { calcBtnStyles } from '../styles/index'

interface Props {
    num: string
}

const CalcBtn = ({ num }: Props) => {
    const [input, setInput] = useRecoilState(calcState)

    const handleClick = () => {
        setInput(Object.assign({}, input, {
            input: input.input + num
        }))
    }
    return (
        <button style={calcBtnStyles.btn} onClick={() => handleClick()}>
            {num}
        </button>
    )
}

export default CalcBtn
