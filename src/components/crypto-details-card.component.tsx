import { Flex } from "components/base";
import { HTMLAttributes, PropsWithChildren } from "react";

export const CryptoDetailsCard = ({ children }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <Flex className="w-full flex-col gap-4 rounded-xl bg-white p-4 shadow-large">
    {children}
  </Flex>
);
