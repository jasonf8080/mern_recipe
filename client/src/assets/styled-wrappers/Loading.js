import styled from 'styled-components';

export const Wrapper = styled.section`

background: white;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px;

.loader{
  border-radius: 20px;
  height: 40px;
  width: 500px;
  margin: 0 auto;
  border: 3px solid var(--primary-color);
  position: relative;
  overflow: hidden;
}

span{
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 100%;
 background: var(--primary-color);
 //animation: name duration timing-function delay iteration-count direction fill-mode;
 animation: customLoad 0.3s  infinite;

}

@keyframes customLoad {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}


@media(max-width: 570px) {
  .loader{
  border-radius: 15px;
  height: 30px;
  width: 80%;
}
}
`;