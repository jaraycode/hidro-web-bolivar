import React, {Component} from 'react';
//import { social_icons } from 'react-social-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faFacebook, faInstagram, faMailchimp, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
        const current_year = new Date();
        return (
            <div className='home-footer bg-cyan-gradient flex flex-row gap-4 justify-center' >
                
                <div className='home-footer-elements'>
                    <h2 className='text-16-semibold'>Redes sociales</h2>
                    <div className='flex justify-between gap-4'>
                        <FontAwesomeIcon icon={faFacebook} size='xl'/>
                        <FontAwesomeIcon icon={faInstagram} size='xl'/>
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
                    <ul>
                        <div className='gap-1 flex flex-row'>
                            <FontAwesomeIcon icon={faMailchimp} size='xl' className='p-1'/>
                            <li className='text-14-regular'>753Q+7JX, Trans. B, Ciudad Guayana 8050, Bolívar</li>
                        </div>
                         
                        <div className='gap-2 flex flex-row'>
                            <FontAwesomeIcon icon={faWhatsapp} size='xl'/>
                            <li className='text-14-regular'>+58 0286-7129800</li>
                        </div>

                        <div className='gap-2 flex flex-row'>
                            <FontAwesomeIcon icon={faAmazon} size='xl'/>
                            <li className='text-14-regular'>info@hidrobolivar.com</li>
                        </div>
                    </ul>
                </div>
      
            </div>
        )
}

export default Footer