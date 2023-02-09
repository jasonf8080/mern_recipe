import styled from "styled-components";

const Wrapper = styled.div`
   
    max-width: 90%;
    margin: 0 auto;
     margin-top: 20vh;
     padding-bottom: 100px;

     .img-container{
        height: 75vh;
        margin-bottom: 50px;
        box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
        border-radius: 15px;
     }

     .img-container img{
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
         border-radius: 15px;
     }

     .upload-image{
        min-height: 100%;
     }



     .file-input{
        visibility: hidden;
     }

     .edit-btn{
        background: transparent;
        transform: translateY(-5vh);
     }

     .title-category, .desc{
        margin-bottom: 30px;
     }
    
    
     .title-category{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 40px;
        margin-top: 40px;
     }
     
     .title-category > * {
        min-width: 100%;
     }

     .title{
     }

     .category{
        transform: translateY(-10px);
     }

     select{
      padding: 10px 0;
     }

     .category p{
        text-transform: capitalize;
        font-size: 16px;
     }

    

     .ingredients{
        margin-bottom: 50px;
        border-bottom: 2px solid rgba(0,0,0,0.1);
        padding-bottom: 50px;
     }

    .add-ingredient{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .add-ingredient:first-of-type{
        margin-top: 40px;
    }

    .remove-item-btn, .add-item-btn{
        width: 50px !important;
        height: 50px !important;
        min-width: 50px !important;
        min-height: 50px !important;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        font-size: 25px;
    }

    .add-item-btn{
        margin-top: 20px;
    }

    .add-ingredient input{
        width: 100%;
        border: none;
        box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
        min-height: 50px !important;
        padding: 20px;
        border-radius: 10px;
        outline-color: var(--primary-color);
    }


   @media(max-width: 1200px){
      
   }
   @media(max-width: 968px){

   }
   @media(max-width: 768px){
      .img-container{
         height: 50vh;
      }
   }
   @media(max-width: 570px){
      margin-top: 15vh;

      .img-container{
         height: 40vh;
      }

      .title-category{
        grid-template-columns: 1fr;
        row-gap: 40px;
     }
     

     .ingredients{
        margin-bottom: 40px;
        border-bottom: 2px solid rgba(0,0,0,0.1);
        padding-bottom: 40px;
     }

    .add-ingredient{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }

    .add-ingredient:first-of-type{
        margin-top: 30px;
    }

    .remove-item-btn, .add-item-btn{
        margin-right: 15px;
        height: 40px;
        width: 40px;
        min-height: 40px;
        min-width: 40px;
        font-size: 18px;
    }

    .add-item-btn{
        margin-top: 20px;
    }

    .add-ingredient input{
        width: 100%;
        border: none;
        box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
        min-height: 50px !important;
        padding: 20px;
        border-radius: 10px;
    }

    h2{
      font-size: 20px;
    }

   }



`

export default Wrapper