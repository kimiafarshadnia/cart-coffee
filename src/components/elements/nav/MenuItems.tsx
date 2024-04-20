import { NavLink } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    NavItem
} from 'reactstrap';
import { uid
 } from '../../../utils/Utils';

const MenuItem = ({ menu }) => {
    const LinkTag = ({
        isLink,
        ...props
    }: {
        isLink: boolean;
        [x: string]: any;
    }) => {
        if (isLink) {
            return (
                <NavLink
                    id={menu.id}
                    to={menu.to}
                    className={(navData) => (navData.isActive ? "text-medium text-black" : "")}
                >{menu.label}</NavLink>
            );
        } else {
            return <div className='text-dark'>{props.children}</div>;
        }
    };
    return (
        <NavItem key={menu.id}>
            <LinkTag
                isLink={!menu?.subs}
                to={menu.to}
                label={menu.label}
            >
                {menu?.subs && (
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            {menu.label}
                        </DropdownToggle>
                        <DropdownMenu>
                            {menu.subs?.map((sub) =>
                            (
                                <DropdownItem key={uid()}>
                                    <NavLink
                                        to={sub.to}
                                        className={(navData) => (navData.isActive ? "text-medium text-black" : "")}
                                    >
                                        {sub.label}
                                    </NavLink>
                                </DropdownItem>)
                            )}
                        </DropdownMenu>
                    </UncontrolledDropdown>

                )}
            </LinkTag>
        </NavItem>

    )
};

export default MenuItem;