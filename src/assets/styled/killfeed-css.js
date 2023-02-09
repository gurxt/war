import styled from 'styled-components'

const KillfeedCSS = () => {
    const C = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90%;
        background: #2229;
        padding-top: 2%;
        padding-bottom: 2%;
    `

    const Kill = styled.div`
        display: flex;
        justify-content: center;
        height: 4%;
        width; 100%;
        font-size: 15px;
    `

    const Idx = styled.div`
        text-align: center;
        width: 20%;
        color: ${props => props.color};
        font-weight: bold;
    `

    const KColor = styled.div`
        text-align: center;
        width: 20%;
        color: ${props => props.color};
    `

    const Slain = styled.div`
        text-align: center;
        width: 20%;
        color: #f44;
        font-weight: bold;
    `

    return { C, Kill, Idx, KColor, Slain }
}

export default KillfeedCSS
