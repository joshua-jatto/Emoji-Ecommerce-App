import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid gray",
        }}
      >
        <Link to="/"  style={{listStyle: "none", textDecoration:'none'}}>
          <h1 style={{ fontSize: "2.5rem", fontFamily:'cursive', marginLeft:'2rem' }}>Emoji stores🏬</h1>{" "}
        </Link>

        <ul
          style={{
            display: "flex",
           
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginRight: "1rem",
            
            fontSize: "2rem",
          }}
        >
          <Link to="./"  style={{listStyle: "none", textDecoration:'none', fontFamily:'cursive'}}>
            <li>Home 🏠</li>{" "}
          </Link>
          <Link to="./cart-page"  style={{listStyle: "none", textDecoration:'none', fontFamily:'cursive'}}>
            {" "}
            <li>Cart 🛒</li>{" "}
          </Link>
        </ul>
      </nav>
    </>
  );
}
