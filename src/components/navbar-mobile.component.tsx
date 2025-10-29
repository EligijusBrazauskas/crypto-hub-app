import { BulbFilled, FundFilled, HomeFilled } from "@ant-design/icons";
import clsx from "clsx";
import { Flex } from "components/base";
import { NavigationLink } from "components/common";
import { ScrollPositionContext } from "context/scroll-position.context";
import { useContext } from "react";

export const NavbarMobile = () => {
  const { position } = useContext(ScrollPositionContext);

  return (
    <Flex
      className={clsx(
        "fixed bottom-0 z-40 w-full translate-y-full items-center justify-center gap-1 rounded-t-xl bg-accent-blue p-4 shadow-base transition duration-200 ease-in sm:hidden",
        {
          "translate-y-0": position > 0,
        },
      )}
    >
      <NavigationLink to="/">
        <HomeFilled />
      </NavigationLink>
      <NavigationLink to="currencies">
        <FundFilled />
      </NavigationLink>
      <NavigationLink to="news">
        <BulbFilled />
      </NavigationLink>
    </Flex>
  );
};
