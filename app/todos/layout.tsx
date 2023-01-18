import TodoList from './TodoList'

function RootLayout(
    {
        children,
      }: {
        children: React.ReactNode
      }
) {
  return (
    <main className='flex'>

        <div>
            {/* @ts-ignore */}
            <TodoList />
        </div>
        <div className='flex-1'>
            {children}
        </div>

    </main>
  )
}

export default RootLayout