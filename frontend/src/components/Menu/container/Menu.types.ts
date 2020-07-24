import { MenuProps } from '../Menu.types';

export type MenuStateToProps = Pick<MenuProps, 'userId' | 'userEmail'>;

export type MenuDispatchToProps = Pick<MenuProps, 'onSetUserData'>;
