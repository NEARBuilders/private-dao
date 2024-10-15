import { useWallet } from "@/hooks/use-wallet";
import { Wallet } from "@/lib/near";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type AuthProviderProps = {
  children: React.ReactNode;
};

const contractPerNetwork = {
  mainnet: "v1.signer",
  testnet: "v1.signer-dev.testnet",
};

const MPC_VARIABLE = {
  MPC_CONTRACT_ID_TESTNET: "v1.signer-dev.testnet",
  MPC_CONTRACT_ID_MAINNET: "v1.signer",
  MPC_PUBLIC_KEY_TESTNET:
    "secp256k1:54hU5wcCmVUPFWLDALXMh1fFToZsVXrx9BbTbHzSfQq1Kd1rJZi52iPa4QQxo6s5TgjWqgpY8HamYuUDzG6fAaUq",
  MPC_PUBLIC_KEY_MAINNET:
    "secp256k1:3tFRbMqmoa6AAALMrEFAYCEoHcqKxeW38YptwowBVBtXK1vo36HDbUWuR6EZmoK4JcH6HDkNMGGqP1ouV7VZUWya",
};

const getNearContract = (networkId: string) => contractPerNetwork[networkId];

export default function AuthProvider({ children }: AuthProviderProps) {
  const { setWallet, setSignedAccountId, networkId, signedAccountId } =
    useWallet();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const wallet = new Wallet({
      createAccessKeyFor: getNearContract(networkId),
      networkId: networkId,
    });
    wallet.startUp(setSignedAccountId);

    setWallet(wallet);
  }, [networkId]);

  console.log("signedAccountId", signedAccountId);

  useEffect(() => {
    if (signedAccountId === undefined && location.pathname !== "/login") {
      navigate("/login");
    }
  }, [signedAccountId]);

  return <>{children}</>;
}
