"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (status === "loading") {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">My Auth App</div>
          <div className="nav-loading">Loading...</div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <h2>My Auth App</h2>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu desktop-menu">
          {!session ? (
            <button 
              className="signin-btn"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          ) : (
            <div className="user-menu">
              <div className="user-info">
                {session.user?.image && (
                  <Image 
                    src={session.user.image} 
                    alt={session.user?.name || "User"} 
                    width={40} 
                    height={40} 
                    className="user-avatar"
                  />
                )}
                <span className="user-name">
                  {session.user?.name || session.user?.email}
                </span>
              </div>
              <button 
                className="signout-btn"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="nav-menu mobile-menu">
            {!session ? (
              <button 
                className="signin-btn mobile-signin"
                onClick={() => signIn()}
              >
                Sign In
              </button>
            ) : (
              <div className="user-menu mobile-user-menu">
                <div className="user-info mobile-user-info">
                  {session.user?.image && (
                    <Image 
                      src={session.user.image} 
                      alt={session.user?.name || "User"} 
                      width={35} 
                      height={35} 
                      className="user-avatar"
                    />
                  )}
                  <span className="user-name">
                    {session.user?.name || session.user?.email}
                  </span>
                </div>
                <button 
                  className="signout-btn mobile-signout"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}