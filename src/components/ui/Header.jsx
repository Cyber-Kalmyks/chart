import { Link } from 'react-router-dom'
import { path } from '../path/Path'
import cls from '../style/Header.module.scss'

const Header = () => {
    return (
        <>
            <div className={cls.mainHeader}>
                <div className={cls.mainContainer}>
                    {path.map((item) => (
                        <Link to={item.path} key={item.id}>
                            <div className={cls.box} >{item.id}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Header