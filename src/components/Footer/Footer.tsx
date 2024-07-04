import { useNavigate } from 'react-router-dom'

import banner from '../../assets/images/banner-footer.png'

export default function Footer() {
    const navigate = useNavigate(); // Obtém a função de navegação do react-router-dom

    const handleClick = () => {
        window.scrollTo(0,0);
        navigate('/celebre', { replace: true }); // Navega para a rota "/celebre" e substitui a entrada no histórico
    };
    return (
        <footer className='bg-gradient-to-b from-[#f9f9f9] to-[#ffd78f] '>
            <div className="bg-footer flex flex-col items-center py-[70px] md:py-[100px] rounded-[30px] ">
                <img src={banner} className='w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] ' alt="" />
                <button 
                    onClick={handleClick}
                    className="mt-8 px-7 py-3 max-w-[200px] text-[#1d3273] text-center text-2xl font-black rounded-3xl bg-[#ffd78f] hover:bg-[#fbf8e7] hover:text-[#e57870]"
                >
                    Saiba Mais
                </button>
            </div>

            <div className='py-14 flex flex-col md:flex-row justify-around'>
                <p className=' text-center'>
                    <strong>Copyright</strong> © 2024 - Dra. Renata Caldeira
                </p>

                <a 
                    className='flex justify-center'
                    href="bmouseproctions.com"
                >
                    Desenvolvido por <strong className='ml-2'>Bmouse Productions</strong>
                </a>
            </div>
        </footer>
    )
}