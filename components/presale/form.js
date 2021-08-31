const Form = () => {
  return (
    <section className='my-16 md:my-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-40 md:gap-y-0 gap-y-12'>
        <div className='flex flex-col'>
          <h4 className='mb-10 md:mb-16'>Contact info</h4>
          <label
            htmlFor='full-name'
            className='block text-sm font-medium text-gray-500'
          >
            Full-name
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='full-name'
              id='full-name'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='full name'
            />
          </div>
          <br />
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-500'
          >
            Email
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='email'
              id='email'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='you@example.com'
            />
          </div>
          <br />
          <label
            htmlFor='company'
            className='block text-sm font-medium text-gray-500'
          >
            Company
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='company'
              id='company'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='company(optional)'
            />
          </div>
          <br />
          <label
            htmlFor='telegram'
            className='block text-sm font-medium text-gray-500'
          >
            Telegram
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='telegram'
              id='telegram'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='telegram(optional)'
            />
          </div>
          <br />
          <label
            htmlFor='discord'
            className='block text-sm font-medium text-gray-500'
          >
            Discord
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='discord'
              id='discord'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='discord(optional)'
            />
          </div>
        </div>

        <div className='flex flex-col'>
          <h4 className='mb-10 md:mb-16'>Token</h4>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-500'
          >
            Name
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='name'
              id='name'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='name'
            />
          </div>
          <br />
          <label
            htmlFor='symbol'
            className='block text-sm font-medium text-gray-500'
          >
            Symbol
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='symbol'
              id='symbol'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='symbol'
            />
          </div>
          <br />
          <label
            htmlFor='website'
            className='block text-sm font-medium text-gray-500'
          >
            Website
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='website'
              id='website'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='website'
            />
          </div>
          <br />
          <div className='flex gap-x-3 items-center mt-0 md:mt-6'>
            <label
              htmlFor='logo'
              className='block text-sm font-medium text-gray-500'
            >
              Logo
            </label>
            <div className='mt-1'>
              <input
                type='file'
                name='logo'
                id='logo'
                className='shadow p-2  focus:ring-gray-500 focus:border-gray-500 block w-26 sm:col-span-3 sm:text-sm rounded-sm'
                placeholder='upload'
              />
            </div>
          </div>
          <br />
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-500'
          >
            Description
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='description'
              id='description'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='description'
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 items-stretch md:grid-cols-2 gap-x-12 md:gap-x-40 md:gap-y-0 gap-y-12'>
        <div className='flex flex-col'>
          <h4 className='my-10 md:my-16'>Parameters</h4>
          <label
            htmlFor='presale-rate'
            className='block text-sm font-medium text-gray-500'
          >
            Presale rate
          </label>
          <div className='mt-1 relative'>
            <input
              type='text'
              name='presale-rate'
              id='presale-rate'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='presale rate'
            />
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <svg
                className='h-5 w-5 text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
          </div>
          <br />
          <label
            htmlFor='soft-cap'
            className='block text-sm font-medium text-gray-500'
          >
            Soft cap
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='soft-cap'
              id='soft-cap'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='soft cap'
            />
          </div>
          <br />
          <label
            htmlFor='hard-cap'
            className='block text-sm font-medium text-gray-500'
          >
            Hard cap
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='hard-cap'
              id='hard-cap'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='hard-cap'
            />
          </div>
          <br />
          <label
            htmlFor='min-contribution'
            className='block text-sm font-medium text-gray-500'
          >
            Min contribution
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='min-contribution'
              id='min-contribution'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='min-contribution'
            />
          </div>
          <br />
          <label
            htmlFor='max-contribution'
            className='block text-sm font-medium text-gray-500'
          >
            Max contribution
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='max-contribution'
              id='max-contribution'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='max-contribution'
            />
          </div>
          <br />
          <label
            htmlFor='governance-rate'
            className='block text-sm font-medium text-gray-500'
          >
            Governance rate
          </label>
          <div className='mt-1 relative'>
            <input
              type='text'
              name='governance-rate'
              id='governance-rate'
              className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='governance rate'
            />
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <svg
                className='h-5 w-5 text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <h4 className='my-10 md:my-16'>Additional info / MISC</h4>
          <label
            htmlFor='info'
            className='block text-sm font-medium text-gray-500'
          >
            Additional info
          </label>
          <div className='mt-1'>
            <textarea
              type='text'
              name='info'
              rows='10'
              id='info'
              className='shadow-sm p-2 max-h-full bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:col-span-3 sm:text-sm rounded-sm'
              placeholder='Dan knows'
            />
          </div>
          <button
            type='button'
            className='flex mt-6 ml-auto items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-b-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Send
          </button>
        </div>
      </div>
    </section>
  )
}

export default Form
