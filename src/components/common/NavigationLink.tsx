import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
	pathTo: any;
	text: string;
	children: any;
}

const NavigationLink = ({ pathTo, text, children }: Props) => {
	return (
		<LinkWrapper isActive={true} className='w-full relative'>
			<NavLink
				to={pathTo}
				className={({ isActive }) =>
					`flex justify-center items-center w-full p-[15px] rounded-[16px] transition-all ${
						isActive ? 'bg-regularBlue text-white link-active' : 'text-lightBlue'
					}`
				}
			>
				<div className='flex justify-start items-center gap-[16px] w-[105px] flex-wrap'>
					<div className='flex justify-center items-center text-regular'>{children}</div>
					<div className='flex items-center justify-start'>
						<span>{text}</span>
					</div>
				</div>
			</NavLink>
		</LinkWrapper>
	);
};

const LinkWrapper = styled.div<{ isActive: boolean }>`
	.link-active {
		${({ isActive }) =>
			isActive &&
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
	}
`;

export default NavigationLink;
