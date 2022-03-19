import {NavLink } from "react-router-dom";

type TProps= {
    name: string;
    Icon?: any;
    link: string;
}

export const SidebarLink: React.FC<TProps> = ({name, Icon, link}) => {
    return(
        <li>
            <NavLink to={link} className={(navData) => navData.isActive ? 'active' : ''}>
                {Icon ? <Icon/>: ''}
                <span>{name}</span>
            </NavLink>
        </li>
    )
}