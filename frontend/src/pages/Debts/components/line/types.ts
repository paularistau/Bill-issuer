
export interface IDebtLineProps {
  customer: any;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hiddenHeader?: boolean;
  hiddenNavigation?: boolean;
  hiddenStatus?: boolean;
}
