// Map Thai menu names to image file paths (actual filenames under public/images/food-cover)
const imageMap = {
  // Drinks - นม/ชา/โกโก้
  'นมสด': '/images/food-cover/milk_fresh.jpg',
  'นมชมพู': '/images/food-cover/milk_pink.jpg',
  'นมคาราเมล': '/images/food-cover/milk_caramel.png',
  'นมสดสตรอเบอรี่': '/images/food-cover/milk_strawberry.png',
  'นมสตรอว์เบอร์รี่': '/images/food-cover/milk_strawberry.png',
  'นมสตอเบอรี่': '/images/food-cover/milk_strawberry.png',
  'ชาไทย': '/images/food-cover/thai_milk_tea.jpg',
  'ชาเขียว': '/images/food-cover/green_milk_tea.jpg',
  'โกโก้': '/images/food-cover/cocoa_drink.jpg',
  'โอวัลติน': '/images/food-cover/ovaltine_drink.png',
  'ไมโล': '/images/food-cover/milo_drink.png',
  'ไวท์มอลต์': '/images/food-cover/white_malt_drink.png',

  // Coffee
  'อเมริกาโน่': '/images/food-cover/americano.png',
  'อเมริกาโน่น้ำผึ้งมะนาว': '/images/food-cover/americano_honey_lemon.png',
  'อเมริกาโน่น้ำส้ม': '/images/food-cover/americano_orange.png',
  'ลาเต้': '/images/food-cover/latte.png',
  'คาปูชิโน่': '/images/food-cover/cappuccino.png',
  'เอสเพรสโซ': '/images/food-cover/espresso.png',
  'ลาเต้รสช็อกโกแลต': '/images/food-cover/latte.png',

  // Sodas
  'แดงมะนาวโซดา': '/images/food-cover/red_lime_soda.png',
  'บ๊วยโซดา': '/images/food-cover/plum_soda.png',
  'อัญชันน้ำผึ้งมะนาว': '/images/food-cover/butterfly_pea_honey_lemon.png',
  'อัญชันโซดา': '/images/food-cover/butterfly_pea_honey_lemon.png',
  'น้ำผึ้งมะนาวโซดา': '/images/food-cover/honey_lemo_ soda.png',
  'น้ำแดงน้ำผึ้งมะนาว': '/images/food-cover/red_syrup_honey lemon.png',
  'อิตาเลียนโซดา': '/images/food-cover/italian_soda.png',
  'น้ำแดงโซดา': '/images/food-cover/red_lime_soda.png',

  // Matcha
  'มัทฉะลาเต้': '/images/food-cover/matcha_latte.png',
  'มัทฉะโฟมมะพร้าว': '/images/food-cover/matcha_coconut_foam.png',
  'มัทฉะสตอเบอรี่': '/images/food-cover/matcha_strawberry.png',
  'มัทฉะสตรอว์เบอร์รี่': '/images/food-cover/matcha_strawberry.png',
  'เพียวมัทฉะ': '/images/food-cover/matcha_pure.png',

  // Smoothies
  'สมูทตี้สตรอว์เบอร์รี่': '/images/food-cover/strawberry_smoothie.png',
  'สมูทตี้บลูเบอร์รี่': '/images/food-cover/blueberry_smoothie.png',
  'ส้มโยเกิร์ตสมูทตี้': '/images/food-cover/orange_yogurt_smoothie.png',
  'สมูทตี้รวมเบอร์รี่': '/images/food-cover/mixed_berry_smoothie.png',
  'โอริโอ้ปั่น': '/images/food-cover/oreo_smoothie.png',
  'เนสวีต้าปั่น': '/images/food-cover/nestvita_smoothie.png',

  // Water / Soda / Beer / Ice
  'น้ำเปล่า': '/images/food-cover/water.png',
  'โค้ก': '/images/food-cover/coke.png',
  'เบียร์สิงห์': '/images/food-cover/beer_singha.png',
  'เบียร์ลีโอ': '/images/food-cover/beer_leo.png',
  'สโนวี่ ไวเซ่น': '/images/food-cover/beer_snowy_weizen.png',
  'สโนวี่ โรเซ่': '/images/food-cover/beer_snowy_rose.png',
  'น้ำแข็งเปล่า(แก้ว)': '/images/food-cover/ice_plain_glass.png',
  'น้ำแข็งเปล่า(ถัง)': '/images/food-cover/ice_plain_bucket.png',

  // Desserts - toasts & shaved ice
  'โทสต์สตรอว์เบอร์รี่': '/images/food-cover/toast_strawberry.png',
  'โทสต์ช็อกโกแลต': '/images/food-cover/toast_chocolate.png',
  'โทสต์โอรีโอ้': '/images/food-cover/toast_oreo.png',
  'โทสต์คาราเมล': '/images/food-cover/toast_caramel.png',
  'โทสต์ฮันนี่': '/images/food-cover/toast_honey.png',
  'ปังเย็นช็อกโกแลต': '/images/food-cover/shaved_ice_chocolate.png',
  'ปังเย็นโอรีโอ้': '/images/food-cover/shaved_ice_oreo.png',
  'ปังเย็นสตรอว์เบอร์รี่': '/images/food-cover/shaved_ice_strawberry.png',
  'ปังเย็นคาราเมล': '/images/food-cover/shaved_ice_caramel.png',
  'ปังเย็นนมฮันนี่': '/images/food-cover/shaved_ice_milk_honey.png',

  // Toast variants
  'ขนมปังปิ้งชาไทย': '/images/food-cover/toast_thai_tea.png',
  'ขนมปังปิ้งช็อกโกแลต': '/images/food-cover/toast_chocolate_spread.png',
  'ขนมปังปิ้งช็อกโกแลตกล้วย': '/images/food-cover/toast_choco_banana.png',
  'ขนมปังปิ้งนมสด': '/images/food-cover/toast_milk.png',
  'ขนมปังปิ้งสตรอเบอร์รี่': '/images/food-cover/toast_strawberry_jam.png',
  'ขนมปังปิ้งเนยนม': '/images/food-cover/toast_butter_milk.png',
  'ขนมปังปิ้งเนยน้ำตาล': '/images/food-cover/toast_butter_sugar.png',

  // Foods - rice / mains
  'ข้าวกะเพราหมู': '/images/food-cover/rice_krapao_pork.png',
  'ข้าวกะเพราทะเล': '/images/food-cover/rice_krapao_seafood.png',
  'ข้าวหมูกระเทียม': '/images/food-cover/rice_garlic_pork.png',
  'ข้าวทะเลกระเทียม': '/images/food-cover/rice_garlic_seafood..jpg',
  'ข้าวคะน้าหมูกรอบ': '/images/food-cover/rice_crispy_pork_kale.png',
  'ข้าวยำไก่แซ่บ': '/images/food-cover/rice_spicy_chicken_salad.png',
  'ข้าวไก่กรอบซอสพะแนง': '/images/food-cover/rice_crispy_chicken_panaeng.png',
  'ข้าวห่อหมกทะเลไข่ข้น': '/images/food-cover/rice_steamed_curry_seafood_omelette.png',
  'ข้าวผัดพริกแกงหมู': '/images/food-cover/rice_red_curry_pork.png',
  'ข้าวผัดพริกแกงทะเล': '/images/food-cover/rice_red_curry_seafood.png',
  'ข้าวหมูกรอบผัดพริกเกลือ': '/images/food-cover/rice_crispy_pork_chili_salt.png',
  'ข้าวกุ้งผัดพริกเกลือ': '/images/food-cover/rice_shrimp_chili_salt.png',
  'ข้าวกุ้งผัดพริกขี้หนู+ไข่ข้น': '/images/food-cover/rice_shrimp_chili_omelette.png',
  'ข้าวผัดเขียวหวาน': '/images/food-cover/green_curry_fried_rice.png',
  'ข้าวผัด': '/images/food-cover/fried_rice.png',
  'ข้าวผัดต้มยำ': '/images/food-cover/tomyum_fried_rice.png',
  'ข้าวผัดมันเนื้อ': '/images/food-cover/beef_fat_fried_rice.png',
  'ข้าวหน้าหมูทอด': '/images/food-cover/rice_fried_pork.png',
  'ข้าวหน้าไก่ทอด': '/images/food-cover/rice_fried_chicken.png',
  'คัตสึด้ง': '/images/food-cover/katsudon.png',
  'ข้าวหน้าไก่ซอสเทอริยากิ': '/images/food-cover/rice_teriyaki_chicken.png',
  'ข้าวหน้าหมูสามชั้นสไลด์': '/images/food-cover/rice_pork_belly_sliced.png',
  'ข้าวหน้าหมูสันนอกสไลด์': '/images/food-cover/rice_pork_loin_sliced.png',
  'ข้าวไข่เจียว': '/images/food-cover/rice_omelette.png',
  'ต้มยำน้ำข้น': '/images/food-cover/tomyum_creamy.png',
  'ต้มยำน้ำใส': '/images/food-cover/tomyum_clear.png',
  'ลาบทอด': '/images/food-cover/larb_fried.png',
  'หมูคลุกฝุ่น': '/images/food-cover/pork_spicy_dry.png',
  'ข้าวเปล่า': '/images/food-cover/plain_rice.png',

  // Noodles & others
  'สปาเกตตีไวท์ซอส': '/images/food-cover/spaghetti_white_sauce.png',
  'สปาเกตตีไวท์ซอส + ไข่กุ้ง': '/images/food-cover/spaghetti_white_sauce_roe.png',
  'สปาเกตตีเบคอนผัดพริกแห้ง': '/images/food-cover/spaghetti_bacon_chili_dry.png',
  'สปาเกตตีขี้เมาทะเลรวม': '/images/food-cover/spaghetti_spicy_seafood.png',
  'มาม่าต้มยำหมูกรอบ': '/images/food-cover/mama_tomyum_crispy_pork.png',
  'มาม่าต้มยำทะเล': '/images/food-cover/mama_tomyum_seafood.png',
  'มาม่าต้มยำหมูสับ': '/images/food-cover/mama_tomyum_minced_pork.png',
  'มาม่าขี้เมาหมู': '/images/food-cover/mama_spicy_pork.png',
  'มาม่าขี้เมาไก่': '/images/food-cover/mama_spicy_chicken.png',
  'มาม่าขี้เมาทะเล': '/images/food-cover/mama_spicy_seafood.png',
  'มาม่ากะเพราหมู': '/images/food-cover/mama_krapao_pork.png',
  'บะหมี่ไก่ซอสเทอริยากิ': '/images/food-cover/noodle_teriyaki_chicken.png',

  // Snacks
  'เฟรนช์ฟรายส์': '/images/food-cover/french_fries.png',
  'ไก่ป๊อป': '/images/food-cover/chicken_pop.png',
  'ชีสบอล': '/images/food-cover/cheese_ball.png',
  'เซ็ทรวม': '/images/food-cover/snack_set_mixed.png'
};

