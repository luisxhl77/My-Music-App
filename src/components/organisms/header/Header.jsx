import './header.scss';
import { ProfileOptions } from '../../molecules/profileOptions/ProfileOptions';
import { DeploymentArrow } from '../../molecules/deploymentArrow/DeploymentArrow';

export const Header = () => {
  return (
    <header className='header'>
      <DeploymentArrow/>
      <ProfileOptions/>
    </header>
  )
}