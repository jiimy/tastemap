import BottomMenu from "@/components/bottomMenu/BottomMenu"
import { Suspense } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
      <BottomMenu />
    </Suspense>
  )
}
