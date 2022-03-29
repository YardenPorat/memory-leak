import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp08 } from '../../../components/memory-comp-8';

export default createBoard({
    name: 'MemoryComp08',
    Board: () => <MemoryComp08 />
});
