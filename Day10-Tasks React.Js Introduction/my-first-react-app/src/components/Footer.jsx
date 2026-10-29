
function Footer({ year, message }) {
  return (
    <footer id="contact" className="footer">
      <p>{message}</p>
      <p>© {year} My First React App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
