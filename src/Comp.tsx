import { ReactNode, useEffect } from "react"

export function Component({ message, jsx, children }: { message: string, jsx?: JSX.Element, children?: ReactNode }) {
  return <div>
    <h1>{message}</h1>
    {jsx}
    {children}
  </div>
}

export function InnerComponent({ button }: { button: ReactNode }) {
  // Cálculos super importantes
  return <div>
    <h3>My button</h3>
    {button}
  </div>
}

// Hooks
// useState, useEffect, useRef, useId, useMemo, useCallback