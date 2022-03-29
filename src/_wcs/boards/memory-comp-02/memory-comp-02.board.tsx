import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp02 } from '../../../components/memory-comp-2';

export default createBoard({
    name: 'MemoryComp02',
    Board: () => <MemoryComp02 />
});
