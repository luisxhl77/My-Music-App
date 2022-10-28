import PropTypes from 'prop-types';
import './buttonLink.scss';

export const ButtonLink = ({name, link}) => {
  return (
    <a aria-label='buttonLink' href={link} className='buttonLink'>{name}</a>
  )
}

ButtonLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}