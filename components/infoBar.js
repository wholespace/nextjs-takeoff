import Info from './info';

const InfoBar = () => {
  return (
    <div className='mt-20'>
      <p className='bg-b-yellow px-5 inline rounded-sm py-1 text-gray-800 font-medium'>
        Final Result
      </p>
      <div className='info-box -mt-1 p-5 grid grid-cols-1 gap-y-5 md:grid-cols-6 place-items-center'>
        <img src='/monner.svg' alt='monner' className='md:inline hidden'/>
        <div className='flex flex-col items-center gap-3'>
          <p className='inline text-b-yellow font-medium'>
            <img className='inline' src='/bsc-yellow.svg' alt='bsc' /> Raised:
          </p>
          <p className='inline text-b-yellow font-medium'>50%</p>
        </div>
        <Info num='0.5/0 BNB' text='Min/Max' />
        <Info num='10 BNB' text='Soft Cap' />
        <Info num='20 BNB' text='Hard Cap' />
        <img className='inline my-auto ml-auto' src='/bararrow.svg' alt='bsc' />
      </div>
      <div className='relative -mt-1'>
        <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700'>
          <div
            style={{ width: '50%' }}
            className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-b-blue'
          ></div>
        </div>
      </div>
    </div>
  )
}

export default InfoBar
