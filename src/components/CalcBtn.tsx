import React from 'react'
import { calcBtnStyles } from '../styles/index'

interface Props {
    num: number
}

const CalcBtn = ({ num }: Props) => {
    return (
        <div>
            <button style={calcBtnStyles.btn}>
                <span style={calcBtnStyles.num}>{num}</span>
            </button>
        </div>
    )
}

export default CalcBtn
