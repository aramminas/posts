import "./styles.css";

export const Footer = () => {
  return (
    <footer>
      <span className="footer-text">Copyright ©</span>
      <span className="footer-site-name"> Web Company</span>
      <span className="footer-text">{`  ${new Date().getFullYear()}.`}</span>
    </footer>
  );
};
