import { useSelector } from 'react-redux';
import { ProfileOptions, DeploymentArrow } from '../../molecules';
import './header.scss';

export const Header = () => {

  const { user } = useSelector(state => state.user);

  return (
    <header className='header'>
      <DeploymentArrow/>
      <ProfileOptions 
        name  = { user?.display_name } 
        image = { user?.images[0]?.url } 
        id    = { user?.id } 
      />
    </header>
  )
  
}