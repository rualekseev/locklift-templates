import { WalletTypes, toNano } from "locklift";

export default async () => {

  
  const accounts = await locklift.deployments.deployAccounts(
    [
      {
        deploymentName: "ever-wallet",
        signerId: "0",
        accountSettings: {
          type: WalletTypes.EverWallet,
          value: toNano(0.1),
          nonce : 0,
        },
      },
    ],
    true,
  );


  // await locklift.provider.sendMessage({
  //   sender: accounts[0].account.address,
  //   recipient: accounts[0].account.address,
  //   amount: toNano(0.5),
  //   bounce: false,
  // });



};

export const tag = "ever-wallet";
