import React from "react";
import styles from "./tenStepsScreen.module.scss";

function TenStepsScreen() {
  return (
    <div className={styles.tenStepsScreen}>
      <h2>מדריך 10 צעדים - הקדמה</h2>
      <div className={styles.content}>
        <p>
          מה שאני הייתי צריך כדי לבנות דף עסקי נכון עם בסיס חזק שלאורך זמן יוכיח
          את עצמו ויצליח להביא לקוחות חדשים לעסק זה :
          <br />
          מישהו שיגיד לי בדיוק מה לעשות ובעיקר איך..
          <br />
          יש כל כך הרבה כללים, חוקים ופרמטרים להתחשב בהם, זה נראה קשה לעיתים על
          גבול הבלתי אפשרי.
        </p>
        <p>
          העניין (ופה אפתיע אתכם) זה שלא מצאתי מישהו שאומר לי תכלס מה ואיך
          לעשות, צעד אחרי צעד, שלב אחרי שלב.
          <br />
          מה שכן מצאתי, זה המון משווקים (שעושים אחלה עבודה) אבל לקחת משווק לעסק
          שלי אמר בזמנו 2 דברים :
          <br />
          1. להיות תלוי בו - זמני פרסום, כתיבת תוכן, קידום הדף ועוד.. כעת הכל
          בידיו.
          <br />
          2. להגדיל תקציב פרסום - להוציא עוד כמה מאות שקלים (במקרה הטוב) כל
          חודש.
        </p>
        <p>
          אז חשבתי והבנתי שפחות מתאים לי והחלטתי לצאת למסע..
          <br />
          מסע של חקירת האלגוריתם, שבמהלכו רכשתי קורסים בנושא, ראיתי הרצאות בארץ
          ובחו"ל, הקשבתי לפודקאסטים ובעיקר עשיתי וטעיתי, עשיתי וטעיתי (בעיקר
          טעיתי) בלי הפסקה! עד שהפעולה עבדה שוב ושוב ושוב ורק אז עברתי לפעולה
          אחרת.
          <br />
          לחקור את האלגוריתם זה לא פשוט, במיוחד שיש לכם עסק ועליכם לטפל בו כמעט
          בכל שניה פנויה ביום.
        </p>
        <p>
          ולכן - עשיתי את זה בשבילכם :
          <br />
          10 הצעדים הראשונים לפתיחת דף עסקי נכון עם בסיס חזק ויציב שיביא לכם
          לקוחות חדשים באופן יומיומי תוך זמן קצר.
          <br />
          חשוב לזכור - אתם יכולים וצריכים להיות המשווקים הטובים ביותר של העסק
          שלכם.
        </p>
        <p>
          נתון מעודד : ככל שתשקיעו יותר זמן ואנרגיה בהקמת הדף כך תשקיעו פחות
          ופחות זמן ואנרגיה בהמשך עד שתגיעו להתעסקות של שעה אחת ביום בלבד!
        </p>
        <br />
        <p style={{ fontWeight: 500 }}>יאלה, שנתחיל צעד ראשון?</p>
      </div>
      {/* {!openForm && (
          <button className={styles.wantBtn} onClick={() => setOpenForm(true)}>
            כן אני רוצה!
          </button>
        )}
        {openForm && (
          <form className={styles.formtenSteps} onSubmit={(e) => addOrder(e)}>
            <h2>כמה פרטים אחרונים והמדריך אצלך</h2>
            {must && <h5>*עלייך למלא את השדות שמסומנים בכוכבית*</h5>}
            <div className={styles.formContent}>
              <div className={styles.divFiled}>
                <label>*שם</label>
                <input
                  className={must ? styles.must : ""}
                  onChange={(e) => setUserName(e.target.value)}
                  type="string"
                  name="userName"
                  value={userName}
                  placeholder="שם"
                />
              </div>
              <div className={styles.divFiled}>
                <label>*מייל</label>
                <input
                  className={must ? styles.must : ""}
                  onChange={(e) => setEmail(e.target.value)}
                  type="string"
                  name="email"
                  value={email}
                  placeholder="מייל"
                />
              </div>
              <button type="submit" className={styles.payBtn}>
                לחץ לרכישה
              </button>
            </div>
          </form>
        )} */}
    </div>
  );
}

export default TenStepsScreen;
