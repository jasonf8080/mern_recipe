import styled from "styled-components";

const Wrapper = styled.div`
     max-width: 90vw;
    margin: 0 auto;
    margin-top: 18vh;
    
    

    .tabs{
        margin: 70px 0;
        display: flex;
        border-bottom: 2px solid rgba(0,0,0,0.1);
        justify-content: space-around;
        position: relative;
    }

    

    .tabs p {
        padding: 20px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        cursor: pointer;
    }

    .tabs p span{
        margin-left: 15px;
        font-size: 30px;
        transform: translateY(4px);
    }

    .tab-selector{
        position: absolute;
        bottom: -2px;
        left: 50%;
        width: 50%;
        height: 5px !important;
        background: var(--primary-color);
        transition: all 0.5s;
    }

    .tabs-recipes .tab-selector{
        left: 0%;
    }


    .create-a-recipe{//move to index css along with
        background-color: white;
        box-shadow: 0px 5px 15px rgba(0,0,0,0.1);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

     .create-a-recipe p{
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 20px;
     }

     .add-btn{
        background: #f6a4a4de;
        color: var(--primary-color);
        padding: 10px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
     }

     @media(max-width: 570px){
        .tabs{
            margin: 20px 0;
        }
        .tabs p{
            font-size: 14px;
        }

        .tabs p span{
            font-size: 16px;
            margin-left: 8px;
        }
     }


`

export default Wrapper;