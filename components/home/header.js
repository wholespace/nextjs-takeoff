import  Image  from 'next/image';


const Header = () => {
  return (
    <header className='flex flex-wrap md:flex-nowrap justify-between'>
      <div className='w-auto md:w-2/3 mt-14 md:order-first order-last md:mx-0 mx-auto'>
      <Image
        src='/arrow.svg'
        width={54}
        height={25}
        alt='arrow'
      />
        <h1>MULTI CHAIN&nbsp; DECENTRALIZED &nbsp; PROTOCOLS & SERVICES</h1>
        <p className='mt-3 mr-0 md:mr-10'>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
      <Image
        src='/header.svg'
        width={553}
        height={520}
        alt='header'
        className='md:order-last order-first'
      />
    </header>
  )
}

export default Header
