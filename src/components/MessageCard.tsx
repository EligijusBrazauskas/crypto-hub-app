interface Props {
	text?: string;
	children?: any;
}

const MessageCard = ({ text, children }: Props) => {
	return (
		<div className='w-full flex flex-col justify-center items-center p-[20px] rounded-[24px] bg-lightestBlue text-center'>
			<h2 className='text-black'>{text}</h2>
			<div className='text-[100px] text-black'>{children}</div>
		</div>
	);
};

export default MessageCard;
