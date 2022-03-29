import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp09 } from '../../../components/memory-comp-9';

export default createBoard({
    name: 'MemoryComp09',
    Board: () => <MemoryComp09 />
});
