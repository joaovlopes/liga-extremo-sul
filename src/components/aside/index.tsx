import './styles.scss';

import apoiadoresImage from '@/assets/apoiadoresMarcas.jpg'

import { Tag } from "@chakra-ui/react"
import { ClipboardIconButton, ClipboardRoot } from "@/components/ui/clipboard"

export function AsideHomePage() {
    return (
        <aside className='aside-container'>
            <div className='section-info'>
                <h2>Metropolitano 2025</h2>
                <p>Liga Extremo Sul</p>
                <p>Inicio: 03/03/2025</p>
                <p>Terminio: 30/11/2025</p>
                <p>Organizador: Marco Antonio Silva Anacleto</p>
            </div>

            <div className='section-info'>
                <h2>Campeonato de base</h2>
                <div>
                    <p>Modalidades:</p>
                    <Tag.Root colorPalette="orange">
                        <Tag.Label>Futsal</Tag.Label>
                    </Tag.Root>
                    <Tag.Root colorPalette="green">
                        <Tag.Label>Society</Tag.Label>
                    </Tag.Root>
                </div>
                <div>
                    <p>Gêneros:</p>
                    <Tag.Root colorPalette="blue">
                        <Tag.Label>Masculino</Tag.Label>
                    </Tag.Root>
                    <Tag.Root colorPalette="pink">
                        <Tag.Label>Feminino</Tag.Label>
                    </Tag.Root>
                </div>
            </div>

            <div className='section-info'>
                <h2>
                    Contatos
                </h2>

                <div>
                    <p>
                    Marco Antonio: 51 983460874
                    </p>
                    <ClipboardRoot value="51 98031-9583" colorPalette="green">
                        <ClipboardIconButton />
                    </ClipboardRoot>
                </div>

                <div>
                    <p>
                    Antonio Marcos: 51 986452379
                    </p>
                    <ClipboardRoot value="51 986452379" colorPalette="green">
                        <ClipboardIconButton />
                    </ClipboardRoot>
                </div>
            </div>

            <div className='footer-info'>
                <h2>
                    Apoio:
                </h2>
                <img src={apoiadoresImage} alt="" />
            </div>
        </aside>
    )
}



