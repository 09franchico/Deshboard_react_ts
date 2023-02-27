import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routers/router'
import { AuthProvider } from './shared/contexts/auth/AuthProvider'

function App() {
  return (
    <>
      <AuthProvider>
          <RouterProvider router={Router} />
      </AuthProvider>
    </>
  )
}

export default App
