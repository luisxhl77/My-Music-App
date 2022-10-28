import { render, screen } from "@testing-library/react"
import { ButtonLink } from "./buttonLink";

describe('Pruebas de <ButtonLink/>', () => {

    const name = 'iniciar sesion'; 
    const link = 'https://login.com/';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <ButtonLink name={name} link={link}/>)
        expect(container).toMatchSnapshot();

    })

    test('debe de mostrar el nombre del boton', () => {
        
        render( <ButtonLink name={name} link={link}/>)
        
        expect( screen.getByText(name) ).toBe(screen.getByLabelText('buttonLink'));

    })
    
    test('debe de mostrar el URL del boton', () => {
        
        render( <ButtonLink name={name} link={link}/>)
        
        const { href } = screen.getByLabelText('buttonLink');
        expect( href ).toBe( link );

    })

})