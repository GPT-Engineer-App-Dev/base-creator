import { Home, Settings, HelpCircle } from "lucide-react";
import Index from "./pages/Index.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <SettingsPage />,
  },
  {
    title: "Help",
    to: "/help",
    icon: <HelpCircle className="h-4 w-4" />,
    page: <div>Help Page</div>,
  },
];