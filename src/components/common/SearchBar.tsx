import styled from "styled-components";

interface Props {
	getSearchValue: (value: any) => void;
	placeholder?: string;
}

const SearchBar = ({ getSearchValue, placeholder = "search.." }: Props) => {
	const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		getSearchValue(event.target.value);
	};

	return (
		<InputWrapper className="w-full sm:w-auto">
			<input
				className="input bg-white px-[16px] py-[8px] rounded-[4px] text-sm  w-full sm:w-[140px]"
				placeholder={placeholder}
				onChange={handleSearchInput}
			/>
		</InputWrapper>
	);
};

const InputWrapper = styled.div`
	.input {
		border: 1px solid lightGray;

		:focus {
			outline: none;
		}

		:placeholder {
			font-size: 16px;
		}
	}
`;
export default SearchBar;
