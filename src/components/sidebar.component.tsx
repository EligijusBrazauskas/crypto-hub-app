import { BulbFilled, FundFilled, HomeFilled } from "@ant-design/icons";
import { Logo } from "components";
import { Flex } from "components/base";
import { NavigationLink } from "components/common";

export const Sidebar = () => (
  <Flex className="fixed hidden h-screen w-64 flex-col gap-10 bg-accent-blue px-8 pt-14 pb-10 sm:flex">
    <Logo />
    <Flex className="w-full flex-col gap-2">
      <NavigationLink to="/">
        <Flex className="items-center gap-4">
          <HomeFilled />
          Home
        </Flex>
      </NavigationLink>
      <NavigationLink to="currencies">
        <Flex className="items-center gap-4">
          <FundFilled />
          Currencies
        </Flex>
      </NavigationLink>
      <NavigationLink to="news">
        <Flex className="items-center gap-4">
          <BulbFilled />
          News
        </Flex>
      </NavigationLink>
    </Flex>
  </Flex>
);
