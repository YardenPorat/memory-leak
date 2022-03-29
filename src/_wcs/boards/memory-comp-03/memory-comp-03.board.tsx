import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp03 } from '../../../components/memory-comp-3';

export default createBoard({
    name: 'MemoryComp03',
    Board: () => <MemoryComp03 />
});
