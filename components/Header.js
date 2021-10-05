import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-md-12 px-0">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-3 p-3 text-center">
                <Image src="/_gc.png" alt="logo autor" width={200} height={200} />
              </div>
              <div className="col-md-9 px-3 py-0">
                <h3 className="text-muted fw-bold fs-2 pt-2 pt-md-0"> {t('profession')}</h3>
                <p className="mw-85">{t('profession_desc')}</p>
                <div className="pt-3">
                  <a
                    className="btn-fucsia text-light text-decoration-none"
                    href="/glery_cardoza.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('see_more')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
