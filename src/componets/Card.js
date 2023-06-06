import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, onClick, children }) => {
  return (
    <div className="card mb-3 cursor-pointer" onClick={onClick}>
      <div className="card-body py-2">
        <div className="d-flex justify-content-between align-items-center">
          <div>{title}</div>
          {children && <div>{children}</div>}
        </div>
      </div>
    </div>
  );
};

//속성들의 타입을 선언한다
//.isRequired는 데이타를 못받는것없이
//반드시 string으로 받고자할때
Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  children: null,
  onClick: () => {},
};

export default Card;
