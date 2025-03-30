import { Sidebar } from "components";
import NavbarMobile from "components/NavbarMobile";
import { ReactNode, useContext } from "react";
import { ScrollPositionContext } from "../context/scroll-position.context";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const scrollPositionCtx = useContext(ScrollPositionContext);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-accent-blue">
        <Sidebar />
        <div className="flex flex-1 p-4 sm:ml-64 sm:pl-0">{children}</div>
      </div>
      <NavbarMobile scrollPosition={scrollPositionCtx.position} />
    </>
  );
};
