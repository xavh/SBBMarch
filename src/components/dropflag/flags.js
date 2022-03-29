import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import './flags.css';

export default function Flags() {
    const [select, setSelect] = useState('SE');
    const onSelect = (code) => setSelect(code);
    console.log('SELECT', select);
    return (
        <ReactFlagsSelect
            selected={select}
            onSelect={onSelect}
            countries={['JP', 'US', 'FR', 'TW', 'GB', 'DE', 'IT', 'BE', 'NL', 'ES', 'CH']}
            placeholder='Support'
        />
    );
}
