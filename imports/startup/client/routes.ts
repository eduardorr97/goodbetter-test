import PeopleIcon from '@material-ui/icons/People';
import DomainIcon from '@material-ui/icons/Domain';
import { RouteType } from '../both/globalTypes';
import EditIcon from '@material-ui/icons/Edit';

export const routes: RouteType[] = [
  { title: 'Pivot index', href: '/pivot-index', icon: DomainIcon },
  { title: 'Add User', href: '/addUser', icon: PeopleIcon },
  { title: 'Edit User', href: '/editUser', icon: EditIcon },
];
