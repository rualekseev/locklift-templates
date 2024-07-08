import { ConfigState, NetworkValue } from "locklift";

const EVERSCALE_TESTNET_GQL_ENDPOINT = process.env.EVERSCALE_TESTNET_GQL_ENDPOINT || '';
const EVERSCALE_TESTNET_GIVER_ADDRESS = process.env.EVERSCALE_TESTNET_GIVER_ADDRESS || '0:0000000000000000000000000000000000000000000000000000000000000000';
const EVERSCALE_TESTNET_GIVER_PHRASE = process.env.EVERSCALE_TESTNET_GIVER_PHRASE || '';
const TESTNET_DEPLOYER_PHRASE = process.env.TESTNET_DEPLOYER_PHRASE || '';

export const ever_testnet_gql_network: NetworkValue<ConfigState,"ever-testnet-gql"> = {
    connection: {
        id: 1,
        type: 'graphql',
        group: 'dev',
        data: {
          endpoints: [ EVERSCALE_TESTNET_GQL_ENDPOINT ],
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