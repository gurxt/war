import styled from 'styled-components'

const ScoreboardCSS = () => {
    const C = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10%;
        background: #4449;
    `
    
    const Rem = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5vh;
        font-weight: bold;
        color: ${props => props.color};
        width: 50%;
        height: 100%;
    `

    return { C, Rem }
}

export default ScoreboardCSS
