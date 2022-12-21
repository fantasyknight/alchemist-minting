import "./index.scss";
import { useEffect, useState } from "react";

// import wagmi
import { useConnect } from "wagmi";

// import modal
import Modal from "react-modal";

// import icons
import {
  AiOutlineQuestionCircle,
  AiOutlineClose,
  AiOutlineWallet,
} from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";

// import context
import { useConnectWalletModal } from "../../contexts/ConnectWalletModalContext";

const connectWalletModalContentStyleForDesktop = {
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  transform: "translate(-50%, -50%)",
  width: "70%",
  minWidth: "300px",
  maxWidth: "500px",
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
};

const connectWalletModalContentStyleForMobile = {
  top: "100%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  transform: "translate(-50%, -100%)",
  width: "90%",
  minWidth: "300px",
  maxWidth: "500px",
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
};

const connectWalletModalOverlayStyle = {
  backgroundColor: "#11111177",
  zIndex: 4,
  overflow: "auto",
};

const WalletButton = ({
  connectorId,
  icon,
  text,
  className,
  onClick,
  unSupported,
  loading,
}) => {
  return (
    <div
      className={"wallet-button " + className}
      onClick={() => {
        if (unSupported) {
          return;
        }
        onClick();
      }}
    >
      <h6 className="m-0">{text}</h6>
      {loading ? (
        <div className="spinner-grow text-grey" role="status"></div>
      ) : unSupported ? (
        <TbExternalLink
          size={24}
          onClick={() => {
            if (connectorId === "metaMask") {
              window.open("https://metamask.io/download/");
            } else {
              window.open("https://walletconnect.com/");
            }
          }}
        />
      ) : (
        icon
      )}
    </div>
  );
};

const ConnectWalletModal = () => {
  const { connectors, error, isLoading, pendingConnector, connectAsync } =
    useConnect();

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 539px)").matches
  );

  const { isOpen, hide } = useConnectWalletModal();

  useEffect(() => {
    window
      .matchMedia("(max-width: 539px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={() => {
        document.body.style.overflow = "hidden";
      }}
      onAfterClose={() => {
        document.body.style.overflow = "auto";
      }}
      onRequestClose={() => {
        hide();
      }}
      style={{
        content: matches
          ? connectWalletModalContentStyleForMobile
          : connectWalletModalContentStyleForDesktop,
        overlay: connectWalletModalOverlayStyle,
      }}
    >
      <div className="connect-wallet-modal">
        <div className="d-flex align-items-center justify-content-between">
          <AiOutlineQuestionCircle color="grey" size={24} />
          <h4 className="text-white">Connect Wallet</h4>
          <AiOutlineClose
            style={{ cursor: "pointer" }}
            onClick={() => {
              hide();
            }}
            color="grey"
            size={24}
          />
        </div>
        <div className="d-flex align-items-center flex-column">
          {connectors.map((connector) => (
            <WalletButton
              connectorId={connector.id}
              key={connector.id}
              className="mt-4"
              text={connector.name}
              onClick={() => {
                connectAsync({ connector }).then(() => {
                  hide();
                });
              }}
              unSupported={!connector.ready}
              loading={isLoading && connector.id === pendingConnector?.id}
              icon={
                <img
                  src={window.origin + `/wallets/${connector.id}.png`}
                  height={32}
                />
              }
            />
          ))}
        </div>
        <div
          className="m-4 fw-bold text-center"
          style={{ color: "grey", cursor: "pointer" }}
          onClick={() => {
            window.open(
              "https://ethereum.org/en/wallets/find-wallet/#main-content"
            );
          }}
        >
          <AiOutlineWallet color="grey" size={24} /> I don't have any wallet
        </div>
      </div>
    </Modal>
  );
};

export default ConnectWalletModal;
