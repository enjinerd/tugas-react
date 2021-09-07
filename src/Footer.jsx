import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()}{" "}
      <a href="https://ron.my.id"><strong>Roni Ardiyanto</strong></a>
    </footer>
  );
}

export default Footer;
