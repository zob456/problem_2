import React from 'react'
import { useRecoilValue } from 'recoil'
import { calcState } from '../atoms/atoms'

const Disp = () => {
    const state = useRecoilValue(calcState)
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '10px', width: '200px', height: '50px', backgroundColor: '#000', color: '#fff', fontWeight: 'bold' }}>
            {state.input}
        </div>
    )
}

export default Disp
