import './styles.scss';
import Logo from '@/assets/logo.png'
import { MenuSlider } from '@/components/menu-slider/index'

export function Header() {
    return (
        <header className='header-container'>
            <h1>Header teste</h1>
            <MenuSlider />
            <img src={Logo} alt="" />
        </header>
    )
}