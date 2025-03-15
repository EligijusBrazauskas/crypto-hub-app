import { BulbFilled, FundFilled, HomeFilled } from '@ant-design/icons';
import NavigationLink from 'components/common/NavigationLink';
import { routes } from 'shared/router/routes';
import styled from 'styled-components';

interface Props {
  scrollPosition: number;
}

const NavbarMobile = ({ scrollPosition }: Props) => {
  return (
    <MobileNavWrapper
      scrollPosition={scrollPosition}
      className='w-full py-[16px] px-[15px] sm:hidden fixed bottom-0 bg-lightestBlue shadow-regular z-40'
    >
      <div className='flex items-center justify-center gap-[1px]'>
        <NavigationLink pathTo={routes.home} text='Home' isMobile>
          <HomeFilled />
        </NavigationLink>
        <NavigationLink pathTo={routes.cryptocurrencies} text='Currencies' isMobile>
          <FundFilled />
        </NavigationLink>
        <NavigationLink pathTo={routes.news} text='News' isMobile>
          <BulbFilled />
        </NavigationLink>
      </div>
    </MobileNavWrapper>
  );
};

const MobileNavWrapper = styled.div<{ scrollPosition: number }>`
	border-radius: 14px 14px 0 0;
	transition: all 200ms ease-in;
	transform: ${({ scrollPosition }) =>
    scrollPosition > 0 ? 'translateY(0)' : 'translateY(100%)'};
`;

export default NavbarMobile;
