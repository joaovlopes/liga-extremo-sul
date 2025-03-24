import './styles.scss';
import Logo from '@/assets/logo.png'
import { MenuSlider } from '@/components/menu-slider/index'
import { MenuDesktop } from '@/components/menu-desktop/index'

import { CircleUser } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header className='header-container'>
            <MenuSlider />
            <NavLink to="/" className='login-button'>
                <img src={Logo} alt="Logo do campeonato" />
            </NavLink>
            <MenuDesktop />
            <NavLink to="/" className='login-button'>
                <CircleUser />
            </NavLink>
            
        </header>
    )
}