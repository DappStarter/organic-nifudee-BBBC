require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note rifle coast install case flock gaze'; 
let testAccounts = [
"0x2710a52e89be3d3eb4de43d716f195e1d289c18f5ceeaa44bd0dfa57806d2e70",
"0x9f902d37662786183c3500768c1ef5e59ad909518ea271dc050f6090e3e808cc",
"0x964ba6c6c6e2b6dd7cbe58bc43f83c78987d21aa78de3f33f739207c8df9f882",
"0xcac4a2a1d1bc530521b6e527104197774654633d4d783cf033e3baaddeb9f5bd",
"0x412316a8e2f5fad7de9ffea3bae6be090122efddb8844483e95212644812c5db",
"0x3d4db4deccb8c6ac278bc5566f0f702779c5bec1ee05dfd3321838f399d19a9c",
"0x232404bb9dbb36d71a4b099c61fa19c9cad4cdcee956c2a6b35d923dca82f9a3",
"0xdaac9c7c11cb2a8c37012248094abaa32259d358fadf0bad835448a347e5fea1",
"0x06b9fa70ce7675499a1b51e696d110ab3d084b391d924d69bb64c44add79bb6a",
"0x71214a51c0572607406860d1c7b7fc4de975d368ac8b93bebd6e60308c9c013d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

