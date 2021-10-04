import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Modal = ({ onClose, show, children }) => {
  const { t } = useTranslation();

  return show ? (
    <div className="modal d-block bg-black bg-opacity-50" onClick={onClose}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <Image
              src="https://img.icons8.com/ios-glyphs/30/000000/star--v2.png"
              alt="Star"
              width={22}
              height={20}
            />

            <h5 className="modal-title fw-bold ps-2">{t('achievements')}</h5>
            <button
              onClick={onClose}
              style={{ color: '#fff' }}
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="row">
              <div className="col-6 w-100">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
