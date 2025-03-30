import { Stats } from "interfaces";

interface StatsSummaryProps {
  stats: Stats;
}

export const StatsSummary = ({ stats }: StatsSummaryProps) => (
  <div className="flex flex-col gap-5 sm:gap-10">
    <h1 className="text-center sm:text-left">Global Crypto Statistics</h1>
    <div className="flex w-full flex-wrap gap-4">
      <div className="flex flex-1 flex-col gap-4 text-center sm:text-left">
        <div className="flex flex-col">
          <span>Total Cryptocurrencies</span>
          <span>{stats?.total}</span>
        </div>
        <div className="flex flex-col">
          <span>Total Exchanges</span>
          <span>{stats?.totalExchanges}</span>
        </div>
        <div className="flex flex-col">
          <span>Total Market Cap</span>
          <span>{stats?.totalMarketCap}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 text-center sm:text-left">
        <div className="flex flex-col">
          <span>Total 24h Volume</span>
          <span>{stats?.total24hVolume}</span>
        </div>
        <div className="flex flex-col">
          <span>Total Markets</span>
          <span>{stats?.totalMarkets}</span>
        </div>
      </div>
    </div>
  </div>
);
