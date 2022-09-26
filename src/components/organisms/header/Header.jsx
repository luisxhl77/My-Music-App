import './header.scss';
import { DeploymentArrow } from "../../molecules/DeploymentArrow";
import { ProfileOptions } from '../../molecules/profileOptions/ProfileOptions';

export const Header = () => {
  return (
    <header className='header'>
      <DeploymentArrow/>
      <ProfileOptions/>
    </header>
  )
}