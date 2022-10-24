import PropTypes from 'prop-types';
import './buttonLink.scss';

export const ButtonLink = ({name, link}) => {
  return (
    <a href={link} className='buttonLink'>{name}</a>
  )
}

ButtonLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}