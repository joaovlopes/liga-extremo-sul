import './styles.scss';
import { HStack, Button } from "@chakra-ui/react"

export function Classificao() {
    return (
        <>
            <h1 color='#000'>Classificação teste</h1>

            <HStack wrap="wrap" gap="6">
                <Button colorPalette="green" variant="subtle">Subtle</Button>
            </HStack>
        </>
    )
}