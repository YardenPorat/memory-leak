import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp16 } from '../../../components/memory-comp-16';

export default createBoard({
    name: 'MemoryComp16',
    Board: () => <MemoryComp16 />
});
