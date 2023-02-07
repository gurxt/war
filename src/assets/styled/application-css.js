import styled from 'styled-components'

const AppCSS = () => {
    const C = styled.div`
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background: #444;
    `
    return { C }
}

export default AppCSS
