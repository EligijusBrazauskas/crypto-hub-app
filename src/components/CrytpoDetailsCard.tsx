interface Props {
	statsArray: any[];
	title: string;
}

const CryptoDetailsCard = ({ statsArray, title }: Props) => (
	<div className="w-full flex flex-col gap-[16px] basis-[50%] bg-white p-[16px] rounded-[24px] shadow-large">
		<h1 className="text-center sm:text-left">{title}</h1>
		<div className="flex flex-col gap-[16px]">
			{statsArray.map(({ icon, title, value }, i) => (
				<div key={i} className="flex justify-between w-full">
					<div className="flex items-center gap-[8px] text-secondary-ocean text-2xl">
						{icon}
						<span className="regular-label">{title}</span>
					</div>
					<span className="regular-label">{value}</span>
				</div>
			))}
		</div>
	</div>
);

export default CryptoDetailsCard;
