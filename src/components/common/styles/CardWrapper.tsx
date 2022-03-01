import styled from "styled-components";

export const CardWrapper = styled.div`
  transition: all 200ms ease-out;
	border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  

    :hover {
      transform: scale(1.05);
      box-shadow: rgba(168, 206, 255, 0.7) 0px 0px 5px;
      background-color: #F1F6FE;
      cursor: pointer;
    }
`