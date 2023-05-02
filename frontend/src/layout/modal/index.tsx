import React from 'react';
import { useModal } from '../../hooks/useModal';
import RoundMask from '../../components/modal';

const ModalLayout: React.FC = ({ children }) => {
  const {
    toggleModal,
    showModal,
    modalChildren,
    properties: modalProperties,
  } = useModal();

  return (
    <>
      {children}
      <RoundMask
        title={modalProperties?.title ?? ''}
        isVisible={showModal}
        toggle={toggleModal}
        properties={modalProperties}
        height={modalProperties?.height}
        modalWidth={modalProperties?.width}
      >
        {modalChildren}
      </RoundMask>
    </>
  );
};

export default ModalLayout;
