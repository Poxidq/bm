export default function MovieLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const MARGIN: number = 20;
  return (
    <div style={{background: "red", margin: MARGIN}}>
        {children}
    </div>
  )
}
