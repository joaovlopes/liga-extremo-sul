import { NavLink } from 'react-router-dom';
import './styles.scss';
import { HStack, Button, Stack, Tag, Avatar } from "@chakra-ui/react"
import { Table } from "@chakra-ui/react"
import logoInter from "@/assets/logo-inter.png"

export function Championship() {
    const items = [
        { id: 1, name: "Internacional", pontos: 32, jogos: 12, vitorias: 9, empates: 2, derrotas: 1, saldoGols: 14 },
        { id: 2, name: "Flamengo", pontos: 30, jogos: 12, vitorias: 8, empates: 2, derrotas: 2, saldoGols: 12 },
        { id: 3, name: "Palmeiras", pontos: 29, jogos: 12, vitorias: 8, empates: 3, derrotas: 2, saldoGols: 10},
        { id: 4, name: "Santos", pontos: 29, jogos: 12, vitorias: 7, empates: 4, derrotas: 3, saldoGols: 8},
        { id: 5, name: "Fortaleza", pontos: 27, jogos: 12, vitorias: 7, empates: 3, derrotas: 3, saldoGols: 6},
        { id: 6, name: "Grêmio", pontos: 27, jogos: 12, vitorias: 7, empates: 3, derrotas: 3, saldoGols: 6},
      ]

    return (
        <main className='container-championship'>
            <div className="info-championship">
                <h1 color='#000'>Metropolitano 2025</h1>
                <HStack pb="4">
                    <p>Sub-15</p>
                    <Stack justifyItems="center">
                        <Tag.Root colorPalette="green">
                            <Tag.Label>Society</Tag.Label>
                        </Tag.Root>
                    </Stack>
                </HStack>

                <Table.Root size="sm" variant="line" striped showColumnBorder stickyHeader>
                    <Table.Header>
                        <Table.Row>
                        <Table.ColumnHeader htmlWidth="58%" fontWeight="bold">Equipes</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">P</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">J</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">V</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">E</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">D</Table.ColumnHeader>
                        <Table.ColumnHeader fontWeight="bold">SG</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {items.map((item) => (
                        <Table.Row key={item.id}>
                            <Table.Cell display="flex">
                            <Avatar.Root mr="2">
                                <Avatar.Fallback name="Segun Adebayo" />
                                <Avatar.Image src={logoInter} />
                            </Avatar.Root>
                                {item.name}
                            </Table.Cell>
                            <Table.Cell>{item.pontos}</Table.Cell>
                            <Table.Cell>{item.jogos}</Table.Cell>
                            <Table.Cell>{item.vitorias}</Table.Cell>
                            <Table.Cell>{item.empates}</Table.Cell>
                            <Table.Cell>{item.derrotas}</Table.Cell>
                            <Table.Cell>{item.saldoGols}</Table.Cell>     
                        </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>

                <HStack wrap="wrap" gap="6" mt="4" justifySelf="end">
                    <NavLink to="/" title='Página principal'>
                        <Button colorPalette="green" variant="solid">Voltar</Button>
                    </NavLink>
                </HStack>
            </div>

            <div className="tableOfGames">
                <h1>Tabela de Jogos</h1>
            </div>

            
        </main>
    )
}