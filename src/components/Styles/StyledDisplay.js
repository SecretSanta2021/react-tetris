import styled from 'styled-components';

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 2rem 0;
    padding: 2rem;
    border: .4rem solid #333;
    min-height: 3rem;
    width: 100%;
    border-radius: 2rem;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    background: #000;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;


`