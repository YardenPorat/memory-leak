import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp05 } from '../../../components/memory-comp-5';

export default createBoard({
    name: 'MemoryComp05',
    Board: () => <MemoryComp05 />
});
