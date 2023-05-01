export interface IHeader {
  title: string;
  handleSearch: (search: string) => void;
  handleNewDebt?: () => void;
  isLoading: boolean;
  hasNew: boolean;
}