import React from "react";

export function Layout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <nav>
          <div className="nav-inner">
            <a href="/" className="logo">
              Mergit
            </a>
            <div className="nav-links">
              <a href="/">Dashboard</a>
              <a href="/history">History</a>
              <a href="/settings">Settings</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
