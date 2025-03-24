import './styles.scss';

import { NavLink } from 'react-router-dom'

export function MenuDesktop() {
    return (
        <div className='menuDesktop'>
            <NavLink to="/" title='Página principal' className='section-menu'>Inicio</NavLink>
            <NavLink to="/classificacao" title='Classificação' className='section-menu'>Classificação </NavLink>
            <NavLink to="/ranking" title='Rankings e votações' className='section-menu'>Ranking e votações</NavLink>
            <NavLink to="/midias" title='Fotos, videos e noticias' className='section-menu'>Fotos e videos</NavLink>
        </div>
    )
}