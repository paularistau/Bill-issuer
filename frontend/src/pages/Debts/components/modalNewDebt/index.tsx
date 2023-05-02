import { memo } from 'react';
import Input from '../../../../components/input';

export const ModalNewDebt = memo(() => {
  return (
    <>
      <Input
        width={200}
        onChange={(value) => console.log(value)}
        timeout={1000}
      />
    </>
  );
});
