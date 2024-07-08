import { ConfigState, NetworkValue } from "locklift";


const VENOM_MAINNET_GQL_ENDPOINT = process.env.VENOM_MAINNET_GQL_ENDPOINT || '';
const VENOM_MAINNET_GIVER_ADDRESS = process.env.VENOM_MAINNET_GIVER_ADDRESS || '0:0000000000000000000000000000000000000000000000000000000000000000';
const VENOM_MAINNET_GIVER_PHRASE = process.env.VENOM_MAINNET_GIVER_PHRASE || '';
const MAINNET_DEPLOYER_PHRASE = process.env.MAINNET_DEPLOYER_PHRASE || '';

export const venom_mainnet_gql_network: NetworkValue<ConfigState,"venom-mainnet-gql"> = {
    connection: {
        id: 1,
        type: 'graphql',
        data: {
          endpoints: [ VENOM_MAINNET_GQL_ENDPOINT ],
        },
      },
      giver: {
        address: VENOM_MAINNET_GIVER_ADDRESS,
        phrase: VENOM_MAINNET_GIVER_PHRASE,
        accountId: 0,
      },
      keys: {
        // Use everdev to generate your phrase
        // !!! Never commit it in your repos !!!
        phrase: MAINNET_DEPLOYER_PHRASE,
        amount: 1000,
      },
};