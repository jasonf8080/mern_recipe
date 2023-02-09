import styled from "styled-components";

export const Wrapper = styled.div`
   border: 2px solid white;
    max-width: 70vw !important;
  
    .profile-container{
        margin-top: 20vh;
    }


    h1{
        margin-left: 20px;
        margin-bottom: 70px;
        font-weight: 700;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    .form-flex{
        display: grid;
        grid-template-columns: 1.5fr 1.75fr;
        column-gap: 70px;
        row-gap: 40px;
    }

    .form-flex > *{
        max-width: 100%;
    }

    .img-container{
        min-width: 100%;
        position: relative;
    }

    .img-container img{
        min-width: 100%;
        max-width: 100%;
        object-fit: cover;
        border-radius: 100%;
        max-height: 400px;
        min-height: 400px;
    }

    .file-input{
        visibility: hidden;
        position: absolute;
    }

    .upload-img{
        position: absolute;
        top: 0px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        border-radius: 100%;
        padding: 25px;
        font-size: 20px;
    }

    .upload-img > * {
        font-size: 30px;
    }

    

     .form-input{
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        min-width: 100%;
    }

    .form-input input{
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        max-width: 100%;
        padding: 5px 0;
        outline: none;
    }

    .form-input label{
        text-transform: capitalize;
        color: var(--primary-color);
        font-weight: 500;
    }

    .save-changes-btn{
        margin-top: 30px;
    }

    .save-changes-btn:disabled{
        background: #999;
        background: #888;
        cursor: not-allowed;
    }

@media(max-width: 1200px) {
    max-width: 90vw !important;
   
 }

 @media(max-width: 968px) {


   .form-flex{
        grid-template-columns: 1fr;
    }

     .img-container{
        max-width: 400px;
        min-width: 400px;
        margin: 0 auto;
    }

    .img-container img{
        max-height: 400px;
        min-height: 400px;
    }

    .form-input{
        min-width: 70%;
        max-width: 70%;
        margin: 0 auto;
        margin-bottom: 20px;
    }



    .save-changes-btn{
        display: block;
        margin: 0 auto;
        margin-top: 30px;
    }

 }

  @media(max-width: 768px) {
    h1{
       font-size: 26px;
    }
 }

 @media(max-width: 570px){

     h1{
        font-size: 20px;
     }
    .img-container{
        max-width: 270px;
        min-width: 270px;
        margin: 0 auto;
    }

    .img-container img{
        max-height: 270px;
        min-height: 270px;
    }

    .form-input{
        min-width: 70%;
        max-width: 70%;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .upload-img{
        padding: 15px;
        right: 0px;
    }


    
 }

`