export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-lg">
        <div className="absolute left-1/2 top-0 size-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
        {children}
      </div>
    </div>
  )
}