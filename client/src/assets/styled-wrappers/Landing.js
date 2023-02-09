import styled from 'styled-components';

export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: 1.25fr 1fr;
   max-width: 100%;
   max-height: 100vh;
   min-height: 100vh;
   overflow: hidden;


   .img-container{
    min-width: 100%;
    position: relative;
   }

   .img-container .overlay{
      background: rgba(0,0,0,0.4);
   }

   .img-container img{
    min-width: 100%;
    max-width: 100%;
    max-height: 100%;
    min-height: 100%;
    object-fit: cover;
   } 

   .content{
    padding: 100px 50px;
   }

   h1{
    font-size: 60px;
    font-weight: bold;
   }

   p{
    font-size: 18px;
    line-height: 2rem;
    margin-bottom: 2rem;
   }
   

   .btn{
    background: #FF5252;
    display: block;
    text-align: center;
    padding: 10px 30px;
    color: white;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: lighter;
    border-radius: 4px;
   }

     @media(max-width: 1200px){
      h1{
         font-size: 40px;
      }
     }
   
   @media(max-width: 968px){
      grid-template-columns: 1fr;
     
      .img-container{
         max-height: 60vh;
         min-height: 60vh;
      }

      .content{
         max-height: 40vh;
         min-height: 40vh;
         padding: 20px 0;
         text-align: center;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
      }

      h1{
         font-size: 25px;
      }

      p{
         font-size: 14px;
         max-width: 85%;
         margin: 0 auto;
          margin-top: 10px;
         margin-bottom: 10px;
      }

   .btn{
      max-width: 400px;
      min-width: 400px;
      padding: 10px 20px;
      font-size: 16px;
      margin: 0 auto;
      margin-bottom: 10px;
      margin-top: 10px;
   }
}

   @media(max-width: 768px){

       .img-container{
         max-height: 65vh;
         min-height: 65vh;
      }

      .content{
         max-height: 35vh;
         min-height: 35vh;
      }

   h1{
      margin-bottom: 10px;
   }
      

      p{
         display: none;
      }

   }
   @media(max-width: 570px){



   .btn{
      max-width: 270px;
      min-width: 270px;
   }

   }

`;