import styled from "styled-components";
import { keyframes } from "styled-components";

const Loading = () => (
  <div className="flex flex-1 items-center justify-center rounded-[16px] bg-white">
    <Spinner className="h-[32px] w-[32px] rounded-[50%] border-4 border-regularBlue border-t-gray-200 border-solid" />
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
