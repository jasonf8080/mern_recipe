import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width: 100%;
    position: relative;

    .bg{
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
        min-height: 100%;
        min-width: 100%;
        z-index: -1;
    }

    .register-form{
        width: 500px;
        min-height: 500px;
        box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        border-radius: 4px;
        background: white;
        z-index: 5;
    }

    h2{
        margin: 30px 0 20px;
    }

    .form-inputs, .submit-btn{
       width: 300px;
    }

    .form-input{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        min-width: 100%;
    }

    .form-input input{
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        max-width: 100%;
        padding: 5px 0;
        outline: none;
    }

    .form-input label{
        text-transform: capitalize;
    }

    .submit-btn{
        padding: 10px 0;
        border: none;
        background: #FF5252;
        color: white;
        border-radius: 4px;
        margin-top: 25px;
        margin-bottom: 20px;
    }

    .img-flex{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }

     .img-flex img{
        width: 35px;
        height: 35px;
        margin-right: 12px;
        transform: translateY(2px);
     }

    @media(max-width: 570px) {
        h2{
            font-size: 20px;
        }
      
        .register-form{
            width: 90%;
            height: 90%;
        }

    .form-inputs, .submit-btn{
       width: 90%;
    }

     .form-input, .toggle-register{
        font-size: 14px;
     }
    }



`