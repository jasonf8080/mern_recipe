import styled from "styled-components";

const Wrapper = styled.div`
    min-height: 90vh;
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .error-center{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        max-width: 90%;
        margin: 0 auto;
    }

    .error-center h1{
        font-size: 60px;
        color: var(--primary-color);
        font-weight: bold;
    }

    .error-center h3{
        font-size: 30px;
        font-weight: bold;
        margin: 15px 0 30px;;
    }

    .back-home{
        color: var(--primary-color);
    }

    .icon{
        transform: translateY(3px);
        margin-right: 10px;
    }

    @media(max-width: 570px){
        .error-center{
            font-size: 40px;
        }

        .error-center h3{
        font-size: 18px;
    }

      .back-home{
      font-size: 14px;
    }

    }

`

export default Wrapper;