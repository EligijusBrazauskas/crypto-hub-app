import styled from "styled-components";
import { keyframes } from "styled-components";

const Loading = () => (
	<div className="w-full h-screen flex justify-center items-center bg-white rounded-[16px]">
		<Spinner className="w-[32px] h-[32px] rounded-[50%] border-4 border-regularBlue border-solid border-t-gray-200" />
	</div>
);

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
	animation: ${spin} 700ms infinite;
`;

export default Loading;
