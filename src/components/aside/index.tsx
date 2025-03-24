import './styles.scss';

import { Card, Image, Text, HStack, Tag } from "@chakra-ui/react"
import { ClipboardIconButton, ClipboardRoot } from "@/components/ui/clipboard"
import logoCampeonato from '@/assets/ligaExtremoSul.png'

export function AsideHomePage() {
    return (
        <aside className='aside-container'>
            <Card.Root maxW="sm" overflow="hidden" colorPalette="green">
                <Image
                    src={logoCampeonato}
                    alt="Green double couch with wooden legs"
                />
                <Card.Body gap="2">
                    <Card.Title>Metropolitano 2025</Card.Title>
                    <Card.Description>
                    Liga extremo sul
                    </Card.Description>
                    <Card.Description>
                        Inicio: 03/03/2025
                    </Card.Description>
                    <Card.Description>
                        Término: 30/11/2025
                    </Card.Description>
                    <Card.Description>
                        Organizador: Marco Antonio Silva Anacleto
                    </Card.Description>
                    
                    <Text textStyle="md" fontWeight="medium" letterSpacing="tight" mt="2">
                        Campeonato de base 
                    </Text>
                    <HStack>
                        <Card.Description>
                        Modalidades:
                        </Card.Description>
                        <Tag.Root colorPalette="orange">
                            <Tag.Label>Futsal</Tag.Label>
                        </Tag.Root>
                        <Tag.Root colorPalette="green">
                            <Tag.Label>Society</Tag.Label>
                        </Tag.Root>
                    </HStack>
                    <HStack>
                        <Card.Description>
                        Gêneros:
                        </Card.Description>
                        <Tag.Root colorPalette="blue">
                            <Tag.Label>Masculino</Tag.Label>
                        </Tag.Root>
                        <Tag.Root colorPalette="pink">
                            <Tag.Label>Feminino</Tag.Label>
                        </Tag.Root>
                    </HStack>
                    <Text textStyle="md" fontWeight="medium" letterSpacing="tight" mt="2">
                        Contatos
                    </Text>
                    <HStack>
                        <Card.Description>
                        Marco Antonio: 51 983460874
                        </Card.Description>
                        <ClipboardRoot value="51 98031-9583">
                            <ClipboardIconButton />
                        </ClipboardRoot>
                    </HStack>

                    <HStack>
                        <Card.Description>
                        Antonio Marcos: 51 986452379
                        </Card.Description>
                        <ClipboardRoot value="51 986452379">
                            <ClipboardIconButton />
                        </ClipboardRoot>
                    </HStack>
                </Card.Body>
                <Image
                    src={logoCampeonato}
                    alt="Green double couch with wooden legs"
                />
            </Card.Root>
        </aside>
    )
}



