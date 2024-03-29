import BottomMenu from "@/components/bottomMenu/BottomMenu"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      <BottomMenu />
    </div>
  )
}
