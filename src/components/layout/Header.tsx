import { ReactNode } from "react";
import { NavBar } from "./NavBar";

interface HeaderProps {
  children?: ReactNode;
  hideNav?: boolean;
  showThemeToggle?: boolean;
  showSocialLinks?: boolean;
}

export function Header({
  children,
  hideNav = false,
  showThemeToggle = true,
  showSocialLinks = true,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dracula-bg/80 backdrop-blur-lg border-b border-dracula-bg-lighter/30">
      <NavBar hideNav={hideNav} showThemeToggle={showThemeToggle} showSocialLinks={showSocialLinks} />
      {children}
    </header>
  );
}
