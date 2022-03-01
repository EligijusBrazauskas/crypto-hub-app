import styled from "styled-components";

interface Props {
  getSearchValue: (value: any) => void,
  placeholder?: string 
}

const SearchBar = ({ getSearchValue, placeholder = 'search..' }: Props) => {

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    getSearchValue(event.target.value)
  }

	return (
		<InputWrapper className="">
			<input className="input bg-white shadow-lightest-blue px-[16px] py-[8px] rounded-[4px] text-secondary w-[140px]" placeholder={placeholder} onChange={handleSearchInput} />
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
`
export default SearchBar;
