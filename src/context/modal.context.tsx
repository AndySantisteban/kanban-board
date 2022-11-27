import { createContext, ReactNode, useState } from "react";

export type ModalContextType = {
  open: boolean;
  setOpen: (_value: boolean) => void;
};

export const ModalContext = createContext<ModalContextType>({
  open: false,
  setOpen: () => {},
});

export interface ModalProviderProps {
  children: ReactNode;
}
const ModalProvider = ({ children }: ModalProviderProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
