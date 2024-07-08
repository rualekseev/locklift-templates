import { ConfigState, NetworkValue } from "locklift";

const EVERSCALE_TESTNET_JRPC_ENDPOINT = process.env.EVERSCALE_TESTNET_JRPC_ENDPOINT || '';
const EVERSCALE_TESTNET_GIVER_ADDRESS = process.env.EVERSCALE_TESTNET_GIVER_ADDRESS || '0:0000000000000000000000000000000000000000000000000000000000000000';
const EVERSCALE_TESTNET_GIVER_PHRASE = process.env.EVERSCALE_TESTNET_GIVER_PHRASE || '';
const TESTNET_DEPLOYER_PHRASE = process.env.TESTNET_DEPLOYER_PHRASE || '';

export const ever_testnet_jrpc_network: NetworkValue<ConfigState,"ever-testnet-jrpc"> = {
    connection: {
        id: 42,
        type: 'jrpc',
        data: {
          endpoint: EVERSCALE_TESTNET_JRPC_ENDPOINT,
        },
      },
      giver: {
        address: EVERSCALE_TESTNET_GIVER_ADDRESS,
        phrase: EVERSCALE_TESTNET_GIVER_PHRASE,
        accountId: 0,
      },
      keys: {
        // Use everdev to generate your phrase
        // !!! Never commit it in your repos !!!
        phrase: TESTNET_DEPLOYER_PHRASE,
        amount: 1000,
      },
};
