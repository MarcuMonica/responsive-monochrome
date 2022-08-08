import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';

export default function Header () {
    return (
        <header className="header-inner">
            <HeaderSecondary></HeaderSecondary>
            <HeaderPrimary></HeaderPrimary>
        </header>
    )
}