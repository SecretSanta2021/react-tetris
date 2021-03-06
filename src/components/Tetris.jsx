import React from 'react';

import Stage from './Stage.jsx';
import Display from './Display.jsx';
import StartButton from './StartButton.jsx';
import { StyledTetrisWrapper, StyledTetris } from './Styles/StyledTetris.js';

import {createStage} from '../gameHelpers'


const Tetris = () => { 
    console.log(createStage());
        return(
            <StyledTetrisWrapper>
                <StyledTetris>
                    <Stage stage={createStage()} />
                    <aside>
                        <div>
                            {test}
                            <Display text="Score"/>
                            <Display text="Rows"/>
                            <Display text="Level"/>
                        </div>
                        <StartButton/>
                    </aside>
                </StyledTetris>
            </StyledTetrisWrapper>
        )
    
}

export default Tetris;