import styled from 'styled-components';

export const Wrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 3vw;
    z-index: 99;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
   
    button{
        background: transparent;
        font-size: 40px;
        border: none;
        padding: 0;
        color: white;
        z-index: 99;
    }

    .nav-credentials{
        display: flex;
        align-items: center;
        background: transparent;
        padding: 6px 20px;
        border-radius: 5px;
        color: white;
    }
    
    .nav-credentials img{
        width: 32px;
        height: 32px;
        border-radius: 100%;
    }

    h4{
        font-size: 22px;
        margin-right: 10px;
        text-transform: capitalize;
    }

@media(max-width: 1200px) {
   
 }

 @media(max-width: 968px) {
   

 }

  @media(max-width: 768px) {
 
 }

 @media(max-width: 570px){
     padding: 12px 3vw;

     .nav-credentials{
        padding: 6px;
     }

    .nav-credentials img{
        width: 20px;
        height: 20px;
    }

    button{
        font-size: 28px;
    }

    h4{
        font-size: 16px;
        margin-right: 6px;
        text-transform: capitalize;
    }

    
 }



`;

