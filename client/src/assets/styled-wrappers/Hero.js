import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    min-height: 75vh;

    .bg{
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        z-index: -1;
    }

    .overlay{
        background: rgba(0, 0, 0, 0.55);
    }

    .text{
        position: absolute;
        bottom: 10vh;
        left: 5vw;
        color: white;
    }

    .text h1{
         font-size: 60px;
         margin-bottom: 10px;
    }

    .text p{
        font-size: 22px;
    }


@media(max-width: 1200px) {
   
 }

 @media(max-width: 968px) {
   

 }

  @media(max-width: 768px) {
      .text h1{
        font-size: 40px;
      }

      .text p{
        font-size: 16px;
      }
 }

 @media(max-width: 570px){

      min-height: 65vh;


    .text h1{
        font-size: 28px;
      }

      .text p{
        font-size: 12px;
      }
 }



`;