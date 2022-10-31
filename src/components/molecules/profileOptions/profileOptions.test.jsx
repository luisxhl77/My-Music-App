import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { ProfileOptions } from "./ProfileOptions"

describe('Prueba de <ProfileOptions/>', () => {
    const name  = 'Lucho Lopez';
    const image = 'https://avicii.com/avicii.jsg';
    const id    = 'asdasffeq';
    
    test('debe de hacer match con el snapshot' , () => {
        
        const { container } = render(
            <MemoryRouter>
                <ProfileOptions name={name} image={image} id={id}/> 
            </MemoryRouter>
        );
        expect( container ).toMatchSnapshot();
    })

    test('debe de mostrar el nombre del usuario' , () => {
        
        render(
            <MemoryRouter>
                <ProfileOptions name={name} image={image} id={id}/> 
            </MemoryRouter>
        );

        //investigar como mostrar los datos de un icono
        expect( screen.getByText( name )).toBe( screen.getByLabelText('nameUser') );
    })

    test('debe de ejecutar la funcion de onlogout' , () => {
        
        render(
            <MemoryRouter>
                <ProfileOptions name={name} image={image} id={id}/> 
            </MemoryRouter>
        );

        fireEvent.click( screen.getByLabelText('funtionOnLogout'));

    })

})