import React from 'react'
import { useRecoilState } from 'recoil'
import { calcState } from '../atoms/atoms'



const ClearBtn = () => {
    // useing state to avoid the assigned but never used warning
    // may want to consider swapping for selector rather than useRecoildState
    const [state, setState] = useRecoilState(calcState)
    const clear = () => {
        setState(Object.assign({}, state, {
            input: '',
            currentValue: '',
            prevValue: '',
            operator: ''
        }))
    }

    return (
        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '200px', height: '50px' }} onClick={() => clear()}>
            CLEAR
        </button>
    )
}

export default ClearBtn
