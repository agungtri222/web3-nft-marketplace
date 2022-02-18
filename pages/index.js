import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import { nftAddress, nftMarketAddress } from '../config'


import Marketplace from '../artifacts/contracts/Marketplace.sol/Marketplace.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
  

function Home() {
    const [nfts, setNfts] = useState([]);
    const [loadingState, setLoadingState] = useState('not-loaded');
    useEffect(() => {
        loadNfts();
    }, []);

    async function loadNfts() {
        const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/OuywS43wAPSmSx4fMPBPeNdAP2iJQaC-');
        const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider);
        const marketContract = new ethers.Contract(nftMarketAddress, Marketplace.abi, provider);
        const data = await marketContract.fetchMarketItems()

        /**
         * map over items returned from smart contract and format
         * them as well as fetch their token metadata
         */
        const items = await Promise.all(data.map(async i => {
            const tokenURI = await tokenContract.tokenURI(i.tokenId);
            const meta = await axios.get(tokenURI);
            let price = await ethers.utils.formatUnits(i.price.toString(), 'ether');

            let item = {
                price,
                tokenURI: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                image: meta.data.image,
                name: meta.data.name,
                description: meta.data.description
            }

            return item;
        }));

        console.log(items);

        setNfts(items);
        setLoadingState('loaded');
    }

    async function buyNft(nft) {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(nftMarketAddress, Marketplace.abi, signer);

        const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
        const transaction = await contract.createMarketSale(nftAddress, nft.tokenId, {
            value: price
        });
        await transaction.wait();
        loadNfts();
    }

    if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
    return (
        <div className="flex justify-center">
            <div className="px-4" style={{ maxWidth: '1600px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                    {
                        nfts.map((nft, i) => (
                            <div key={i} className="border shadow rounded-xl overflow-hidden">
                                <img src={nft.image} alt="Collection" />
                                <div className="p-4">
                                    <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                                    <div style={{ height: '70px', overflow: 'hidden'}}>
                                        <p className="text-gray-400">{nft.description}</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-800">
                                    <p className="text-2xl mb-4 font-bold text-white">{nft.price} ETH</p>
                                    <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy Now</button>
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;