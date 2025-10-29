import { NavbarMobile, Sidebar } from "components";
import { Flex } from "components/base";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Flex className="min-h-screen flex-col bg-accent-blue">
      <Sidebar />
      <Flex className="flex-1 p-4 sm:ml-64 sm:pl-0">{children}</Flex>
    </Flex>
    <NavbarMobile />
  </>
);