export function getImagePathByName(thaiName) {
  if (!thaiName) return null;
  // exact match
  if (imageMap[thaiName]) return imageMap[thaiName];
  // try trimming and basic normalization
  const key = thaiName.trim();
  if (imageMap[key]) return imageMap[key];
  // fallback: return null to let components use their item.image or placeholder
  return null;
}

// Find a best-fit image for a full menu item object.
// Tries: explicit name -> subCategory -> category token -> first tag
export function getImageForItem(item = {}) {
  if (!item) return null;
  // if item already has explicit image path, prefer it
  if (item.image && item.image.trim()) return item.image;

  const tryKeys = [];
  if (item.name) tryKeys.push(item.name);
  if (item.subCategory) tryKeys.push(item.subCategory);
  if (item.category) tryKeys.push(item.category);
  if (Array.isArray(item.tags)) tryKeys.push(...item.tags);

  for (const raw of tryKeys) {
    if (!raw) continue;
    const key = ('' + raw).trim();
    if (imageMap[key]) return imageMap[key];
    // try simpler tokenization: split by spaces and slashes
    const parts = key.split(/\s|\/|\|/).map((p) => p.trim()).filter(Boolean);
    for (const p of parts) {
      if (imageMap[p]) return imageMap[p];
    }
  }

  return null;
}

export default imageMap;
