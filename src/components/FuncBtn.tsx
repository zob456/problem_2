import React from 'react'
import { useRecoilState } from 'recoil'
import { calcState } from '../atoms/atoms'
import { calcBtnStyles } from '../styles/index'

interface Props {
    opertator: string
}

const FuncBtn = ({ opertator }: Props) => {
    // consider renaming as naming conventions are getting confusing
    const [calc, setCalc] = useRecoilState(calcState)
    const handleClick = () => {
        setCalc(Object.assign({}, calc, {
            prevValue: calc.input,
            opertator: opertator,
            input: calc.input + opertator,
        }))
    }
    return (
        <button style={calcBtnStyles.btn} onClick={() => handleClick()}>
            {opertator}
        </button>
    )
}

export default FuncBtn
