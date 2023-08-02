import React from 'react'

const Portfolio = () => {
  return (
    <div className='flex mt-14 justify-center'>
      <div>
        <div className='px-6 py-8 w-[73.56rem] rounded-3xl items-center flex justify-between bg-brown-30'>
            <div className='flex flex-col font-bold'>
                <p className='text-white text-[2rem] leading-6'>Total staked</p>
                <p className='text-orange-40 text-6xl'>200,000.8640 ETH</p>
            </div>
            <div className='flex flex-col font-bold'>
                <p className='text-white text-[2rem] leading-6'>Your staked amount</p>
                <p className='text-orange-40 text-6xl font-bold'>10.86 ETH</p>
            </div>
            <div className='flex flex-col font-bold'>
                <p className='text-white text-[2rem] leading-6'>Your size of pool</p>
                <p className='text-orange-40 text-6xl font-bold'>0.1 %</p>
            </div>

        </div>
        <div className='flex flex-col gap-6 mt-16'>
            <p className='text-[2rem] text-white font-bold'>Performance</p>
            <div className='p-6 w-[1177px] rounded-3xl flex justify-between items-center bg-[#55423D]'>
            <div className='flex flex-col font-bold'>
                <p className='text-white text-base leading-6'>Current APY</p>
                <p className='text-orange-40 text-2xl '>4.5%</p>
            </div>
            <div className='flex flex-col font-bold'>
                <p className='text-white text-base leading-6'>Current APY</p>
                <p className='text-orange-40 text-2xl'>4.5%</p>
            </div>
            <div className='flex flex-col font-bold'>
                <p className='text-white text-base leading-6'>Pool tokens</p>
                <p className='text-orange-40 text-2xl'>0.2 ETH</p>
            </div>
            <div className='flex flex-col font-bold'>
                <p className='text-white text-base leading-6'>Start date</p>
                <p className='text-orange-40 text-2xl'>April 20, 2023</p>
            </div>
            <div className='flex flex-col font-bold'>
                <p className='text-white text-base leading-6'>Runtime</p>
                <p className='text-orange-40 text-2xl'>Perpetual</p>
            </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
