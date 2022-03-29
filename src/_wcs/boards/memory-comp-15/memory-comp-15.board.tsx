import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp15 } from '../../../components/memory-comp-15';

export default createBoard({
    name: 'MemoryComp15',
    Board: () => <MemoryComp15 />
});
