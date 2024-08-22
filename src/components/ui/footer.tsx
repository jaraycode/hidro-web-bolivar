import React, {Component} from 'react';
//import { social_icons } from 'react-social-icons';
import Link from 'next/link';

const Footer = () => {
        const current_year = new Date();
        return (
            <div id="home-footer" className='bg-cyan-gradient flex flex-row gap-4 justify-center' >
                
                <div className='home-footer-elements'>
                    <h3>Redes sociales</h3>

                    <h2 className='hover:text-white'>Facebook</h2>
                    <h2 className='hover:text-white'>Instagram</h2>
                    <h2 className='hover:text-white'>Twitter</h2>
                </div>

                <div className='home-footer-elements'>
                    <h2>Ultimas Noticias</h2>

                    <p>Maduro chupalo.</p>
                </div>


                <div className='home-footer-elements'>
                    <h2>Accesos directos</h2>
                    <Link href='/' className='hover:text-white'>
                        Privacidad
                    </Link>

                    <Link href='/' className='hover:text-white'>
                        Terminos
                    </Link>

                    <Link href='/' className='hover:text-white'>
                        Servicios
                    </Link>
                </div>

                <div className='home-footer-elements'>
                    <h2>Contacto</h2>
                    <ul>
                        <li>753Q+7JX, Trans. B, Ciudad Guayana 8050, Bolívar</li>
                        <li>+58 0286-7129800</li>
                        <li>info@hidrobolivar.com</li>
                    </ul>
                </div>
      
            </div>
        )
}

export default Footer