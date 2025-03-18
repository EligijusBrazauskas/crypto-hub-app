import { BulbFilled, FundFilled, HomeFilled } from "@ant-design/icons";
import { Logo } from "components";
import { Route } from "enums";
import NavigationLink from "./common/NavigationLink";

export const Sidebar = () => (
  <div className="fixed hidden h-screen w-64 flex-col gap-10 bg-accent-blue px-8 pt-14 pb-10 sm:flex">
    <Logo />
    <div className="flex w-full flex-col gap-2">
      <NavigationLink pathTo={Route.Home} text="Home">
        <HomeFilled />
      </NavigationLink>
      <NavigationLink pathTo={Route.Currencies} text="Currencies">
        <FundFilled />
      </NavigationLink>
      <NavigationLink pathTo={Route.News} text="News">
        <BulbFilled />
      </NavigationLink>
    </div>
  </div>
);
