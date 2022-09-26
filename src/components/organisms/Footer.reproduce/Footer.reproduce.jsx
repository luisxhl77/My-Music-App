import { FooterCenter } from "../../molecules/footerCenter/FooterCenter";
import { FooterLeft } from "../../molecules/footerleft/FooterLeft";
import { FooterRight } from "../../molecules/footerRight/FooterRight";
import './footer.reproduce.scss';

export const FooterReproduce = () => {
  return (
    <footer className="footer">
      <FooterLeft/>
      <FooterCenter/>
      <FooterRight/>    
    </footer>
  )
}