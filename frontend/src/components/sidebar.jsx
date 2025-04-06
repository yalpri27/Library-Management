import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { FaBars } from "react-icons/fa";

const { Sider } = Layout;

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleNavigation = (path) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <Sider
      width={200}
      className="h-screen fixed left-0 top-0 bottom-0 shadow-lg"
      style={{
        background: "linear-gradient(to bottom, #1E3A8A, #1E40AF)",
        color: "white",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
      }}
    >
      {/* Menu Icon */}
      <div style={{ textAlign: "right", padding: "16px", paddingRight: "20px" }}>
        <FaBars className="text-xl cursor-pointer hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Sidebar Header */}
      <div
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
          borderBottom: "2px solid rgba(255, 255, 255, 0.4)",
          paddingBottom: "10px",
        }}
      >
        ARCHIVE
      </div>

      {/* Sidebar Menu Items */}
      <Menu
        mode="vertical"
        selectedKeys={[activePath]}
        style={{
          background: "transparent",
          color: "white",
          fontSize: "16px",
          fontWeight: "500",
          marginTop: "10px",
        }}
      >
        {[
          { text: "My Library", path: "/library" },
          { text: "Wishlist", path: "/wishlist" },
          // { text: "My Library", path: "/my-library" },
          // { text: "Settings", path: "/settings" },
          { text: "Contact Us", path: "/contact" },
          { text: "Profile", path: "/profile" },
          { text: "Logout", path: "/logout" },
        ].map(({ text, path }) => (
          <Menu.Item
            key={path}
            onClick={() => handleNavigation(path)}
            style={{
              textAlign: "center",
              background: activePath === path ? "white" : "transparent",
              color: activePath === path ? "#1E3A8A" : "white",
              borderRadius: "0px",
              marginBottom: "5px",
            }}
          >
            {text}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}