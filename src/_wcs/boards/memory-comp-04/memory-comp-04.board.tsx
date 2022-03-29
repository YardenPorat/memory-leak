import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp04 } from '../../../components/memory-comp-4';

export default createBoard({
    name: 'MemoryComp04',
    Board: () => <MemoryComp04 />
});
