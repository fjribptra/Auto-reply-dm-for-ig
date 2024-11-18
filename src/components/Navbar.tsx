const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-slate-100">
      <div>
        <h1>Auto Reply DM</h1>
      </div>
      <div>
        <ul className="flex justify-between gap-5">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
