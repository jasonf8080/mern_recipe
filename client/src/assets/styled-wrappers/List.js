import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 70vw;
    margin: 0 auto;
 

    h2{
        margin-bottom: 20px;
        font-weight: bold;
    }

    .disabled-btn{
        background: #ccc;
        color: #777;
        cursor: not-allowed;
    }

    .list-items{
        border-top: 1px solid rgba(0,0,0,0.1);
        padding: 20px 0;
    }

    .list-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding: 15px 20px;
    }

    .list-item button{
        height: 40px;
        width: 40px;
        border-radius: 4px;
        font-size: 18px;
    }

    .checkbox{
         background: var(--primary-color);
         color: white;
    }

    .list-item-flex{
        display: flex;
        align-items: center;
    }


    .list-item-flex p{
        margin-left: 26px;
        text-transform: capitalize;
        font-size: 20px;
        //text-decoration: line-through;
    }

    input{
        text-transform: capitalize;
    }

    .checked{
        text-decoration: line-through;
    }

@media(max-width: 1200px) {
    
 }

 @media(max-width: 968px) {
   max-width: 90vw !important;



 }

  @media(max-width: 768px) {
   
 }

 @media(max-width: 570px){
     
    h2{
        font-size: 18px;
        margin-left: 12px;
    }

    .list-item{
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .list-item button{
        height: 30px;
        width: 30px;
        border-radius: 3px;
        font-size: 15px;
    }

    .list-item-flex p{
        margin-left: 18px;
        text-transform: capitalize;
        font-size: 16px;
        //text-decoration: line-through;
    }

 }
`