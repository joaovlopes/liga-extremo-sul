import { NavLink } from 'react-router-dom';
import './styles.scss';
import { HStack, Button } from "@chakra-ui/react"

export function Ranking() {
    return (
        <main className='container-ranking'>
            <h1 color='#000'>Ranking</h1>

            <HStack wrap="wrap" gap="6">
                <NavLink to="/" title='Página principal'>
                    <Button colorPalette="green" variant="subtle">Voltar</Button>
                </NavLink>
            </HStack>
        </main>
    )
}   