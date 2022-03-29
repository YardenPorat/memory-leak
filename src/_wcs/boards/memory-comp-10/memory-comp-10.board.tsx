import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp10 } from '../../../components/memory-comp-10';

export default createBoard({
    name: 'MemoryComp10',
    Board: () => <MemoryComp10 />
});
