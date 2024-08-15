
import React from "react";
import styles from "./dashNavbar.module.css"

type Props = {};



const dashNavbar = (props: Props) => {
  
    
  
    return (
      <nav className={`${styles.navigation} ${styles.expanded}`}>
        <div className={`${styles.col} ${styles.mainColTop}`}>
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
                <span className="materialSymbolsRounded">person</span>
                <p>Account</p>
              </div>
            </a>
            <a href="#" className={styles.area}>
              <div className={styles.page}>
                <span className="materialSymbolsRounded">settings</span>
                <p>Settings</p>
              </div>
            </a>
          </div>
  
          <div className={styles.col}>
            <small>Study center</small>
            <div className={`${styles.line} ${styles.menuline}`}></div>
            <a href="strike" className={styles.area}>
              <div className={`${styles.page} ${styles.active}`}>
                <span className="materialSymbolsOutlined">
                  local_fire_department
                </span>
                <p>Strikes</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="calendar" className={styles.area}>
              <div className={styles.page}>
                <span className="materialSymbolsRounded">calendar_month</span>
                <p>Calendar</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="/" className={styles.area}>
              <div className={`${styles.page} ${styles.active}`}>
                <span className="materialSymbolsRounded">cottage</span>
                <p>Home</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="reminders" className={styles.area}>
              <div className={styles.page}>
                <span className="materialSymbolsOutlined">notifications</span>
                <p>Reminders</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="deadlines" className={styles.area}>
              <div className={styles.page}>
                <span className="materialSymbolsOutlined">coffee_maker</span>
                <p>Deadlines</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="notes" className={styles.area}>
              <div className={styles.page}>
                <span className="materialSymbolsOutlined">note_stack</span>
                <p>Notes</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="subjects" className={styles.area}>
              <div className={styles.page}>
                <span className="materialSymbolsOutlined">class</span>
                <p>Subjects</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="curriculum" className={styles.area}>
              <div className={styles.page}>
                <span className="materialSymbolsOutlined">view_agenda</span>
                <p>Curriculum</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
            <a href="contacts" className={styles.area}>
              <div className={styles.page}>
                <span className="materialSymbolsOutlined">badge</span>
                <p>Contacts</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
  
            <a href="statistics" className={styles.area}>
              <div className={styles.page}>
                <span className="materialSymbolsOutlined">equalizer</span>
                <p>Statistics</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
  
            <a href="gamification" className={styles.area}>
              <div className={styles.page}>
                <span className="materialSymbolsOutlined">stadia_controller</span>
                <p>Gamification</p>
                <span className={`$"materialSymbolsOutlined" ${styles.dots}`}>more_horiz</span>
              </div>
            </a>
          </div>
        </div>
  
        <div className={styles.col}>
          <a href="databases" className={styles.area}>
            <div className={styles.page}>
              <span className="materialSymbolsOutlined">hub</span>
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
