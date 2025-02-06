import { ConfigState, NetworkValue } from "locklift";

const TYCHO_TESTNET_JRPC_ENDPOINT = process.env.TYCHO_TESTNET_JRPC_ENDPOINT || '';
const TYCHO_TESTNET_GIVER_ADDRESS = process.env.TYCHO_TESTNET_GIVER_ADDRESS || '0:0000000000000000000000000000000000000000000000000000000000000000';
const TYCHO_TESTNET_GIVER_PHRASE = process.env.TYCHO_TESTNET_GIVER_PHRASE || '';
const TESTNET_DEPLOYER_PHRASE = process.env.TESTNET_DEPLOYER_PHRASE || '';

export const tycho_testnet_network: NetworkValue<ConfigState,"tycho-testnet"> = {
    connection: {
        id: 2000,
        type: 'jrpc',
        data: {
          endpoint: TYCHO_TESTNET_JRPC_ENDPOINT,
        },
      },
      giver: {
        address: TYCHO_TESTNET_GIVER_ADDRESS,
        phrase: TYCHO_TESTNET_GIVER_PHRASE,
        accountId:0
      },
      keys: {
        // Use everdev to generate your phrase
        // !!! Never commit it in your repos !!!
        phrase: TESTNET_DEPLOYER_PHRASE,
        amount: 1000,
      },
};