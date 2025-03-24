import './styles.scss';
import { HStack, Button } from "@chakra-ui/react"

export function Midias() {
    return (
        <>
            <h1>Midia teste</h1>

            <HStack wrap="wrap" gap="6">
                <Button colorPalette="green" variant="subtle">Subtle</Button>
            </HStack>
        </>
    )
}