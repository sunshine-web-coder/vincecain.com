import type { NextPage } from "next";
import { AddKeplr } from "./components/AddWalletComponent";

const Hume: NextPage = () => {
  return <AddKeplr rpcUrl="45.82.73.194:26657/" />;
};

export default Hume;
