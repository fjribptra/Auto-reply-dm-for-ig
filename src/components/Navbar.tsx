import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-slate-100">
      <div>
        <h1>Auto Reply DM</h1>
      </div>
      <div>
        <ul className="flex justify-between gap-5">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
