import { ConfigState, NetworkValue } from "locklift";

const VENOM_TESTNET_JRPC_ENDPOINT = process.env.VENOM_TESTNET_JRPC_ENDPOINT || '';
const VENOM_TESTNET_GIVER_ADDRESS = process.env.VENOM_TESTNET_GIVER_ADDRESS || '0:0000000000000000000000000000000000000000000000000000000000000000';
const VENOM_TESTNET_GIVER_PHRASE = process.env.VENOM_TESTNET_GIVER_PHRASE || '';
const TESTNET_DEPLOYER_PHRASE = process.env.TESTNET_DEPLOYER_PHRASE || '';

export const venom_testnet_jrpc_network: NetworkValue<ConfigState,"venom-testnet-jrpc"> = {
    connection: {
        id: 1000,
        type: 'jrpc',
        data: {
          endpoint: VENOM_TESTNET_JRPC_ENDPOINT,
        },
      },
      giver: {
        address: VENOM_TESTNET_GIVER_ADDRESS,
        phrase: VENOM_TESTNET_GIVER_PHRASE,
        accountId: 0,
      },
      keys: {
        // Use everdev to generate your phrase
        // !!! Never commit it in your repos !!!
        phrase: TESTNET_DEPLOYER_PHRASE,
        amount: 1000,
      },
};