import { createContext, useContext, useState } from "react";

const connectWalletModalContext = createContext({
  isOpen: false,
  show: () => {},
  hide: () => {},
});

const ConnectWalletModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const show = () => {
    setIsOpen(true);
  };

  const hide = () => {
    setIsOpen(false);
  };

  return (
    <connectWalletModalContext.Provider
      value={{
        isOpen,
        show,
        hide,
      }}
    >
      {children}
    </connectWalletModalContext.Provider>
  );
};

const useConnectWalletModal = () => {
  const context = useContext(connectWalletModalContext);
  if (!context) {
    throw new Error(
      "You have to use useConnectWalletModal context inside the ConnectWalletModalContextProvider."
    );
  }
  return context;
};

export { ConnectWalletModalContextProvider, useConnectWalletModal };
