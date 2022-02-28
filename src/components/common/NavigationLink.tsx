import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
	isActive: boolean;
	pathTo: any;
	text: string;
	children: any;
}

const NavigationLink = ({ pathTo, text, isActive, children }: Props) => {
	return (
		<LinkWrapper isActive={isActive} className='w-full relative'>
			<Link
				to={pathTo}
				className={`flex justify-center items-center w-full p-[15px] rounded-[16px] ${
					isActive && 'bg-regularBlue'
				}`}
			>
				<div className='flex justify-start items-center gap-[16px] w-[105px] flex-wrap'>
					<div
						className={`flex justify-center items-center text-regular ${
							isActive ? 'text-white' : 'text-lightBlue'
						}`}
					>
						{children}
					</div>
					<div
						className={`flex items-center justify-start ${
							isActive ? 'text-white' : 'text-lightBlue'
						}`}
					>
						<span>{text}</span>
					</div>
				</div>
			</Link>
		</LinkWrapper>
	);
};

const LinkWrapper = styled.div<{ isActive: boolean }>`
	${(props) =>
		props.isActive &&
		`
    ::before {
      content: '';
      position: absolute;
      width: 7px;
      height: 30px;
      left: -30px;
      bottom: 13px;
      background-color: #0F22FD;
      border-radius: 0 16px 16px 0;
    }
  `}
`;

export default NavigationLink;
