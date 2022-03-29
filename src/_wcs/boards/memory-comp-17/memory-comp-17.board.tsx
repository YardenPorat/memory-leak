import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp17 } from '../../../components/memory-comp-17';

export default createBoard({
    name: 'MemoryComp17',
    Board: () => <MemoryComp17 />
});
