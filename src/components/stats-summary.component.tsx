import { formatStats } from "helpers";

interface StatsSummaryProps {
  stats: any;
}

export const StatsSummary = ({ stats }: StatsSummaryProps) => (
  <div className="flex flex-col gap-5 sm:gap-10">
    <h1 className="text-center sm:text-left">Global Crypto Statistics</h1>
    <div className="flex w-full flex-wrap gap-4">
      {formatStats(stats).map(({ id, stats }) => (
        <div
          key={id}
          className="flex flex-1 flex-col gap-4 text-center sm:text-left"
        >
          {stats.map(({ title, value }) => (
            <div key={title} className="flex flex-col">
              <span>{title}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);
