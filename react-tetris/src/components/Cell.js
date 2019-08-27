import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => ( <
    StyledCell type = { type }
    color = { TETROMINOS[type].color }
    />

)

//Cells won't rerender constantly with player movement when using (React.memo)

export default React.memo(Cell);