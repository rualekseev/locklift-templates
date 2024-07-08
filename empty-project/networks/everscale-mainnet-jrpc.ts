import { ConfigState, NetworkValue } from "locklift";

const EVERSCALE_MAINNET_JRPC_ENDPOINT = process.env.EVERSCALE_MAINNET_JRPC_ENDPOINT || '';
const EVERSCALE_MAINNET_GIVER_ADDRESS = process.env.EVERSCALE_MAINNET_GIVER_ADDRESS || '0:0000000000000000000000000000000000000000000000000000000000000000';
const EVERSCALE_MAINNET_GIVER_PHRASE = process.env.EVERSCALE_MAINNET_GIVER_PHRASE || '';
const MAINNET_DEPLOYER_PHRASE = process.env.MAINNET_DEPLOYER_PHRASE || '';

export const ever_mainnet_jrpc_network: NetworkValue<ConfigState,"ever-mainnet-jrpc"> = {
    connection: {
        id: 42,
        type: 'jrpc',
        data: {
          endpoint: EVERSCALE_MAINNET_JRPC_ENDPOINT,
        },
      },
      giver: {
        address: EVERSCALE_MAINNET_GIVER_ADDRESS,
        phrase: EVERSCALE_MAINNET_GIVER_PHRASE,
        accountId: 0,
      },
      keys: {
        // Use everdev to generate your phrase
        // !!! Never commit it in your repos !!!
        phrase: MAINNET_DEPLOYER_PHRASE,
        amount: 1000,
      },
};
