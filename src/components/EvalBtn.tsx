import React from 'react'
import { useRecoilState } from 'recoil'
import { calcState } from '../atoms/atoms'
import { calcBtnStyles } from '../styles/index'

interface Props {
    opertator: string
}

const EvalBtn = ({ opertator }: Props) => {
    // consider renaming as naming conventions are getting confusing
    const [calc, setCalc] = useRecoilState(calcState)
    const handleClick = () => {
        setCalc(Object.assign({}, calc, {
            // removing eval warning
            // eslint-disable-next-line 
            input: (calc.input !== '') ? eval(calc.input) : calc.input
        }))
    }
    return (
        <button style={calcBtnStyles.btn} onClick={() => handleClick()}>
            {opertator}
        </button>
    )
}

export default EvalBtn
