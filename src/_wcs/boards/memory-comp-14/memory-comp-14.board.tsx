import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp14 } from '../../../components/memory-comp-14';

export default createBoard({
    name: 'MemoryComp14',
    Board: () => <MemoryComp14 />
});
