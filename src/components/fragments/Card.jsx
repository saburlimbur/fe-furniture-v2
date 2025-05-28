import PropTypes from 'prop-types';

function Card({ children, onClick, className }) {
  return (
    <article className={className} onClick={onClick}>
      {children}
    </article>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

function Header({ children, className }) {
  return <div className={className}>{children}</div>;
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

function Body({ children, className }) {
  return <div className={className}>{children}</div>;
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

function Footer({ children, className }) {
  return <div className={className}>{children}</div>;
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

function Image({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Image = Image;

export default Card;
