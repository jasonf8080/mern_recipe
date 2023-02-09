import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 90vw;
    margin: 0 auto;
    margin-top: 18vh;
    text-align: center;

    .recipe-img-container{
        width: 100%;
        max-width: 100%;
        height: 600px;
        border-radius: 10px;
        box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
        position: relative;
    }

    .overlay{
        min-height: 100%;
        background: rgba(0,0,0,0.2);
        border-radius: 10px;
    }

    .recipe-img{
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 10px;
        display: block;
    }

    .recipe-main-info, .recipe-reviews-container{
         transform: translateY(-150px);
         border-bottom: 2px solid #eee;
         padding-bottom: 40px;
    }

    .user-img{
        width: 270px;
        height: 270px;
        border-radius: 100%;
        border: 5px solid white;
        margin-bottom: 20px;
       
    }

    .recipe-title{
        margin-top: 10px;
        font-size: 50px;
        font-weight: bold;
    }

    .created-by span{
        text-decoration: underline;
    }

    .btns-flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .delete-recipe-btn{
        margin-left: 12px;
        background: red;
        display: flex;
        align-items: center;
    }

    .delete-recipe-btn span{
        transform: translateY(2px);
    }

    .recipe-additional-info, .recipe-ratings{
        display: grid;
        grid-template-columns: 1fr 2fr;
        column-gap: 30px;
        text-align: left;
        margin-top: 40px;
        padding-bottom: 40px;
        border-bottom: 2px solid #eee;
    }

    .recipe-additional-info, .recipe-ratings-container, .leave-review{
        transform: translateY(-150px);

    }

    .recipe-additional-info h2, .heading{
        text-transform: capitalize;
        font-weight: bold;
        font-size: 26px;
        margin-bottom: 30px;
    }

    .heading, .subheading{
        text-align: left !important;
    }

    .subheading{
        color: #333
    }


    .save-btn{
        margin: 15px 0;
    }

    .save-btn span{
       display: flex;
       align-items: center;
       color: white;
    }

    .save-btn span p{
        margin-left: 10px;
    }


    .list-item{
        display: flex;
        margin-bottom: 20px;
    }

    .list-item .number{
        min-width: 37px !important;
        max-width: 37px !important;
        min-height: 37px !important;
        max-height: 37px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        margin-right: 14px;
        background: var(--primary-color);
        color: white;
        transform: translateY(-10px);
    }

    .list-item p{
        font-size: 18px;
    }

    .recipe-ratings-container, .recipe-reviews-container{
        padding-top: 50px;
    }


    .ratings-data h1{
        font-weight: bold;
        font-size: 60px;
    }

    .stars span{
        font-size: 50px;
        color: orange;
    }

    .graph-item-container{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }

    .graph-item-container h3{
        display: flex;
        align-items: center;
    }

    .small-star{
        color: var(--primary-color);
        font-size: 20px;
        margin-left: 5px;
        transform: translateY(2px);
    }


    .graph-item{
        position: relative;
        width: 100%;
        background: #eee;
        border-radius: 10px;
        height: 20px;
        margin-left: 20px;
      overflow: hidden;
    }

    .graph-item-amount{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 50%;
        background: var(--primary-color);
    }

    .leave-review{
        padding-top: 50px;
       

    }

    .user-rating{
        display: flex;
        align-items: center;
        margin-top: 30px;
    }

    .user-rating img{
        height: 70px;
        width: 70px;
        border-radius: 100%;
        margin-right: 25px;
    }

    .user-rating .stars span{
        cursor: pointer;
    }

    .submit-rating{
        margin-left: 20px;
        font-size: 18px;
        background: transparent;
        text-decoration: underline;
        color: var(--primary-color);
        transform: translateY(-5px);
    }

    .input-container{
        width: 800px;
        margin: 20px 0 50px;
    } 

    .input-container textarea{
        margin-top: 40px;
        width: 100%;
        min-height: 30vh;
        border: none;
        box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
        border-radius: 20px;
        outline: none;
        padding: 30px;
    }

    .submit-btn{
        display: flex;
        justify-content: flex-start;
        margin-left: 20px;
        align-self: flex-start !important;
    }

    //Reviews 
    .review-item{
        box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
        padding: 40px;
        border-radius: 20px;
        margin-bottom: 20px;
        text-align: left;
        position: relative;
    }

    .review-user-info{
        display: flex;
        align-items: center;
    }

    .review-user-info h3{
        font-size: 20px;
    }

    //eventaully make global class with border-radius  .user-rounded
    .review-user-info img{
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin-right: 15px;
    }

    .review-item .stars{
        margin-bottom: 15px;
    }

    .review-item .star{
        font-size: 25px;
        text-align: left !important;
    }

   .delete-review-btn{
    background: transparent;
    font-family: Manrope;
    color: var(--primary-color);
    margin-left: 30px;
    padding: 0;
  }


