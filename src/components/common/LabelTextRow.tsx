interface Props {
  label: string;
  text: string | number;
}

const LabelTextRow = ({ label, text }: Props) => {
  return (
    <div className='flex flex-col flex-1'>
      <p className=''>{label}</p>
      <span>{text}</span>
    </div>
  );
};

export default LabelTextRow;
