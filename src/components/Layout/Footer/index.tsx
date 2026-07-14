
import { FooterLinksData } from '@/app/utils/data'

const footer = () => {
  // footerlinks comes from FooterLinksData
  return (
    <div className='bg-black' id='first-section'>
      <div className='container mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8'>
          {/* COLUMN-1 */}
          <div className='col-span-4'>
            <h4 className='text-white text-3xl leading-9 mb-4 lg:mb-20'>
              Desgy Solutions
            </h4>
            <div className='flex items-center gap-4'>
              <div className='footer-icons'>
                <a href='https://facebook.com'>
                  <img
                    src={'/images/footer/vec.svg'}
                    alt='facebook'
                    width={15}
                    height={20}
                  />
                </a>
              </div>
              <div className='footer-icons'>
                <a href='https://twitter.com'>
                  <img
                    src={'/images/footer/twitter.svg'}
                    alt='twitter'
                    width={25}
                    height={20}
                  />
                </a>
              </div>
              <div className='footer-icons'>
                <a href='https://instagram.com'>
                  <img
                    src={'/images/footer/instagram.svg'}
                    alt='instagram'
                    width={25}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* CLOUMN-2/3 */}
          {FooterLinksData.map((item, i) => (
            <div key={i} className='group relative col-span-2'>
              <p className='text-white text-xl font-extrabold mb-9'>
                {item.section}
              </p>
              <ul>
                {item.links.map((item, i) => (
                  <li key={i} className='mb-5'>
                    <a
                      href={`${item.href}`}
                      className='text-white text-lg font-normal mb-6 space-links hover:text-white/60 hover:underline'>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* All Rights Reserved */}
      <div className='mx-auto max-w-2xl lg:max-w-7xl'>
        <div className='pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-t border-white/30'>
          <div className='mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8'>
            <div>
              <p className='text-center md:text-start text-white text-lg'>
                @2025 - All Rights Reserved by{' '}
                <a
                  href='https://getnextjstemplates.com/'
                  target='_blank'
                  className='hover:text-white/60 hover:underline'>
                  {' '}
                  GetNextJsTemplates.com
                </a>
              </p>
            </div>
            <div className='flex justify-center md:justify-end'>
              <a href='/'>
                <p className='text-base text-white pr-6 hover:text-white/60 hover:underline'>
                  Privacy policy
                </p>
              </a>
              <a href='/'>
                <p className='text-base text-white pl-6 border-solid border-l border-footer hover:text-white/60 hover:underline'>
                  Terms & conditions
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
