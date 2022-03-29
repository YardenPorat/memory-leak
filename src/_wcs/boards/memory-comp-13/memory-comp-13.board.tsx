import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp13 } from '../../../components/memory-comp-13';

export default createBoard({
    name: 'MemoryComp13',
    Board: () => <MemoryComp13 />
});
