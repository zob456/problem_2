import React, { Dispatch, SetStateAction } from 'react'

interface Props {
    clear: Dispatch<SetStateAction<string>>
}

const ClearBtn = ({ clear }: Props) => {
    return (
        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '200px', height: '50px' }} onClick={() => clear('')}>
            CLEAR
        </button>
    )
}

export default ClearBtn
