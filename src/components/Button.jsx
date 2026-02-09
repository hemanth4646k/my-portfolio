
const Button = ({ text, href, className }) => {
  return (
    <a 
      href={href || "#"} 
      className={`${className ?? " "} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle"></div>
        <p className="text">
          {text}
        </p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};
export {Button};