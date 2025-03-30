interface Props {
  statsArray: any[];
  title: string;
}

const CryptoDetailsCard = ({ statsArray, title }: Props) => (
  <div className="flex w-full basis-[50%] flex-col gap-[16px] rounded-[24px] bg-white p-[16px] shadow-large">
    <h1 className="text-center sm:text-left">{title}</h1>
    <div className="flex flex-col gap-[16px]">
      {statsArray.map(({ icon, title, value }, i) => (
        <div key={i} className="flex w-full justify-between">
          <div className="flex items-center gap-[8px] text-2xl text-secondary-ocean">
            {icon}
            <span>{title}</span>
          </div>
          <span>{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default CryptoDetailsCard;
