interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout = (props: AdminLayoutProps) => {
  const { children } = props
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-5 mr-5">
        <h2>Admin sidebar</h2>
      </aside>
      <div>{children}</div>
    </div>
  )
}

export default AdminLayout
