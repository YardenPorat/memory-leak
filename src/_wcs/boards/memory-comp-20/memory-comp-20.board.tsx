import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp20 } from '../../../components/memory-comp-20';

export default createBoard({
    name: 'MemoryComp20',
    Board: () => <MemoryComp20 />
});
