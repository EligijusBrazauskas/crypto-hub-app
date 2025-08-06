import { FallbackText } from "components/common";
import { Stats } from "interfaces";

interface StatsSummaryProps {
  stats?: Stats;
}

export const StatsSummary = ({ stats }: StatsSummaryProps) => (
  <div className="flex flex-col gap-10">
    <h2 className="text-center sm:text-left">Global Crypto Statistics</h2>
    <div className="flex w-full flex-wrap gap-4">
      <div className="flex flex-1 flex-col gap-4 text-center sm:text-left">
        <div className="flex flex-col">
          <span>Total Cryptocurrencies</span>
          <FallbackText>{stats?.total}</FallbackText>
        </div>
        <div className="flex flex-col">
          <span>Total Exchanges</span>
          <FallbackText>{stats?.totalExchanges}</FallbackText>
        </div>
        <div className="flex flex-col">
          <span>Total Market Cap</span>
          <FallbackText>{stats?.totalMarketCap}</FallbackText>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 text-center sm:text-left">
        <div className="flex flex-col">
          <span>Total 24h Volume</span>
          <FallbackText>{stats?.total24hVolume}</FallbackText>
        </div>
        <div className="flex flex-col">
          <span>Total Markets</span>
          <FallbackText>{stats?.totalMarkets}</FallbackText>
        </div>
      </div>
    </div>
  </div>
);
