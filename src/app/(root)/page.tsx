import HomeNavbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    
    <div className='main'>
      <HomeNavbar/>

      <div className='mainDiv border-2 border-red-800  w-full'>
        
          <h1 className='bigTitle'>:c </h1>
          <div className='research'>1234</div>
          <div className='line'/>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
      </div>

      <Footer/>
    </div>
  );
}

