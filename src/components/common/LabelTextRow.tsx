interface Props {
	label: string;
	text: string | number;
}

const LabelTextRow = ({ label, text }: Props) => {
	return (
		<div className='flex flex-col flex-1'>
			<p className='light-label'>{label}</p>
			<span className='number'>{text}</span>
		</div>
	);
};

export default LabelTextRow;
