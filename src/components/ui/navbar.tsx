import Image from 'next/image';

const HomeNavbar = () => {

  return (
    <div className='home-navbar'>
        
        <div className='home-navbar-elements'>
            <Image 
                src='/logo-hidro.png'
                width={125}
                height={125}
                alt='Logo de hidrobolivar'
            />
        </div>

        <div className='home-navbar-elements'>
            <div className='flex w-30 p-2'>
                <button className='btn-primary btn-primary-right'>Noticias</button>
            </div>

            <div className='flex w-30 p-2'>
                <button className='btn-primary btn-primary-right'>Nosotros</button>
            </div>
        </div>
    </div>
  );

}

export default HomeNavbar