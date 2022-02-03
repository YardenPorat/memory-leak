import { createDemo } from '@wixc3/react-simulation';
import { MemoryComp } from '../components/memory-comp';
import React from 'react';

export default createDemo({
    name: 'MemoryComp Simulation',
    demo: () => <MemoryComp />,
    environmentProps: {
        windowHeight: 300,
        windowWidth: 300,
    },
});
