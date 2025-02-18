import './styles.scss';
import { HStack, Button } from "@chakra-ui/react"

export function Home() {
    return (
        <>
            <h1>Home teste</h1>

            <HStack wrap="wrap" gap="6">
                <Button colorPalette="green" variant="solid">Solid</Button>
                <Button colorPalette="green" variant="subtle">Subtle</Button>
                <Button colorPalette="green" variant="surface">Surface</Button>
                <Button colorPalette="green" variant="outline">Outline</Button>
                <Button colorPalette="green" variant="ghost">Ghost</Button>
                <Button colorPalette="green" variant="plain">Plain</Button>
            </HStack>
        </>
    )
}