import { BulbFilled, FundFilled, HomeFilled } from "@ant-design/icons";
import NavigationLink from "components/common/NavigationLink";
import styled from "styled-components";

interface Props {
  scrollPosition: number;
}

const NavbarMobile = ({ scrollPosition }: Props) => (
  <MobileNavWrapper
    scrollPosition={scrollPosition}
    className="fixed bottom-0 z-40 w-full bg-accent-blue px-[15px] py-[16px] shadow-base sm:hidden"
  >
    <div className="flex items-center justify-center gap-[1px]">
      <NavigationLink pathTo="/" text="Home" isMobile>
        <HomeFilled />
      </NavigationLink>
      <NavigationLink
        pathTo="currencies"
        text="Currencies"
        isMobile
      >
        <FundFilled />
      </NavigationLink>
      <NavigationLink pathTo="news" text="News" isMobile>
        <BulbFilled />
      </NavigationLink>
    </div>
  </MobileNavWrapper>
);

const MobileNavWrapper = styled.div<{ scrollPosition: number }>`
	border-radius: 14px 14px 0 0;
	transition: all 200ms ease-in;
	transform: ${({ scrollPosition }) =>
    scrollPosition > 0 ? "translateY(0)" : "translateY(100%)"};
`;

export default NavbarMobile;
