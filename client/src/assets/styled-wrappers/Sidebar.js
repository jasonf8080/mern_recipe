import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
    min-height: 100vh;
    min-width: 100vw;
    z-index: 99;

    .close-btn{
        position: absolute;
        top: 3vh;
        left: 3vw;
        font-size: 30px;
        background: transparent;
        color: white;
    }
    

    .sidebar-user{
        padding-top: 12vh;
        display: flex;
        align-items: center;
        font-size: 28px;
    }

    .sidebar-user img{
        width: 55px;
        height: 55px;
        border-radius: 100%;
        margin-right: 15px;
    }

    .sidebar-user a{
        font-size: 22px;
        color: white;
        margin: 0;
        margin-left: 20px;
        transform: translateY(1px);
    }

    .sidebar-links{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }

    .sidebar-links .link, li{
        text-transform: capitalize;
        margin-bottom: 15px;
        color: white;
        font-size: 25px;
        margin-left: 10px;
    }

@media(max-width: 1200px) {
   .sidebar{
    min-width: 50vw;
   }
   
 }

 @media(max-width: 968px) {
   

 }

  @media(max-width: 768px) {
   .sidebar-user img{
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }

    .sidebar-user{
        font-size: 20px;
    }

    .sidebar-user a{
        margin-left: 15px;
        font-size: 16px;
    }

    .sidebar-links .link{
        font-size: 18px;
    }
    
 }



 @media(max-width: 570px){
   .sidebar{
    min-width: 65vw;
    padding: 0 20px;
   }


   .close-btn{
    font-size: 24px;
   }


   .sidebar-user img{
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }

    .sidebar-user{
        font-size: 16px;
    }

    .sidebar-user a{
        margin-left: 10px;
        transform: translateY(0px);
        font-size: 13px;
    }

    .sidebar-links .link, li{
        font-size: 16px;
    }
    
 }



`;

