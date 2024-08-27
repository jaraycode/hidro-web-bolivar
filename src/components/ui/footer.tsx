import React, {Component} from 'react';
//import { social_icons } from 'react-social-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
        const current_year = new Date();
        return (
            <div className='home-footer bg-cyan-gradient flex flex-row gap-4 justify-center' >
                
                <div className='home-footer-elements'>
                    <h2 className='text-16-semibold'>Redes sociales</h2>
                    <div className='flex justify-between gap-4'>
                        <FontAwesomeIcon icon={faFacebook} size='xl'/>
                        <div className='lineFooter'/>
                        <FontAwesomeIcon icon={faInstagram} size='xl'/>
                        <div className='lineFooter'/>
                        <FontAwesomeIcon icon={faTwitter} size='xl'/>
                    </div>
                </div>

                <div className='home-footer-elements'>
                    <h2 className='text-16-semibold'>Ultimas Noticias</h2>

                    <p className='text-14-regular'>Llego el agua.</p>
                </div>


                <div className='home-footer-elements'>
                    <h2 className='text-16-semibold'>Accesos directos</h2>
                    <Link href='/' className='text-14-regular hover:text-white'>
                        Privacidad
                    </Link>

                    <Link href='/' className='text-14-regular hover:text-white'>
                        Terminos
                    </Link>

                    <Link href='/' className='text-14-regular hover:text-white'>
                        Servicios
                    </Link>
                </div>

                <div className='home-footer-elements'>
                    <h2 className='text-16-semibold'>Contacto</h2>
                    <ul className='gap-2 flex flex-col'>
                        <div className='flex flex-row gap-1'>
                            <FontAwesomeIcon icon={faLocationDot} size='lg' className='p-1'/>
                            <li className='text-14-regular'>753Q+7JX, Trans. B, Ciudad Guayana 8050, Bolívar</li>
                        </div>
                         
                        <div className='flex flex-row gap-1'>
                            <FontAwesomeIcon icon={faWhatsapp} size='lg'/>
                            <li className='text-14-regular'>+58 0286-7129800</li>
                        </div>

                        <div className='flex flex-row gap-1'>
                            <FontAwesomeIcon icon={faEnvelope} size='lg'/>
                            <li className='text-14-regular'>info@hidrobolivar.com</li>
                        </div>
                    </ul>
                </div>
      
            </div>
        )
}

export default Footer