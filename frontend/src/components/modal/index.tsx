import React, { memo, useEffect, useState } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import {
  ModalCustom,
  ScrollComponent,
  Container,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalComponent,
  ModalBody,
} from './styles';
import { ModalProperties, useModal } from '../../hooks/useModal';
import { MdOutlineClose } from 'react-icons/md';

export interface ModalProps {
  isVisible: boolean;
  title: string;
  toggle: Function;
  properties?: ModalProperties;
  modalWidth?: number;
  height?: number;
  top?: number;
}

const RoundMask: React.FC<ModalProps> = memo(
  ({ isVisible, children, toggle, title, modalWidth = 635, height = 704 }) => {
    const [contentWidth, setContentWidth] = useState(0);
    const [shouldShow, setShouldShow] = useState(false);
    const [isClosing, setIsClosing] = useState(true);

    const { toggleModal } = useModal();
    const closeModal = () => {
      toggle(false);
    };

    useEffect(() => {
      if (!isVisible) {
        setContentWidth(0);
        setIsClosing(true);
        setTimeout(() => {
          setShouldShow(false);
        }, 150);
        return;
      }
      setShouldShow(true);
    }, [isVisible]);

    useEffect(() => {
      if (shouldShow) setTimeout(() => setIsClosing(false), 10);
    }, [shouldShow]);

    return (
      <ModalCustom
        isOpen={shouldShow}
        shouldCloseOnOverlayClick={true}
        className={'modal-component'}
        overlayClassName={'modal-component-overlay'}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <ScrollComponent width={isClosing || !shouldShow ? 0 : contentWidth}>
          <ReactResizeDetector handleWidth>
            {({ width }) => {
              setContentWidth(width ?? 0);
              return (
                <Container>
                  <ModalComponent height={height} width={modalWidth}>
                    <ModalHeader>
                      <ModalTitle>{title}</ModalTitle>
                      <ModalClose onClick={closeModal}>
                        <MdOutlineClose />
                      </ModalClose>
                    </ModalHeader>
                    <ModalBody>
                      <div className="scroll-component">
                        <div className="scroll-content">
                          <div className={'modal-component__container'}>
                            {children}
                          </div>
                        </div>
                      </div>
                    </ModalBody>
                  </ModalComponent>
                </Container>
              );
            }}
          </ReactResizeDetector>
        </ScrollComponent>
      </ModalCustom>
    );
  }
);

export default RoundMask;
