import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../assets/ixs-logo.png";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type HeaderProps = {
    activeID?: number;

}

// Header component will be shared with all pages where it contains a list of tracks for the navbar
// along with active id property to indicate which one is currenly active and changes the styles of the active one
function Header ({ activeID }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuHidden, setIsMenuHidden] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 160) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            
        };

        // Check immediately on mount
        handleResize();
    
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMenuClick = ()=> {
        setIsMenuHidden(!isMenuHidden);
    }
    
    const tracks = [
        {id: 1, name: "track 1", url: "track1"},
        {id: 2, name: "track 2", url: "track2"},
        {id: 3, name: "track 3", url: "track3"},
        {id: 4, name: "track 4", url: "track4"}
    ]

    
    return (


        // the header containing the icon and navbar
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.headerItems}>

                <div className={styles.logoContainer}>
                  <a href="/" className={styles.logoLink}>
                    <Image 
                        className={styles.image}
                        src={logo} 
                        alt="IndabaX Sudan logo"
                    />
                    <p className={styles.logoText}>IndabaX Sudan 2025</p>
                  </a>
                </div>

                {/* nav bar links */}
                <nav>
                    {isMobile? (
                        <div className={styles.hamburgerMenu}>
                            <div className={`${styles.hamburgerIcon} ${!isMenuHidden ? styles.activeIcon : ""}`} 
                            onClick={handleMenuClick}>
                                <RxHamburgerMenu size={30} color="white" />
                            </div>

                        </div>
                    ):
                    (
                        <ul className={styles.navBar}>
                          {tracks.map((track) => <li className={activeID === track.id ? styles.activeNavBarItem : styles.navBarItem}><a href={track.url}>{track.name}</a></li>)}
                        </ul>
                    )
                
                    }

                </nav>
            </div>
            {  isMobile && (
                <div className={`${styles.navBarItems} ${isMenuHidden ? styles.hidden : styles.visible}`} >
                    {tracks.map((track) => <a href={track.url}><li className={activeID === track.id ? styles.activeNavBarItemMobile : styles.navBarItemMobile}>{track.name}</li></a>)}
                </div>
            )}
      </header>
    );
}


export default Header;