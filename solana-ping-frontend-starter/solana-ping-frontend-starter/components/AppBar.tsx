import { FC } from 'react';
import styles from '../styles/Home.module.css';
const Image = require('next/image');
const { WalletMultiButton } = require("@solana/wallet-adapter-react-ui");

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <Image src="/solanaLogo.png" height={30} width={200} />
            <span>Wallet-Adapter Example</span>
            <WalletMultiButton />
        </div>
    )
}