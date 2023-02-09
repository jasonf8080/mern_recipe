import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 100%;
    margin: 70px 5vw;

    .row-container{
        padding: 10px 0;
        position: relative;
    }

    .recipe-row{
        display: flex;
        max-width: 100%;
        overflow: scroll;
        padding: 30px 0;
        margin-bottom: 40px;
    }

    .title{
        text-transform: capitalize;
        font-size: 28px;
        font-weight: bold;
    }


    .view-more-btn-container{
        position: absolute;
        bottom: 0px;
        right: 30px;
    }

    .view-more-btn{
        position: relative;
        background: transparent;
        color: #aaa;
        font-size: 16px;
        font-family: Manrope;
        border: 1px solid var(--primary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        color: var(--primary-color);
        border-radius: 5px;
       
    }

    .view-more-btn p, .view-more-btn span{
        z-index: 5;
    }


    .view-more-btn span{
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: var(--primary-color);
        z-index: -1;
    }

    .view-more-btn:hover.view-more-btn span{
        width: 100%;
        transition: all 0.3s ease-out;
    }


     .view-more-btn:hover.view-more-btn p, .view-more-btn:hover.view-more-btn .icon{
       color: white;
    }



    .view-more-btn .icon{
        font-size: 20px;
        margin-left: 10px;
    }


@media(max-width: 1200px) {
   
 }

 @media(max-width: 968px) {
   

 }

  @media(max-width: 768px) {
     .title{
        font-size: 20px;
     }

     .view-more-btn{
        padding: 6px 12px;
     }

     .view-more-btn p{
        font-size: 13px;
     }

     .view-more-btn .icon{
        font-size: 16px;
     }
 }

 @media(max-width: 570px){

    .recipe-row{
        margin-bottom: 16px;
    }
  
    .view-more-btn-container{
        position: absolute;
        bottom: 0px;
        right: 5px;
    }
    .view-more-btn{
        padding: 4px 10px;
     }

     .view-more-btn p{
        font-size: 10px;
     }

     .view-more-btn .icon{
        font-size: 13px;
     }
 }



`;

    
