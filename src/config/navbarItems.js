export const NAV_ITEMS = [
    {
        label: 'Inicio',
        href: '/',
    },
    {
        label: 'Buscar',
        children: [
            {
                label: 'Buscar alquiler',
                subLabel: 'Encuentra tu proximo hogar',
                href: '/buscar',
            },
            {
                label: 'Buscar Compañero de cuarto',
                subLabel: 'Encuentra a tu compañero de cuarto compatible ideal para ti',
                href: '/buscar/roommate',
            },
        ],
    },
    {
        label: 'Nosotros',
        href: '/integrantes',
    },
    {
        label: 'Acerca de',
        href: '/acerca',
    },
];