import { lockliftChai, LockliftConfig } from "locklift";
import { FactorySource } from "./build/factorySource";
import * as dotenv from "dotenv";
import chai from "chai";
import "@broxus/locklift-deploy";
import { Deployments } from "@broxus/locklift-deploy";

dotenv.config();

import { locklift_network } from "./networks/locklift-local";
import { venom_testnet_network } from "./networks/venom-testnet";
import { ever_mainnet_jrpc_network } from "./networks/everscale-mainnet-jrpc";
import { venom_mainnet_jrpc_network } from "./networks/venom-mainnet-jrpc";
import { venom_mainnet_gql_network } from "./networks/venom-mainnet-gql";
import { tycho_testnet_network } from "./networks/tycho-testnet"

chai.use(lockliftChai);

declare module "locklift" {
  //@ts-ignore
  export interface Locklift {
      deployments: Deployments<FactorySource>;
  }
}

declare global {
  const locklift: import("locklift").Locklift<FactorySource>;
}

const config: LockliftConfig = {
  compiler: {
    // Specify path to your TON-Solidity-Compiler
    // path: "/mnt/o/projects/broxus/TON-Solidity-Compiler/build/solc/solc",
    // Or specify version of compiler
    version: "0.70.0",

    // Specify config for extarnal contracts as in exapmple
    // externalContractsArtifacts: {
    //   "node_modules/broxus-ton-tokens-contracts/build": ['TokenRoot', 'TokenWallet']
    // }
  },
  linker: {
    // specify version of linker
    version: "0.17.0",
  },
  networks: { 
    locklift: locklift_network,
    ever_mainnet: ever_mainnet_jrpc_network,
    venom_testnet: venom_testnet_network,
    venom_mainnet_jrpc: venom_mainnet_jrpc_network,
    venom_mainnet_gql: venom_mainnet_gql_network,
    tycho_testnet: tycho_testnet_network,
  },
  mocha: {
    timeout: 2000000,
  },
};

export default config;
