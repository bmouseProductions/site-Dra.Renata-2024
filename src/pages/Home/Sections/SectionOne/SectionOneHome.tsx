import balao from '../../../../assets/images/Home/balao.svg'
import renata from '../../../../assets/images/Home/renata.webp'
import Header from '../../../../components/Header/Header'

export default function SectionOneHome(){
    return ( 
      <>
        <section className="bg-banner ">
          <Header />

          <div className="relative conteiner mx-auto px-5 flex flex-col md:flex-row justify-center">

            <div className='max-w-[600px] flex flex-col  gap-6 md:pb-10'>
              <h1 className='font-title text-[70px] md:text-[90px] lg:text-[130px] text-[#ffd892] '>
                Saúde & Bem-estar
              </h1>
              <h3 className='text-xl font-semibold !text-white'>Transformando a terceira na melhor idade</h3>
              <p className=' !text-white'>
                A geriatria vai além de tratamentos médicos convencionais - é sobrenutrir a mente, o
                corpo e o espírito dos nossos idosos.
              </p>

              <div className='flex flex-col md:flex-row gap-5 md:gap-10 '>
                <a 
                  href=''
                  className='w-fit px-5 py-2 text-[#1d3273] bg-[#fbf8e7]  font-black rounded-3xl '
                >
                  Fale conosco
                </a>

                <a 
                  href="" 
                  target="_blank"
                  className=' flex gap-1'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11">
                    <path fillRule="evenodd" fill='#fff' className='bg-white' d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                  </svg>

                  <p className='py-2 px-5 text-white border-2 border-white rounded-3xl'>
                    Veja o vídeo!
                  </p>
                </a>
              </div>
            </div>

            <div className='flex mt-5 md:mt-0'>
              <img src={renata} alt="" className='w-full' />
            </div>
            
            <img 
              src={balao} 
              alt="" 
              className='absolute bottom-[-50px] md:bottom-0 md:right-0 lg:right-[10%] xl:right-[30%] '
            />
            
          </div>
        </section>
      </>
    )
}