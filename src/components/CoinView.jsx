import React from 'react'
import { FaSort } from "react-icons/fa";

function CoinView() {

    // mấy khúc ul này render ra

    return (
        <>
            <table>
                <ul className="th flex flex-wrap items-center px-3 py-2">
                    <li class=" basis-1/3 mr-auto">
                        <button className="th flex items-center gap-1" >
                            <p
                                className='text-[#707A8A] font-normal text-[12px] leading-4'>
                                Coin </p>
                            <FaSort
                                size={12}
                                className="text-[#707A8A]" /> </button>
                    </li>
                    <li class="basis-1/6 flex items-center justify-end">
                        <button className="th flex items-center justify-end gap-1" > <p
                            className='text-[#707A8A] font-normal text-[12px] leading-4'>
                            Amount </p>
                            <FaSort
                                size={12}
                                className="text-[#707A8A]" /> </button>
                    </li>
                    <li class="basis-1/6 flex items-center justify-end">
                        <button
                            className="th flex items-center justify-end gap-1" > <p
                                className='text-[#707A8A] font-normal text-[12px] leading-4'>
                                Coin Price </p>
                            <FaSort
                                size={12}
                                className="text-[#707A8A]" /> </button>
                    </li>
                    <li class="basis-1/3 "> <div
                        className="td flex items-center justify-end" > <p
                            className='text-[#707A8A] font-normal text-[12px] leading-4'>
                            Action</p> </div>
                    </li>
                </ul>
                <ul class="th flex flex-wrap items-center px-3 py-2
                 hover:bg-[#EAECEF] hover:rounded-[8px]">
                    <li class=" basis-1/3 mr-auto">
                        <div className="flex items-center gap-2" >
                            <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=026"
                                width={24}
                                height={24}
                            />
                            <div className="flex flex-col"> <p
                                className="text-[16px] leading-6 font-medium">
                                BNB</p>
                                <p
                                    className="text-[14px] leading-6 font-normal text-[#707A8A]">
                                    BNB </p> </div>
                        </div>

                    </li>
                    <li class="basis-1/6">
                        <div className="th flex justify-end" > <div
                            className="flex flex-col items-center"> <p
                                className="text-[16px] leading-6 font-medium">
                                0.00</p>
                            <p
                                className="text-[14px] leading-6 font-normal text-[#707A8A]">
                                $0.00 </p> </div>
                        </div>
                    </li>
                    <li class="basis-1/6">
                        <div
                            className="th flex justify-end" > <p
                                className="text-[16px] font-normal leading-6">
                                $36,671
                            </p> </div>
                    </li>
                    <li class="basis-1/3 ">
                        <div
                            className="td flex items-center justify-end" >  <button> <p
                                className="underline underline-offset-2 hover:text-[#F8D12F]" >
                                Cash In</p> </button> </div>
                    </li>
                </ul>
                <ul class="th flex flex-wrap items-center px-3 py-2
                 hover:bg-[#EAECEF] hover:rounded-[8px]">
                    <li class=" basis-1/3 mr-auto">
                        <div className="flex items-center gap-2" >
                            <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=026"
                                width={24}
                                height={24}
                            />
                            <div className="flex flex-col"> <p
                                className="text-[16px] leading-6 font-medium">
                                BNB</p>
                                <p
                                    className="text-[14px] leading-6 font-normal text-[#707A8A]">
                                    BNB </p> </div>
                        </div>

                    </li>
                    <li class="basis-1/6">
                        <div className="th flex justify-end" > <div
                            className="flex flex-col items-center"> <p
                                className="text-[16px] leading-6 font-medium">
                                0.00</p>
                            <p
                                className="text-[14px] leading-6 font-normal text-[#707A8A]">
                                $0.00 </p> </div>
                        </div>
                    </li>
                    <li class="basis-1/6">
                        <div
                            className="th flex justify-end" > <p
                                className="text-[16px] font-normal leading-6">
                                $36,671
                            </p> </div>
                    </li>
                    <li class="basis-1/3 ">
                        <div
                            className="td flex items-center justify-end" >  <button> <p
                                className="underline underline-offset-2 hover:text-[#F8D12F]" >
                                Cash In</p> </button> </div>
                    </li>
                </ul>
                <ul class="th flex flex-wrap items-center px-3 py-2
                 hover:bg-[#EAECEF] hover:rounded-[8px]">
                    <li class=" basis-1/3 mr-auto">
                        <div className="flex items-center gap-2" >
                            <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=026"
                                width={24}
                                height={24}
                            />
                            <div className="flex flex-col"> <p
                                className="text-[16px] leading-6 font-medium">
                                BNB</p>
                                <p
                                    className="text-[14px] leading-6 font-normal text-[#707A8A]">
                                    BNB </p> </div>
                        </div>

                    </li>
                    <li class="basis-1/6">
                        <div className="th flex justify-end" > <div
                            className="flex flex-col items-center"> <p
                                className="text-[16px] leading-6 font-medium">
                                0.00</p>
                            <p
                                className="text-[14px] leading-6 font-normal text-[#707A8A]">
                                $0.00 </p> </div>
                        </div>
                    </li>
                    <li class="basis-1/6">
                        <div
                            className="th flex justify-end" > <p
                                className="text-[16px] font-normal leading-6">
                                $36,671
                            </p> </div>
                    </li>
                    <li class="basis-1/3 ">
                        <div
                            className="td flex items-center justify-end" >  <button> <p
                                className="underline underline-offset-2 hover:text-[#F8D12F]" >
                                Cash In</p> </button> </div>
                    </li>
                </ul>
            </table>
        </>
    )
}

export default CoinView