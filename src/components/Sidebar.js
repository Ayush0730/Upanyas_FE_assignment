import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="side-container">
            <div className="brand">LOGO</div>
            <div className="item">Dashboard</div>
            <div className="item">Users</div>
            <div className="item">Categories</div>
            <div className="item active">Products</div>
            <div className="item">Notifications</div>
            <button className="logout">Logout</button>
        </div>
    )
}

export default Sidebar
