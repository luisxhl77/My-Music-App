import { ProfileOptions, DeploymentArrow } from '../../molecules';
import './header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <DeploymentArrow/>
      <ProfileOptions/>
    </header>
  )
}