import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Rental | Find The Perfect Rental',
    description: 'Find your dream rental apartment',
    keywords: 'Rental, Apartment, Find Rental apartment'

}

const MainLayout = ({children}) => {
  return (
    <html lang='eng'>
    <body>
    <div>
        {children}
    </div>
    </body>
    </html>
  );
}

export default MainLayout