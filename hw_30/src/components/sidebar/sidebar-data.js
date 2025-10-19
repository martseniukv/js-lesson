import {Book, Home, ListTodoIcon, Mail,} from 'lucide-react';

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
        icon: null,
        link: 'counter-redux',
    },
    {
        id: 'Learning',
        label: 'Learning tracker',
        icon: Book,
        link: 'learning',
    },
    {
        id: 'Posts',
        label: 'Posts',
        icon: Mail,
        link: 'posts-redux',
    },
    {
        id: 'function-todo',
        label: 'Todo functional',
        icon: ListTodoIcon,
        link: 'todos',
    },
    {
        id: 'todo-redux',
        label: 'Todo redux',
        icon: ListTodoIcon,
        link: 'todos-redux',
    }
]