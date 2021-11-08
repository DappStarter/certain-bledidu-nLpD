require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth meadow million good enroll bubble gas'; 
let testAccounts = [
"0x64269919cdb8ab090874cfd8a4da515396e1eabdddaba7b98fa646c8accc9a26",
"0x5afaa423024a737baf005d28bf4391cc521d9894d29727d2a8bb1875798243aa",
"0x83dc3833d756622ded9a39c44a42ea93ba15f50a687b35dadec683f00c486e3f",
"0x8dd505cf99f9275d1a3bfdf5bf64517f8279e9d11e13623802cb2b1d9a0e285c",
"0x12af230f2e3e34a7a411726ab50dd11c5193d11237a7ce6316fa8e5284402a99",
"0x98dc96a4d44fd563ee5197949d1fba05b962b554fcbe7bfbd50121fbb48688fd",
"0x65fce0188c390bd8bfb57998b4ed8bb4a90c5d45a693488ae85ac78a6fa18ae8",
"0x6f42db095cd0af287867c0e55316928c099dc3ded1959530dc4a01b49ba255ce",
"0xe7294f96546e52a9b08183eb095222016173e1c59db73411dc8b8bcc7158ce06",
"0xefb69f080ea12b1334c44cd4bf29d67ef276de01fb8763872c1c1896262b575f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

