import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.7);
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;

    .modal{
    max-width: 500px;
    position: fixed !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background: white !important;
    box-shadow: 0px 5px 15px rgba(0,0,0,0.5);
    border-radius: 10px;
    }

    .modal-content, .top-modal{
        padding-left: 20px;
        padding-right: 20px;
    }

    .top-modal{
        width: 100%;
        background: var(--primary-color);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
   
    .exit-btn{
        background: transparent;
        font-size: 30px;
        color: white;

    }

    .modal-content{
        padding-top: 30px;
        padding-bottom: 30px;
    }
    
    p{
        font-weight: bold;
    }


  

 

    

`;