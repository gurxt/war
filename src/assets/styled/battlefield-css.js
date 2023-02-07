import styled from 'styled-components'

const BattlefieldCSS = () => {
    const C = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
    `

    const C1 = styled.div`
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 100%;
        background: #2229;
    `

    const C2 = styled.div`
        display: flex;
        flex-direction: column;
        width: 60%;
        height: 100%;
    `

    const C3 = styled.div`
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 100%;
        background: #2229;
    `

    const C1a = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10%;
        background: #4449;
    `

    const C1b = styled.div`
        width: 100%;
        height: 90%;
        background: #2229;
    `

    const C2a = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10%;
        background: #2229;
    `

    const C2b = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 90%;
        background: #4449;
    `

    const C3a = styled.div`
        width: 100%;
        height: 10%;
        background: #4449;
    `

    const C3b = styled.div`
        width: 100%;
        height: 90%;
        background: #2229;
    `

    const G = styled.div`
        display: flex;
        flex-wrap: wrap;
        height: 90%;
        width: 75%;
    `

    const Cell = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${props => props.xy_dim}%;
        width: ${props => props.xy_dim}%;
    `

    const Player = styled.div`
        width: 50%;
        height: 50%;
        border: 10% solid #fff;
        border-radius: ${props => props.bg == '#4449' ? '0%' : '50%'};
        background: ${props => props.bg};
    `

    const Empty = styled.div`
        width: 20%;
        height: 20%;
        border-radius: 50%;
        background: #777;
    `

    return { 
        C, Cell, Player, Empty, G,
        C1, C1a, C1b,
        C2, C2a, C2b,
        C3, C3a, C3b
    }
}

export default BattlefieldCSS
