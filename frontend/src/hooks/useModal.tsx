import React, { createContext, useCallback, useContext, useState } from 'react';

interface ModalState {
  showModal: boolean;
  modalChildren?: React.ReactNode;
  properties?: ModalProperties;
}

interface ModalContextData extends ModalState {
  toggleModal(show?: boolean): Promise<void>;
  setModalView(
    children: React.ReactNode,
    properties?: ModalProperties
  ): Promise<void>;
}

export interface ModalProperties {
  showClose?: boolean;
  title?: string;
  width?: number;
  height?: number;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ModalState>({
    showModal: false,
  } as ModalState);

  const toggleModal = useCallback(async (show) => {
    setData((prevState) => {
      return { ...prevState, showModal: show ?? !prevState?.showModal };
    });
  }, []);

  const setModalView = useCallback(
    async (children: React.ReactNode, properties?: ModalProperties) => {
      setData((prevState) => {
        return {
          ...prevState,
          modalChildren: children,
          properties,
        };
      });
    },
    []
  );
  return (
    <ModalContext.Provider
      value={{
        ...data,
        toggleModal,
        setModalView,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within an ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };
