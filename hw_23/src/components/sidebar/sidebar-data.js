import {Book, Home, RedoIcon, Users} from 'lucide-react';

export const menuItemsData = [

    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: Home,
        link: 'smiles',
        order: 1
    },

    {
        id: 'Counter-Redux',
        label: 'Counter-Redux',
        icon: RedoIcon,
        link: 'counter-redux',
    },

    {
        id: 'Learning',
        label: 'Learning tracker',
        icon: Book,
        link: 'learning',
    },
    {
        id: 'users',
        label: 'Users',
        icon: Users,
        children: [
            {
                id: 'all-users',
                label: 'All Users',
                link: '#users/all',
            },
            {
                id: 'add-user',
                label: 'Add User',
                link: '#users/add',
            },
            {
                id: 'roles',
                label: 'Roles',
                link: '#users/roles',
            },
        ],
    }
]