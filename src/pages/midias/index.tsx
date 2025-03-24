import { NavLink } from 'react-router-dom';
import './styles.scss';
import { HStack, Button } from "@chakra-ui/react"

export function Midias() {
    return (
        <main className='container-midias'>
            <h1>Midia</h1>

            <HStack wrap="wrap" gap="6">
                <NavLink to="/" title='Página principal'>
                    <Button colorPalette="green" variant="subtle">Voltar</Button>
                </NavLink>
            </HStack>
        </main>
    )
}