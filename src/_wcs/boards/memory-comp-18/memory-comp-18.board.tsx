import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp18 } from '../../../components/memory-comp-18';

export default createBoard({
    name: 'MemoryComp18',
    Board: () => <MemoryComp18 />
});
