import styled from 'styled-components'

const BattlefieldCSS = () => {
    const B = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
    `

    const B1 = styled.div`
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 100%;
        background: #999;
    `

    const B2 = styled.div`
        display: flex;
        flex-direction: column;
        width: 60%;
        height: 100%;
    `

    const B3 = styled.div`
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 100%;
        background: #2229;
    `

    const B1a = styled.div`
        width: 100%;
        height: 10%;
        background: #4449;
    `

    const B2a = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10%;
        background: #2229;
    `

    const B2b = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 90%;
        background: #4449;
    `

    const B3a = styled.div`
        width: 100%;
        height: 10%;
        background: #4449;
    `

    const B3b = styled.div`
        width: 100%;
        height: 90%;
        background: #2229;
    `

    const Alive = styled.div`
        font-size: 20;
        font-weight: bold;
        color: #fff;
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
        B, Cell, Player, Empty, G, Alive, 
        B1, B1a,
        B2, B2a, B2b,
        B3, B3a, B3b
    }
}

export default BattlefieldCSS
