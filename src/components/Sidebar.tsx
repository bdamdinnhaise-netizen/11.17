import { Link } from "react-router";

const nav = [
  { label: "Projects", to: "/projects" },
  { label: "Tasks", to: "/task" },
  { label: "Calendar", to: "/calendar" },
  { label: "Analytics", to: "/analytics" },
  { label: "Team", to: "/users" },
  { label: "Files", to: "/files" },
  { label: "Integrations", to: "/integrations" },
  { label: "Settings", to: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">◍ Atlas</div>
      <div className="nav-group">
        <Link to="/" className="nav-item">
          Dashboard
        </Link>
        <Link to="/login" className="nav-item">
          Tasks
        </Link>
        <Link to="/about" className="nav-item">
          User
        </Link>
        <div className="nav-item">Dashboard ⌃</div>
        <Link to="/" className="nav-sub">
          Overview
        </Link>
        <Link to="/tasks" className="nav-sub active">
          My Tasks <span className="count">6</span>
        </Link>
        <Link to="/tasks/new" className="nav-sub">
          New Task
        </Link>
        <Link to="/about" className="nav-sub">
          Activity
        </Link>
      </div>
      {nav.map((n) => (
        <Link key={n.label} to={n.to} className="nav-item">
          {n.label} <span>⌄</span>
        </Link>
      ))}
    </aside>
  );
}
