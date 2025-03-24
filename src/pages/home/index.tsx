import { Categories } from '@/components/categories';
import './styles.scss';

import { AsideHomePage } from '@/components/aside/index'


export function Home() {
    const dataCampeonato:any = [
        {
            nameCampeonato: "Metropolitano Plus",
            genero: "Masculino",
            modalidade: "Society",
            categoria: "Sub-15",
            data: "27 de abril de 2025 - 30 de novembro 2025"
        },
        {
            nameCampeonato: "Metropolitano Plus",
            genero: "Masculino",
            modalidade: "Futsal",
            categoria: "Sub-17",
            data: "27 de abril de 2025 - 30 de novembro 2025"
        },
        {
            nameCampeonato: "Metropolitano",
            genero: "Feminino",
            modalidade: "Futsal",
            categoria: "Sub-15",
            data: "27 de abril de 2025 - 30 de novembro 2025"
        },
        {
            nameCampeonato: "Metropolitano",
            genero: "Feminino",
            modalidade: "Society",
            categoria: "Sub-17",
            data: "27 de abril de 2025 - 30 de novembro 2025"
        },
        {
            nameCampeonato: "Metropolitano",
            genero: "Masculino",
            modalidade: "Futsal",
            categoria: "Sub-15",
            data: "27 de abril de 2025 - 30 de novembro 2025"
        },
        {
            nameCampeonato: "Metropolitano Plus",
            genero: "Masculino",
            modalidade: "Society",
            categoria: "Sub-17",
            data: "27 de abril de 2025 - 30 de novembro 2025"
        },
        {
            nameCampeonato: "Metropolitano Plus",
            genero: "Masculino",
            modalidade: "Society",
            categoria: "Sub-17",
            data: "27 de abril de 2025 - 30 de novembro 2025"
        },
        {
            nameCampeonato: "Metropolitano Light",
            genero: "Masculino",
            modalidade: "Society",
            categoria: "Sub-17",
            data: "27 de abril de 2025 - 30 de novembro 2025"
        },
        {
            nameCampeonato: "Metropolitano Light",
            genero: "Feminino",
            modalidade: "Futsal",
            categoria: "Sub-17",
            data: "27 de abril de 2025 - 30 de novembro 2025"
        },
        {
            nameCampeonato: "Metropolitano Light",
            genero: "Feminino",
            modalidade: "Society",
            categoria: "Sub-15",
            data: "27 de abril de 2025 - 30 de novembro 2025"
        }
    ];


    return (
        <>
            <AsideHomePage/>

            <main className='mainHomePage'>
                <h1>Categorias</h1>

                <div className="container-categories">
                    {dataCampeonato.map((data, index) => {
                        return <Categories data={data} key={index}/>
                    })}
                </div>
                
            </main>
        </>
    )
}