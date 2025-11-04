import {
  CheckOutlined,
  DollarCircleFilled, ExclamationCircleFilled, ProfileFilled, ProjectFilled, StarFilled, StopOutlined, ThunderboltFilled
} from "@ant-design/icons";
import { Coin } from "interfaces";
import millify from "millify";

export const statsDefault = (coin?: Coin) => [
  {
    title: "Price in USD",
    value: `$ ${coin?.price && millify(+coin?.price)}`,
    icon: <DollarCircleFilled />,
  },
  { title: "Rank", value: coin?.rank, icon: <StarFilled /> },
  {
    title: "Market Cap",
    value: `$ ${coin?.marketCap && millify(+coin?.marketCap)}`,
    icon: <DollarCircleFilled />,
  },
  {
    title: "All-time-high (daily avg.)",
    value: `$ ${coin?.allTimeHigh?.price && millify(+coin?.allTimeHigh?.price)}`,
    icon: <ThunderboltFilled />,
  },
]

export const genericStatsDefault = (coin?: Coin) => [
  {
    title: "Number Of Markets",
    value: coin?.numberOfMarkets,
    icon: <ProjectFilled />,
  },
  {
    title: "Number Of Exchanges",
    value: coin?.numberOfExchanges,
    icon: <ProfileFilled />,
  },
  {
    title: "Aprroved Supply",
    value: coin?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />,
    icon: <ExclamationCircleFilled />,
  },
  {
    title: "Total Supply",
    value: `${coin?.supply?.total && millify(+coin?.supply?.total)}`,
    icon: <DollarCircleFilled />,
  },
  {
    title: "Circulating Supply",
    value: `${coin?.supply?.circulating && millify(+coin?.supply?.circulating)}`,
    icon: <DollarCircleFilled />,
  },
]