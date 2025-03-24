import './styles.scss';
import { HStack, Button } from "@chakra-ui/react"

export function Ranking() {
    return (
        <>
            <h1 color='#000'>Ranking teste</h1>

            <HStack wrap="wrap" gap="6">
                <Button colorPalette="green" variant="subtle">Subtle</Button>
            </HStack>
        </>
    )
}