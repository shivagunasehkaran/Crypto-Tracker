import React from 'react';

//public
const DashBoard = React.lazy(() => import('../views/DashBoard'));
const AddCryptoCurrency = React.lazy(() =>
  import('../views/AddCryptoCurrency'),
);

// page names - public stack
export const pageNamePublicStack = 'PublicStack';

// pages - public
export const pageDashBoard = DashBoard;
export const pageAddCryptoCurrency = AddCryptoCurrency;

// page names
export const pageNameDashBoard = 'DashBoard';
export const pageNameAddCryptoCurrency = 'AddCryptoCurrency';
