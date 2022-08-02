import Image from 'next/image'

import style from "./MeuFreelaNav.module.css"

const MyFreelaNav = () => {
    return(
        <nav className={style.navBar}>
           <h3 className={style.companyName}>MeuFreela</h3>
           <div className={style.socialMediaIconGroup}>
                <img className={style.socialMediaIcon}
                    alt="LinkedIn logo" 
                    src="/linkedin 1.svg" />
                <img className={style.socialMediaIcon}
                    alt="Instagram logo" 
                    src="/instagram 1.svg" />
                <img className={style.socialMediaIcon}
                    alt="Twitter logo" 
                    src="/twitter 1.svg" />
           </div>
        </nav>
    );
}

export default MyFreelaNav;
