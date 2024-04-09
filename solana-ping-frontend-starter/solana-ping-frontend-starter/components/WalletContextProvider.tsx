import { FC, ReactNode } from "react";
const {ConnectionProvider, WalletProvider} = require('@solana/wallet-adapter-react');
const {WalletModalProvider} = require('@solana/wallet-adapter-react-ui')
import * as web3 from "@solana/web3.js";
const walletAdapterWallets = require("@solana/wallet-adapter-wallets");

require("@solana/wallet-adapter-react-ui/styles.css");

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ConnectionProvider endpoint={""}>
      <WalletProvider wallets={[]}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;