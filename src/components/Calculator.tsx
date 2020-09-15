import React from 'react'

// components
import CalcBtn from './CalcBtn'
import ClearBtn from './ClearBtn'
import Disp from './Disp'
import FuncBtn from './FuncBtn'
import EvalBtn from './EvalBtn'

interface Props {
    btns: any[]
}

const Calculator = ({ btns }: Props) => {

    return (
        // using inline styles since flewWrap does not come in from TSS files well
        <div style={{
            display: 'flex',
            width: '200px',
            padding: '0px',
            margin: '0px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Disp />
            <div style={{ width: '150px' }}>
                {btns.map(btn => (
                    <CalcBtn num={btn} key={btn} />
                ))}
                <EvalBtn opertator={'='} />
            </div>
            <div style={{ width: '50px' }}>
                <FuncBtn opertator={'+'} />
                <FuncBtn opertator={'-'} />
                <FuncBtn opertator={'*'} />
                <FuncBtn opertator={'/'} />
            </div>
            <ClearBtn />
        </div>
    )
}

export default Calculator
