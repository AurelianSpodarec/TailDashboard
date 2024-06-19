'use client'

import { ThemeProvider } from '@/context/theme-provider'

function ContextProvider({ children, session }: { children: React.ReactNode, session?: unknown }) {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default ContextProvider
