const FeatItem = ({number, title}) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='text-center animated rounded-full bg-b-blue opacity-75 z-10'>
        <p className='text-gray-100 flex justify-center items-center w-10 h-10 my-auto rounded-full bg-b-blue z-20 br'>
          {number}
        </p>
      </div>
      <h6 className='ml-6 font-medium'>
        {title}
      </h6>
    </div>
  )
}

export default FeatItem
