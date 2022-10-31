import { render, screen } from "@testing-library/react"
import { DescriptionsList } from "./descriptionsList"

describe('Pruebas de <DescriptionList/>', () => {
    const name = 'Wake Me Up'; 
    const owner = 'Avicii'; 
    const images = 'https://avicii.com/avicii.jsg'; 
    const tracks = 10;
    const followers = 180; 

    test('Debe de hacer match con el snapshot', () =>{

        const { container } = render( <DescriptionsList 
            name      = { name }
            owner     = { owner }
            images    = { images }
            tracks    = { tracks }
            followers = { followers }
        />);
        expect( container ).toMatchSnapshot();
    
    })

    test('debe de mostrar src de la imagen', () => {
   
        render( <DescriptionsList 
            name      = { name }
            owner     = { owner }
            images    = { images }
            tracks    = { tracks }
            followers = { followers }
        />);

        const { src } = screen.getByLabelText('imageDescription');
        expect( src ).toBe( images );

    })

    test('debe de mostrar el name, owner, tracks y followers', () => {
   
        render( <DescriptionsList 
            name      = { name }
            owner     = { owner }
            images    = { images }
            tracks    = { tracks }
            followers = { followers }
        />);

        expect( screen.getByText( name  ) ).toBe( screen.getByLabelText('nameList'));
        expect( screen.getByText( owner ) ).toBe( screen.getByLabelText('ownerList'));
        expect( screen.getByText( tracks ) ).toBe( screen.getByLabelText('tracksList'));
        expect( screen.getByText( followers ) ).toBe( screen.getByLabelText('followersList'));
    })

})