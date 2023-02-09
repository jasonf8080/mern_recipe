import styled from "styled-components";

export const Wrapper = styled.div`

    margin-top: 10vh;
    
   .img-main-container{
        height: 70vh;
        max-width: 110%;
        margin: 0 auto;
        position: relative;
       
    }

   .img-main-container img{
        min-width: 100%;
        max-width: 100%;
        object-fit: cover;
        min-height: 100%;
        max-height: 100%;
    }


    .overlay{
        background: rgba(0,0,0,0.4);
    }

    h1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: lighter;
        color: white;
        text-transform: capitalize;
        font-size: 60px;
        text-shadow: 2px 2px black;
    }

    h2{
        margin: 70px 0px 20px;
        text-align: center;
    }
    
    @media(max-width: 1200px){

    }

    @media(max-width: 968px){
        
    }

    @media(max-width: 768px){
    .img-main-container{
        height: 65vh;
    }

    }

    @media(max-width: 570px){
         margin-top: 5vh;
    .img-main-container{
        height: 60vh;
     }

     h1{
        font-size: 32px;
     }
    }
`

