import React, { SetStateAction, Dispatch } from 'react'

// components
import CalcBtn from './CalcBtn'
import ClearBtn from './ClearBtn'
import Disp from './Disp'

interface Props {
    btns: any[],
    setInput: Dispatch<SetStateAction<string>>
    input: string
    funcs: any[]
    clear: Dispatch<SetStateAction<string>>
}

const Calculator = ({ btns, setInput, input, funcs, clear }: Props) => {

    const funcPass = (btn: string) => {
        switch (btn) {
            case '+':
                return funcs[0]

            case '-':
                return funcs[1]

            case '*':
                return funcs[2]

            case '/':
                return funcs[3]

            case '.':
                return funcs[4]

            case '=':
                return funcs[5]

            default:
                break;

        }
    }
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
            <Disp input={input} />
            {btns.map(btn => (
                <CalcBtn func={() => funcPass(btn)} input={input} setInput={setInput} num={btn} key={btn} />
            ))}
            <ClearBtn clear={clear} />
        </div>
    )
}

export default Calculator