@media(max-width: 1200px) {
  
 }

 @media(max-width: 968px) {
    .recipe-img-container{ 
        height: 450px;
    }

    .user-img{
        width: 230px;
        height: 230px;
    }

    .recipe-additional-info, .recipe-ratings{
        grid-template-columns: 1fr;
        row-gap: 30px;
    }

    .input-container, .input-container textarea{
        width: 100%;
    }
}

  @media(max-width: 768px) {
   
 }

 @media(max-width: 570px){

     margin-top: 12vh;

    .recipe-main-info, .recipe-reviews-container{
         transform: translateY(-100px);
    }

     .recipe-additional-info, .recipe-ratings-container, .leave-review{
        transform: translateY(-100px);
    }
    
     .recipe-img-container{ 
        height: 280px;
    }

    .user-img{
        width: 150px;
        height: 150px;
    }

    .recipe-title{
        font-size: 28px;
    }

    .created-by{
        font-size: 12px;
    }

    .recipe-additional-info h2, .heading{
        font-size: 20px;
    }

    .delete-recipe-btn{
        margin-left: 8px;
    }

    .list-item{
        display: flex;
        margin-bottom: 20px;
    }

    .list-item .number{
        min-width: 28px !important;
        max-width: 28px !important;
        min-height: 28px !important;
        max-height: 28px !important;
        margin-right: 10px;
        font-size: 13px;
    }

    .list-item p{
        font-size: 13px;
    }



  
    .ratings-data{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    


    .graph-item{
        margin-left: 10px;
    }

    .review-item{  
        padding: 25px;
        border-radius: 15px;
        margin-bottom: 15px;
    }


    .review-user-info h3{
        font-size: 15px;
    }

    .review-user-info img{
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }

    .review-item .stars{
        margin-bottom: 12px;
    }

    .review-item .star{
        font-size: 20px;
    }

   .delete-review-btn{
    margin-left: 10px;

  }

  .review-content{
    font-size: 13px;
  }

  .leave-review{
        padding-top: 50px;
    }

    .user-rating{
        display: flex;
        align-items: center;
        margin-top: 30px;
    }

    .user-rating img{
        height: 70px;
        width: 70px;
        border-radius: 100%;
        margin-right: 25px;
    }

    .user-rating .stars span{
        cursor: pointer;
    }

    .submit-rating{
        margin-left: 20px;
        font-size: 18px;
        background: transparent;
        text-decoration: underline;
        color: var(--primary-color);
        transform: translateY(-5px);
    }

    .input-container{
        width: 800px;
        margin: 20px 0 50px;
    } 

    .input-container textarea{
        margin-top: 40px;
        width: 100%;
        min-height: 30vh;
        border: none;
        box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
        border-radius: 20px;
        outline: none;
        padding: 30px;
    }

    .submit-btn{
        display: flex;
        justify-content: flex-start;
        margin-left: 20px;
        align-self: flex-start !important;
    }

    .subheading{
        font-size: 14px;
       
    }

    .user-rating img{
        height: 45px;
        width: 45px;
        margin-right: 15px;
    }

    .user-rating .stars span{
        cursor: pointer;
        font-size: 40px;
    }

    .submit-rating{
        margin-left: 20px;
        font-size: 18px;
        background: transparent;
        text-decoration: underline;
        color: var(--primary-color);
        transform: translateY(-5px);
    }

    .input-container, .input-container textarea{
        max-width: 100%;
         margin-top: 20px;
        margin-bottom: 20px;
       
    } 

   
    .submit-btn{
        justify-content: center;
        margin-left: 0px;
        align-self: center !important;
    }
    
  
 }

`;



export default Wrapper;