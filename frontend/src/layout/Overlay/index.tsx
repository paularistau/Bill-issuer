import React from 'react';
import { OverlayView } from './styles';
import { useModal } from '../../hooks/useModal';

export const Overlay: React.FC = ({ children }) => {
  const { showModal = false, toggleModal } = useModal();

  return (
    <OverlayView visible={showModal} onClick={() => toggleModal(false)}>
      {children}
    </OverlayView>
  );
};
