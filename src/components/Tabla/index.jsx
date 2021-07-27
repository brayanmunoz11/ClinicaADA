import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { TableContainer } from './styles'

export default function Tabla({children}) {
  return (<>
    <TableContainer>
      <PerfectScrollbar>
        <div className="table">
          {children}
        </div>
      </PerfectScrollbar>
    </TableContainer>
  </>)
}
