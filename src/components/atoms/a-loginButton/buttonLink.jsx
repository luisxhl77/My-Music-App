import './buttonLink.scss';

export const ButtonLink = ({name, link}) => {
  return (
    <a href={link} className='buttonLink'>{name}</a>
  )
}
