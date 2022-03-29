import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp01 } from '../../../components/memory-comp-1';

export default createBoard({
    name: 'MemoryComp01',
    Board: () => <MemoryComp01 />
});
