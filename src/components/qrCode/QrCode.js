import React from 'react';
import qrCode from '../../images/qrCode.png'

export default function QrCode() {
    return (
        <img className='qrCode scale-95 rounded-2xl' src={ qrCode } alt=''/>
    )
}