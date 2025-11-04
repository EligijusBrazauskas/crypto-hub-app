import { Flex } from "components/base";
import { FallbackText } from "components/common";
import { Stats } from "interfaces";

interface StatsSummaryProps {
  stats?: Stats;
}

export const StatsSummary = ({ stats }: StatsSummaryProps) => (
  <Flex className="flex-col gap-10">
    <h2 className="text-center sm:text-left">Global Crypto Statistics</h2>
    <Flex className="w-full flex-wrap gap-4">
      <Flex className="flex-1 flex-col gap-4 text-center sm:text-left">
        <Flex className="flex-col">
          <span className="font-semibold">Total Cryptocurrencies</span>
          <FallbackText className="text-sm">{stats?.total}</FallbackText>
        </Flex>
        <Flex className="flex-col">
          <span className="font-semibold">Total Exchanges</span>
          <FallbackText className="text-sm">{stats?.totalExchanges}</FallbackText>
        </Flex>
        <Flex className="flex-col">
          <span className="font-semibold">Total Market Cap</span>
          <FallbackText className="text-sm">{stats?.totalMarketCap}</FallbackText>
        </Flex>
      </Flex>
      <Flex className="flex-1 flex-col gap-4 text-center sm:text-left">
        <Flex className="flex-col">
          <span className="font-semibold">Total 24h Volume</span>
          <FallbackText className="text-sm">{stats?.total24hVolume}</FallbackText>
        </Flex>
        <Flex className="flex-col">
          <span className="font-semibold">Total Markets</span>
          <FallbackText className="text-sm">{stats?.totalMarkets}</FallbackText>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);
