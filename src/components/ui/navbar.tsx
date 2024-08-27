import Image from 'next/image';
import Link from 'next/link';

const HomeNavbar = () => {

  return (
    <div className='home-navbar'>
        
        <div className='home-navbar-elements'>
            <Link href='/'>
                <Image 
                    src='/logo-hidro.png'
                    width={125}
                    height={125}
                    alt='Logo de hidrobolivar'
                />
            </Link>
        </div>

        <div className='home-navbar-elements'>
            <Link href='/nosotros'>
                <div className='flex w-30 p-2'>
                    <button className='btn-primary btn-primary-right'>Nosotros</button>
                </div>
            </Link>
            
            <Link href='/noticias'>
                <div className='flex w-30 p-2'>
                    <button className='btn-primary btn-primary-right'>Noticias</button>
                </div>
            </Link>

            <Link href='pagos'>
                <div className='flex w-30 p-2'>
                    <button className='btn-primary btn-primary-right'>Métodos de pago</button>
                </div>
            </Link>                     
        </div>
    </div>
  );

}

export default HomeNavbar