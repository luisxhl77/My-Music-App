import { render, screen } from "@testing-library/react"
import { SongRow } from "./SongRow"

describe('Prubas de <songRow/> ', () => {

    const id = '102837asd'; 
    const name = 'Wake Me Up'; 
    const image = 'https://avicii.com/avicii.jsg';
    const artist = 'Avicii';
    
    test('debe de hacer match con el snapshop', () => {
        const { container } = render(
            <SongRow
                id = {id}
                name = {name}
                image = {image}
                artist = {artist}
            />
        );

        expect( container ).toMatchSnapshot();
    })

    test('debe de mostrar el nombre de la cancion y el artista', () => {
        render(
            <SongRow
                id = {id}
                name = {name}
                image = {image}
                artist = {artist}
            />
        );

        expect( screen.getByText( name ) ).toBe( screen.getByLabelText('titleSong'));
        expect( screen.getByText( artist ) ).toBe( screen.getByLabelText('artisSong'));

    })

    test('debe de ser igual el src y el id con los argumentados mandados', () => {
        render(
            <SongRow
                id = {id}
                name = {name}
                image = {image}
                artist = {artist}
            />
        );

        const { src, alt } = screen.getByLabelText('imageSong');

        expect( src ).toBe( image );
        expect( alt ).toBe( id );

    })
    
})