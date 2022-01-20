import Link from 'next/link';
import LangSelector from './LangSelector';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <nav className="px-4 py-2 mw-100 navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="mw-100 px-0 container">
        <Link href="/">
          <a className="navbar-brand fs-4">{t('name_dev')}</a>
        </Link>

        <div className="d-flex">
          <div className="d-lg-none mb-2">
            <LangSelector />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto align-items-center">
            <div className="nav-item ">
              <a
                href="https://github.com/gleec?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <span className="d-flex align-items-center">
                  <Image
                    className="bg-white rounded-circle"
                    src="/logo/github.png"
                    alt="Star"
                    width={22}
                    height={20}
                  />
                  <span className="d-lg-none d-inline-block ms-2"> {t('github')} </span>
                </span>
              </a>
            </div>
            <div className="nav-item ">
              <a
                href="www.linkedin.com/in/gleryc8"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <span className="d-flex align-items-center">
                  <Image
                    className="bg-white radius-5"
                    src="/logo/linkedin.png"
                    alt="Star"
                    width={22}
                    height={20}
                  />
                  <span className="d-lg-none d-inline-block ms-2"> {t('linkedin')} </span>
                </span>
              </a>
            </div>
            <div className="nav-item d-none d-lg-block">
              <LangSelector />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
