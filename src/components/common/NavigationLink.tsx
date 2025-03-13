import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  pathTo: any;
  text: string;
  children: any;
  isMobile?: boolean;
}

const NavigationLink = ({ pathTo, text, children, isMobile }: Props) => {
  return (
    <LinkWrapper isActive={true} isMobile={isMobile} className='w-full relative'>
      <NavLink
        to={pathTo}
        className={({ isActive }) =>
          `flex justify-center items-center w-full p-[15px] rounded-[16px] transition-all ${isActive ? 'bg-regularBlue text-white link-active' : 'text-lightBlue'
          }`
        }
      >
        <div className='flex justify-start items-center sm:gap-[16px] sm:w-[105px]'>
          <div className='flex justify-center items-center text-lg'>{children}</div>
          <div className='flex items-center justify-start'>
            <span className='hidden sm:block'>{text}</span>
          </div>
        </div>
      </NavLink>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div<{ isActive: boolean; isMobile?: boolean }>`
	.link-active {
		${({ isActive, isMobile }) =>
    isActive &&
    !isMobile &&
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
