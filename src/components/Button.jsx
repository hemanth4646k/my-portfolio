
const Button = ({ text, href, className }) => {
  return (
    <a 
      href={href || "#"} 
      className={`${className ?? " "} cta-wrapper`}
      onClick={(e) => {
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const offset = window.innerHeight * 0.15;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      }}
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