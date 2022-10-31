import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Card } from "./Card";

describe('Pruebas de <Card/>', () => {

    const id          = 'ID_2174123';
    const type        = 'Playlist';
    const name        = 'This is Avicii';
    const image       = 'https://avicii.com/avicii.jsg';
    const description = 'Avicii';
    
    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render(
            <MemoryRouter>
                <Card
                    id          = { id }
                    type        = { type }
                    name        = { name }
                    image       = { image }
                    description = { description }
                /> 
            </MemoryRouter>
        );
        
        expect( container ).toMatchSnapshot();
    })

    test('debe de mostrar src de la imagen', () => {
   
        render(
            <MemoryRouter>
                <Card
                    id          = { id }
                    type        = { type }
                    name        = { name }
                    image       = { image }
                    description = { description }
                /> 
            </MemoryRouter>
        );

        const { src } = screen.getByLabelText('imageCard');
        expect( src ).toBe( image );

    })

    test('debe de mostrar el nombre el tipo y la descripcion de la card', () => {
   
        render(
            <MemoryRouter>
                <Card
                    id          = { id }
                    name        = { name }
                    type        = { type }
                    image       = { image }
                    description = { description }
                /> 
            </MemoryRouter>
        );

        expect( screen.getByText(    name     ) ).toBe( screen.getByLabelText(     'nameCard'    ) );
        expect( screen.getByText(    type     ) ).toBe( screen.getByLabelText(     'typeCard'    ) );
        expect( screen.getByText( description ) ).toBe( screen.getByLabelText( 'descriptionCard' ) );

    })

})