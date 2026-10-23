'use client';
import TopChrome from '../TopChrome';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SiteScripts from '../SiteScripts';

export default function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><TopChrome /><Navbar />{children}<Footer /><SiteScripts /></>;
}
