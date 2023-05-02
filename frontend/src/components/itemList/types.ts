import React from 'react';

export interface ILineView {
  fieldsTitle: string[];
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hasHeader?: boolean;
  headerChildren?: React.ReactElement;
  columnsSizes: string;
}