import { ConfigState, NetworkValue } from "locklift";

export const locklift_network: NetworkValue<ConfigState,"locklift"> = {
connection: {
    id: 1001,
    // @ts-ignore
    type: "proxy",
    // @ts-ignore
    data: {},
    },
    keys: {
    // Use everdev to generate your phrase
    // !!! Never commit it in your repos !!!
    // phrase: "action inject penalty envelope rabbit element slim tornado dinner pizza off blood",
    amount: 20,
    },
    
};