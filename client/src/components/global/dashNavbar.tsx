
import React from "react";
import styles from "./dashNavbar.module.css"
import AccountIcon from '@mui/icons-material/PersonOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import StrikeIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import CalendarIcon from '@mui/icons-material/CalendarMonthOutlined';
import HomeIcon from '@mui/icons-material/CottageRounded';
import RemindersIcon from '@mui/icons-material/NotificationsOutlined';
import DeadlinesIcon from '@mui/icons-material/CoffeeMakerOutlined';
import NotesIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import SubjectsIcon from '@mui/icons-material/ClassOutlined';
import CurriculumIcon from '@mui/icons-material/ViewAgendaOutlined';
import ContactsIcon from '@mui/icons-material/BadgeOutlined';
import SatisticsIcon from '@mui/icons-material/EqualizerOutlined';
import GamificationIcon from '@mui/icons-material/SportsEsportsOutlined';
import DatabasesIcon from '@mui/icons-material/HubOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';


type Props = {};



const dashNavbar = (props: Props) => {
  
    
  
    return (
      <nav className={`${styles.navigation} ${styles.expanded}`}>
        <div className={styles.mainColTop}>
          <div className={styles.col}>
            <div className={`${styles.page} ${styles.options}`}>
              <span
                className={`$"materialSymbolsOutlined" ${styles.dockToggle}`}
                id="dockToggle"


              >
                dock_to_right
              </span>
              <div className={styles.row}>
                <span className="materialSymbolsRounded" id="dockHybrid">
                  keyboard_double_arrow_right
                </span>
                <span className="materialSymbolsRounded" id="rearange">
                  edit_square
                </span>
              </div>
            </div>
            <div className={styles.line}></div>
            <a href="#" className={styles.area}>
              <div className={styles.page}>
                <AccountIcon className={styles.icon}></AccountIcon>
                <p>Account</p>
              </div>
            </a>
            <a href="#" className={styles.area}>
              <div className={styles.page}>
                <SettingsIcon className={styles.icon}></SettingsIcon>
                <p>Settings</p>
              </div>
            </a>
          </div>
  
          <div className={styles.col}>
            <small>Study center</small>
            <div className={`${styles.line} ${styles.menuline}`}></div>
            <a href="strike" className={styles.area}>
              <div className={`${styles.page}`}>
                <StrikeIcon className={styles.icon}></StrikeIcon>
                <p>Strikes</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="calendar" className={styles.area}>
              <div className={styles.page}>
                <CalendarIcon className={styles.icon}></CalendarIcon>
                <p>Calendar</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="/" className={styles.area}>
              <div className={`${styles.page} ${styles.active}`}>
                <HomeIcon className={styles.icon}></HomeIcon>
                <p>Home</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="reminders" className={styles.area}>
              <div className={styles.page}>
                <RemindersIcon className={styles.icon}></RemindersIcon>
                <p>Reminders</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="deadlines" className={styles.area}>
              <div className={styles.page}>
                <DeadlinesIcon className={styles.icon}></DeadlinesIcon>
                <p>Deadlines</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="notes" className={styles.area}>
              <div className={styles.page}>
                <NotesIcon className={styles.icon}></NotesIcon>
                <p>Notes</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="subjects" className={styles.area}>
              <div className={styles.page}>
                <SubjectsIcon className={styles.icon}></SubjectsIcon>
                <p>Subjects</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="curriculum" className={styles.area}>
              <div className={styles.page}>
                <CurriculumIcon className={styles.icon}></CurriculumIcon>
                <p>Curriculum</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="contacts" className={styles.area}>
              <div className={styles.page}>
                <ContactsIcon className={styles.icon}></ContactsIcon>
                <p>Contacts</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
  
            <a href="statistics" className={styles.area}>
              <div className={styles.page}>
                <SatisticsIcon className={styles.icon}></SatisticsIcon>
                <p>Statistics</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
  
            <a href="gamification" className={styles.area}>
              <div className={styles.page}>
                <GamificationIcon className={styles.icon}></GamificationIcon>
                <p>Gamification</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
          </div>
        </div>
  
        <div className={styles.col}>
          <a href="databases" className={styles.area}>
            <div className={styles.page}>
              <DatabasesIcon className={styles.icon}></DatabasesIcon>
              <p>Databases</p>
            </div>
          </a>
          <div className={styles.line}></div>
          <div className={styles.page} id="searchPage">
            <span className="materialSymbolsOutlined" id="searchIcn">
              search
            </span>
            <input
              type="search"
              id="search"
              placeholder="Search"
            />
          </div>
        </div>
      </nav>
    );
  }

export default dashNavbar;
