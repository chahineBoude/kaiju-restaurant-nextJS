import Navbar from "./containers/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div> {children} </div>
    </>
  );
}
