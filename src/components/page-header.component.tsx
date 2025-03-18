import SearchBar from "components/common/SearchBar";

interface PageHeaderProps {
	onSearch: (value: string) => void;
}

export const PageHeader = ({ onSearch }: PageHeaderProps) => {
	const handleSearchTerm = (value: string) => {
		onSearch(value);
	};

	return (
		<div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">
			<h1>All Cryptos</h1>
			<SearchBar
				getSearchValue={handleSearchTerm}
				placeholder="Search Crypto"
			/>
		</div>
	);
};
