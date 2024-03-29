import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { EyeIcon } from "@heroicons/react/solid";
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { RiSearchLine } from 'react-icons/ri';
import { Checkbox } from 'antd';
import CoinView from '../components/CoinView';
import WalletView from '../components/WalletView';
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios';
import OpenOrders from '../components/OpenOrders';

function Wallet() {

    const user = useSelector((state)=>state.user.currentUser);

    const [asset, setAssetActive] = useState(null);
    const [wallet, setWallet] = useState(null)

    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async ()=>{
            const {data} = await axios.get('https://market-stock.onrender.com/wallet', {
                params:{
                    userId: user.user.id
                },
                headers: {
                    Authorization: `Bearer ${user.tokens.access.token}`
                }
            })
            setWallet(data);
            const asset = await axios.get('https://market-stock.onrender.com/asset',{
                params:{
                    userId: user.user.id
                },
                headers: {
                    Authorization: `Bearer ${user.tokens.access.token}`
                }
            })
            setAssetActive(asset.data);
        }
        fetchData();
    },[])

    const handleNavigate = (path)=>{
        navigate(path);
    }

    return (
        <div>
            <Navbar />
            <div className='container w-full mx-auto px-4'>
                <div className="flex items-start p-8 border border-[#EAECEF] rounded-[8px]">
                    <div className="flex flex-col mr-auto gap-4">
                        <div className="flex justify-center items-center gap-1">
                            <p className="text-[#1E2329] text-[20px] font-semibold">
                                Estimated Balance </p>
                            <EyeIcon width={16} height={16} className="text-[#a1a1a1] hover:text-[#1f1f1f]" />
                        </div>
                        <div className="flex flex-cols-3 items-end">
                            <p className="text-[#1E2329] text-[32px] font-semibold font-arial font-sans-serif leading-10"> {wallet?.balance}  </p>
                            <div className="flex items-center">
                                <p className="text-[#1E2329] text-[14px] font-arial font-sans-serif leading-[22px] font-medium ml-2">
                                    USD </p>
                                <HiChevronDown width={12} height={12} className="text-[#a1a1a1] hover:text-[#1f1f1f]" />
                            </div>
                        </div>
                        <p className="text-[#1E2329] font-normal text-[14px] leading-[20px]" > ≈ ${wallet?.balance}</p>
                    </div>

                    <div className="flex items-start gap-2">
                        <button onClick={()=>handleNavigate("/enteramount")}  className="bg-[#EAECEF] px-3 py-1 font-semibold rounded-[4px]">
                            <p className="text-[#1E2329] text-[14px]">
                                Deposit </p> </button>
                        <button className="bg-[#EAECEF] px-3 py-1 font-semibold rounded-[4px]">
                            <p className="text-[#1E2329] text-[14px]">
                                Withdraw </p> </button>
                        <button className="bg-[#EAECEF] px-3 py-1 font-semibold rounded-[4px]">
                            <p className="text-[#1E2329] text-[14px]">
                                Transfer </p> </button>
                    </div>
                </div>

                <div className="flex flex-col p-8 border border-[#EAECEF] rounded-[8px] mt-6">
                    <div className="flex items-center">
                        <div className="mr-auto"> <p className="text-[#1E2329] text-[20px] font-semibold">
                            My Assets </p>
                        </div>
                        <button className="flex items-center">
                            <p className="text-[#1E2329] text-[14px] font-medium leading-[22px]">
                                View All 350+ Coins </p>
                            <HiChevronRight
                                width={12}
                                height={12}
                                className="text-[#a1a1a1] hover:text-[#1f1f1f]" />
                        </button>

                    </div>

                    <div className="flex flex-col mt-8">
                        <div className="flex justify-center items-center mb-6">
                            {/* <div className="flex items-center gap-4 mr-auto">
                                {asset.map((e) => {
                                    const active = asset === e.tt;
                                    return (
                                        <div key={e.id}>
                                            <button
                                                className="relative"
                                                onClick={() => setAssetActive(e.tt)}>
                                                <p
                                                    className="text-[16px] font-medium leading-8 ">
                                                    {e?.tt} </p>
                                                {active && <div className=" absolute w-4 h-1 bg-[#1E2329] -bottom-[20%] left-[50%] -translate-x-1/2 " />}
                                            </button>

                                        </div>)
                                })}
                            </div> */}

                            <div className="flex items-center">
                                <RiSearchLine className="text-[#6c6b6b]" />
                                <Checkbox className="ml-6" />
                                <p className="ml-2 text-[14px] font-medium text-[#1E2329] leading-[22px]">
                                    Hide assets {'<'}1 USD</p>
                            </div>
                        </div>
                        <CoinView asset={asset}/>
                    </div>

                </div>

                <div className="flex flex-col p-8 border border-[#EAECEF] rounded-[8px] mt-6">
                    <div className="flex items-center">
                        <div className="mr-auto"> <p className="text-[#1E2329] text-[20px] font-semibold">
                            Recent Transactions </p>
                        </div>
                        <button className="flex items-center">
                            <p className="text-[#1E2329] text-[14px] font-medium leading-[22px]">
                                More </p>
                            <HiChevronRight
                                width={12}
                                height={12}
                                className="text-[#a1a1a1] hover:text-[#1f1f1f]" />
                        </button>
                    </div>
                    <OpenOrders/>
                </div>
            </div>
        </div>

    )
}

export default Wallet