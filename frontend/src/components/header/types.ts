export interface IHeader {
  title: string;
  handleNewDebt?: (value) => void;
  isLoading: boolean;
  hasNew: boolean;
}