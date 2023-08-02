"use client"

import React, { useState } from 'react'
import { Icons } from '../../../public/icons'

const SummaryInfo = ({rawData, info, style = ""}) => {
    return (
        <div className={`flex justify-between ${style}`}><p className='text-white'>{rawData}</p><p className='font-bold text-base text-white'>{info}</p></div>
    )
}


const TabComp = ({options, stake, buttonText, showSummary, setShowSummary}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    
    // const [unstakeContinue, setUnstakeContinue] = useState(continue)

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const handleSelectOption = (option) => {
        setSelectedOption(option);
      //   onSelect(options);
        setIsOpen(false);
      };


    return (
      <div>
       {showSummary && 
             <div className='border-2 z-10 absolute top-[10rem] left-[-2px] border-white/50 p-5 flex gap-8 flex-col justify-between rounded-3xl bg-[#55423D] w-[580px] transition-[top] delay-[3000ms]'>
             <div className='flex items-center gap-4'> 
                     <button className='bg-green-40 text-white text-base w-10 h-10 rounded-full'>2</button>
                     <p className='text-white'>Summary</p>
             </div>
             {!stake && 
                <>
                    <div className='border-orange-80 bg-white/10 border p-4 rounded-[20px]'>
                        <p className='text-white'>There is not enough amount in the pool to unstake at this time, please check back in a few minutes.</p>
                    </div>
                </>
             }
             <div>
                 <div>
                     {(
                         <div className='flex flex-col p-4 gap-2 bg-white/10 rounded-2xl'>
                            <SummaryInfo rawData={"You will Receive:"} info={`${"20 ETH"}`} />
                            <SummaryInfo rawData={"Exchange Rate:"} info={`${"1 ETH = 1 BRDG-ETH"}`} />
                            <SummaryInfo rawData={"You will receive"} info={`${"20 BRDG-ETH"}`} />
                            <SummaryInfo rawData={"Current APR"} info={`${"4.7"}%`} />
                            <SummaryInfo rawData={"Transaction Cost"} info={`${"0.00950 ETH ($18.22 USD)"}`} style='border-white pb-2 border-b-2'  />
                            <SummaryInfo rawData={"Total Amount in Pool"} info={`${"180,002,633.250 ETH"}`} />
                            <SummaryInfo rawData={"Participants in Pool"} info={`${"180,002,633.250 ETH"}`} />
                            <SummaryInfo rawData={"ETH market cap"} info={`${"$126,014,736"}`} />
                         
                         </div>
                     )}
                 </div>
             </div>
             
             <button className='text-base bg-orange-40 p-6 rounded-2xl'>{buttonText}</button>
            </div>
       }
        <div className='flex flex-col gap-8'>
        <div className='flex items-center gap-4'> 
                <button className='bg-green-40 text-white text-base w-10 h-10 rounded-full'>1</button>
                <p className='text-white'>{showSummary? "Select Token & Amount" : "Enter Amount" }</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div>
                {stake && (
                    <div className='flex flex-col gap-2 rounded-2xl'>
                    <p className='text-white' >Stake ETH</p>
                    <div className='p-4 bg-brown-50'>
                    <button className="flex justify-between w-full items-center" onClick={handleToggleDropdown}>
                        <div className='flex gap-1'>
                            <img src='' className='w-4 h-4 rounded-full'/>
                            <p className='text-white text-base font-normal'>{selectedOption.currency}</p>
                        </div>
                        <Icons.ArrowDown />
                    </button>
                    {isOpen && (
                        <ul>
                        {options.map((option, index) => (
                            <li key={index} className='text-white flex gap-2 bg-brown-30' onClick={() => handleSelectOption(option)}>
                            <img src={option.imgsrc} className='w-4 h-4 rounded-full'/>
                            {option.currency}
                            </li>
                        ))}
                        </ul>
                    )}
                    </div>
                    </div>
                )}
            </div>
            <div>
                <div className='flex flex-col gap-2 rounded-2xl'>
                    <p className='text-white'>Amount</p>
                    <div>
                    {stake && <input type='text' className='focus:outline-none p-4 bg-brown-50 text-white  placeholder:text-white w-full' placeholder={`Enter amount in  $${selectedOption.abb}`}/>}
                    {!stake && 
                        <div>
                            <input type='text' className='focus:outline-none text-white text-base p-4 bg-brown-50 placeholder:text-white w-full' placeholder={`Enter amount you want to Unstake`}/>
                            <p className='text-end text-white font-medium'>{`Balance ${'20'} BRDG-${selectedOption.abb}`}</p>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>      
        <button className='text-base bg-orange-40 w-full p-6 rounded-2xl' onClick={() => setShowSummary(true)}>{buttonText}</button>
       </div>
      </div>
    )

}

const Stake = () => {

    

    const tabs = ["stake", "unstake"]

    const [activeTab, setActiveTab] = useState("stake");

    const [showSummary, setShowSummary] = useState(false)

    const options=[{imgsrc: "", currency: "Ethereum", abb: "ETH"}, {imgsrc: "", currency: "Bitcoin", abb: "BTC"}]

    const HandleChangeTab = (item) => {
        setActiveTab(item)
        setShowSummary(false)
    }

    let content: React.ReactNode;

    switch (activeTab) {
        case "stake":
            content = <TabComp stake={true} options={options} buttonText={"Continue"} showSummary={showSummary} setShowSummary={setShowSummary}/> 
            break;
        case "unstake":
            content = <TabComp stake={false} options={options} buttonText={"Unstake"} showSummary={showSummary} setShowSummary={setShowSummary}/> 
            break;
        default:
            break;
    }

  return (
        <div className='flex justify-center mr-10 items-center'>
        <div className={`border-2 border-white/50 p-5 relative flex bg-brown-30 gap-8 flex-col justify-between rounded-3xl w-[36.25rem]`}>
            {showSummary && <div className='bg-black/30 absolute left-0 top-0 w-full h-full rounded-3xl'></div>}
            <div className='p-2 w-full bg-brown-50 rounded-2xl flex justify-between '>
                {tabs.map((item, index) => (
                    <button className={`${activeTab === item ? "text-brown-50 bg-white" : "text-white"} p-4 rounded-2xl py-2 w-[50%]`} onClick={() => HandleChangeTab(item)}>
                        <p className={`text-base capitalize font-bold`}>{item}</p>
                    </button>
                ))}
            </div>
            {content}
        </div>
        </div>
  )
}

export default Stake
