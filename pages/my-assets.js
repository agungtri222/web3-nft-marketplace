import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Web3Modal from "web3modal"
import { nftMarketAddress, nftAddress } from '../config';

import Marketplace from '../artifacts/contracts/Marketplace.sol/Marketplace.json';
import NFT from '../artifacts/contracts/NFT.sol/NFT.json';


function MyAssets() {
    const [nfts, setNfts] = useState([]);
    const[loadingState, setLoadingState] = useState('not-loaded');

    useEffect(() => {
        loadNFTs();
    }, []);

    async function loadNFTs() {
        const web3modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true
        });

        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        const marketContract = new ethers.Contract(nftMarketAddress, Marketplace.abi, signer);
        const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider);
        const data = await marketContract.fetchItemCreated();

        const items = await Promise.all(data.map(async i => {
            const tokenURI = await tokenContract.tokenURI(i.tokenId);
            const meta = await axios.get(tokenURI);
            let price = await ethers.utils.formatUnits(i.price.toString(), 'ether');

            let item = {
                price,
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                sold: i.sold,
                image: meta.data.image
            }

            return item;
        }));

        setNfts(items);
        setLoadingState('loaded');
    }

    if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No Assets Created.</h1>)
    return(
        <div className="flex justify-center">
            <div className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                    {
                        nfts.map((nft, i) => (
                            <div key={i} className="border shadow rounded-xl overflow-hidden">
                                <img src={nft.image} alt="" className="rounded"/>
                                <div className="p-4 bg-white">
                                    <p className="text-2xl font-bold text-black">Price - {nft.price} Eth</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default MyAssets;