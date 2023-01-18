import { Coin, SigningStargateClient, StargateClient } from "@cosmjs/stargate";
import { AccountData, OfflineSigner } from "@cosmjs/proto-signing";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";
import { ChangeEvent, Component, MouseEvent } from "react";
// import styles from "../styles/Home.module.css";

declare global {
  interface Window extends KeplrWindow {}
}

export interface AddKeplrWallet {
  rpcUrl: string;
}

export class AddKeplr extends Component<AddKeplrWallet> {
  // Store changed token amount to state
  onToSendChanged = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({
      toSend: e.currentTarget.value,
    });

  // When the user clicks the "send to faucet button"
  onSendClicked = async (e: MouseEvent<HTMLButtonElement>) => {
    // Detect Keplr
    const { keplr } = window;
    if (!keplr) {
      alert("You need to install Keplr");
      return;
    }
    // Get the current state and amount of tokens that we want to transfer

    const { rpcUrl } = this.props;
    // Suggest the testnet chain to Keplr
    await keplr.experimentalSuggestChain(this.getTestnetChainInfo());
    // Create the signing client
    const offlineSigner: OfflineSigner = window.getOfflineSigner!("vince_1000");
    const signingClient = await SigningStargateClient.connectWithSigner(
      rpcUrl,
      offlineSigner
    );
  };

  // The Cosmos Hub Testnet chain parameters
  getTestnetChainInfo = (): ChainInfo => ({
    chainId: "vince_1000",
    chainName: "vince chain",
    rpc: "http://45.82.73.194:26657/",
    rest: "http://45.82.73.194:1317/",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "vince",
      bech32PrefixAccPub: "vince" + "pub",
      bech32PrefixValAddr: "vince" + "valoper",
      bech32PrefixValPub: "vince" + "valoperpub",
      bech32PrefixConsAddr: "vince" + "valcons",
      bech32PrefixConsPub: "vince" + "valconspub",
    },
    currencies: [
      {
        coinDenom: "VINCE",
        coinMinimalDenom: "avince",
        coinDecimals: 0,
        coinGeckoId: "vince",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "VINCE",
        coinMinimalDenom: "avince",
        coinDecimals: 0,
        coinGeckoId: "vince",
      },
    ],
    stakeCurrency: {
      coinDenom: "VINCE",
      coinMinimalDenom: "avince",
      coinDecimals: 0,
      coinGeckoId: "vince",
    },
    coinType: 118,
    gasPriceStep: {
      low: 1,
      average: 1,
      high: 1,
    },
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
  });

  // The render function that draws the component at init and at state change
  render() {
    // The web page structure itself
    return (
      <div>
        <fieldset className="carrd">
          <button className="btn btn-dark" onClick={this.onSendClicked}>Add Wallet</button>
        </fieldset>
      </div>
    );
  }
}
