export default function Footer() {
  return (
    <footer className='flex flex-wrap border-t border-t-border justify-center md:justify-between py-6 mt-16 md:mt-20'>
      <p className='ml-6 sm:ml-12 md:ml-28'>
        Copyright @ 2021 TAKEOFF LLC. - All Rights Reserved
      </p>
      <ul className='mr-6 sm:mr-12 md:mr-28 flex space-x-6'>
        <li>
          <a
            href='https://design.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Terms of Service
          </a>
        </li>

        <li>
          <a
            href='https://github.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href='https://github.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Cookie Policy
          </a>
        </li>
      </ul>
    </footer>
  )
}
