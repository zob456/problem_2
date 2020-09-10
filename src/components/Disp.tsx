import React from 'react'

interface Props {
    input: string
}

const Disp = ({ input }: Props) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '10px', width: '200px', height: '50px', backgroundColor: '#000', color: '#fff', fontWeight: 'bold' }}>
            {input}
        </div>
    )
}

export default Disp
