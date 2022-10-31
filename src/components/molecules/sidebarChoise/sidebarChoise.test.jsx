import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SiderbarChoice } from "./SidebarChoise";
import { Home } from "@mui/icons-material";

describe('Pruebas de <SiderbarChoise/> ', () => {
    
    const title = "Home" 
    const icon  = Home 
    const nav   = "/home"

    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( 
            <MemoryRouter>
                <SiderbarChoice/>
            </MemoryRouter>        
        );
        expect( container ).toMatchSnapshot();
    })

    test('debe de mostrar el nombre en H4 si tiene un icono', () => {
        
        render( 
            <MemoryRouter>
                <SiderbarChoice
                    title = {title} 
                    Icon  = {icon}
                    nav   = {nav} 
                />
            </MemoryRouter>
        );

        expect( screen.getByText( title )).toBe(screen.getByLabelText('title4'))
    })

    test('debe de mostrar el nombre en H5 si no hay un icono', () => {
        
        render( 
            <MemoryRouter>
                <SiderbarChoice
                    title = {title} 
                    nav   = {nav} 
                />
            </MemoryRouter>
        );

        expect( screen.getByText( title )).toBe(screen.getByLabelText('title5'))
    })

})