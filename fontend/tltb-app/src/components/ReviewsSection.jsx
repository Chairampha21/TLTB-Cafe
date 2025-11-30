// src/components/ReviewsSection.jsx
import "./ReviewsSection.css";

function ReviewsSection({ onOpenAuth }) {
  const reviews = [
    {
      id: 1,
      name: "พิมพ์",
      role: "นิสิตปี 3 • อ่านหนังสือดึกประจำ",
      rating: 4,
      text: "มาคาเฟ่นี้ช่วงใกล้สอบตลอด ลาเต้กับมาม่าต้มยำหมูกรอบคือเพื่อนซี้ตอนอ่านหนังสือดึก ๆ บรรยากาศเงียบพอดี ไม่วุ่นวายเกินไป ชอบมากค่ะ"
    },
    {
      id: 2,
      name: "โอม",
      role: "เด็กฝึกงาน • ทำโปรเจกต์ทั้งวัน",
      rating: 5,
      text: "ชอบโซนปลั๊กไฟเยอะ ๆ แล้วก็เมนูเครื่องดื่มให้เลือกเยอะมาก สมูทตี้สตรอว์เบอร์รี่กับข้าวกะเพราหมูคือเมนูประจำ เหมาะกับมานั่งทำโปรเจกต์ทั้งวันจริง ๆ"
    },
    {
      id: 3,
      name: "มายด์",
      role: "สายติว • ชวนเพื่อนมานั่งกลุ่ม",
      rating: 4,
      text: "โต๊ะใหญ่ เหมาะกับมานั่งติวเป็นกลุ่ม ขนมปังปิ้งกับปังเย็นคือของกินเล่นตอนพักเบรก บาริสต้าน่ารัก แนะนำเมนูเก่งมากค่ะ"
    }
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= count ? "star star--filled" : "star star--empty"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="reviews-section">
      {/* แถบบนสีน้ำตาลอ่อนแบบ hero เล็ก ๆ */}
      <div className="reviews-hero">
        <p className="reviews-eyebrow">Come and Join</p>
        <h2 className="reviews-title">OUR HAPPY CUSTOMERS</h2>
        <p className="reviews-subtitle">
          ฟีดแบ็กจากเพื่อน ๆ ที่มานั่งอ่านหนังสือและทำงานที่&nbsp;
          <span className="brand-inline">TLTB Café</span>
        </p>
      </div>

      {/* การ์ดรีวิว */}
      <div className="reviews-cards">
        {reviews.map((rv) => (
          <article key={rv.id} className="review-card">
            <div className="review-header">
              <div className="avatar-circle">
                {/* อักษรตัวแรกของชื่อแทนรูปโปรไฟล์ */}
                <span>{rv.name.charAt(0)}</span>
              </div>
              <div className="reviewer-info">
                <h3 className="reviewer-name">{rv.name}</h3>
                <p className="reviewer-role">{rv.role}</p>
              </div>
              <div className="review-stars">{renderStars(rv.rating)}</div>
            </div>

            <p className="review-text">{rv.text}</p>
          </article>
        ))}
      </div>

      {/* แถบชวนสมัคร / โปรเล็ก ๆ ด้านล่างแบบในรูป */}
      <div className="reviews-cta-strip">
        <div className="cta-text">
          <h3>Join in and get 15฿ off!</h3>
          <p>
            สมัครเป็นเพื่อนในไลน์ร้าน TLTB Café และรับโค้ดลด{" "}
            <strong>15 บาท</strong> สำหรับเมนูเครื่องดื่มแก้วถัดไป
          </p>
        </div>
        <form
          className="cta-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            placeholder="กรอกอีเมลสำหรับรับข่าวสาร"
            className="cta-input"
          />
          <button type="button" className="cta-button" onClick={() => onOpenAuth && onOpenAuth()}>
            สมัครสมาชิก
          </button>
        </form>
      </div>
      {/* AuthModal is handled at App level */}
    </section>
  );
}

export default ReviewsSection;
