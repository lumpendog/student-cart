import React from 'react';

import PropTypes from 'prop-types';
import './modal.css';

const Modal = ({ isHidden, textMain, textButton, onClose }) => {
  return (
    <div className={'background' + (isHidden ? ' hide' : '')}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <p>{textMain}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              {textButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  textButton: 'Закрыть',
  isHidden: true,
};
Modal.propTypes = {
  textMain: PropTypes.string.isRequired,
  textButton: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  isHidden: PropTypes.bool,
};

export default Modal;
