import './styles.scss';
import { Avatar, Button, Card, HStack, Stack, Tag, Text } from "@chakra-ui/react";
import logoCampeonato from "@/assets/logoTeste.png"
import { NavLink } from 'react-router-dom';

export function Categories({ data }: { data: any }) {
    const tagGeneroColor = data.genero.toLowerCase() === 'feminino' ? 'pink' : 'blue'
    const tagModalidadeColor = data.modalidade.toLowerCase() === 'futsal' ? 'orange' : 'green'

    return (
        <NavLink to="/championship">
            <Card.Root width="320px" size="sm" variant="elevated" className='hoverCard'>
                <Card.Body gap="2" textAlign="center" alignItems="center">
                    <Tag.Root colorPalette={tagGeneroColor} alignSelf="center">
                        <Tag.Label>{data.genero}</Tag.Label>
                    </Tag.Root>
                    <HStack>
                        <Avatar.Root size="xl" shape="rounded">
                        <Avatar.Image src={logoCampeonato} />
                        <Avatar.Fallback name="Nue Camp" />
                        </Avatar.Root>

                        <Stack>
                            <Text fontWeight="semibold"> {data.nameCampeonato}</Text>
                        </Stack>
                    </HStack>
                    <HStack justifyContent="space-evenly">
                        <Card.Title mt="2">{data.categoria}</Card.Title>
                        <Stack>
                            <Tag.Root colorPalette={tagModalidadeColor}>
                                <Tag.Label>{data.modalidade}</Tag.Label>
                            </Tag.Root>
                        </Stack>
                    </HStack>
                    <Card.Description>
                        {data.data}
                    </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button variant="surface" colorPalette="green">Acessar</Button>
                </Card.Footer>
            </Card.Root>
        </NavLink>
    )
}