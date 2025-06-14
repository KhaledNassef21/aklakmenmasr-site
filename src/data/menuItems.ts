import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // أكلات شعبية - Popular Dishes
  {
    id: '1',
    name: 'Koshari',
    nameAr: 'كشري',
    description: 'Traditional Egyptian mixed rice with lentils, chickpeas, pasta, and spicy tomato sauce',
    descriptionAr: 'الكشري المصري التقليدي بالأرز والعدس والحمص والمكرونة والصلصة الحارة',
    price: 28,
    image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main',
    available: true,
    featured: true
  },
  {
    id: '2',
    name: 'Molokhia with Chicken',
    nameAr: 'ملوخية بالفراخ',
    description: 'Traditional Egyptian green soup with tender chicken pieces and rice',
    descriptionAr: 'الملوخية المصرية التقليدية بقطع الفراخ الطرية مع الأرز الأبيض',
    price: 42,
    image: 'https://images.pexels.com/photos/6046493/pexels-photo-6046493.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main',
    available: true,
    featured: true
  },
  {
    id: '3',
    name: 'Fattah',
    nameAr: 'فتة',
    description: 'Crispy bread with rice, meat, and garlic yogurt sauce',
    descriptionAr: 'فتة بالخبز المقرمش والأرز واللحمة وصلصة الثوم بالزبادي',
    price: 45,
    image: 'https://images.pexels.com/photos/8629172/pexels-photo-8629172.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main',
    available: true
  },
  {
    id: '4',
    name: 'Stuffed Duck',
    nameAr: 'بط محشي',
    description: 'Whole duck stuffed with seasoned rice and herbs',
    descriptionAr: 'بط كامل محشي بالأرز المتبل والأعشاب الطازجة',
    price: 85,
    image: 'https://images.pexels.com/photos/7426825/pexels-photo-7426825.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main',
    available: true,
    featured: true
  },
  {
    id: '5',
    name: 'Alexandrian Liver',
    nameAr: 'كبدة اسكندراني',
    description: 'Spicy liver cooked Alexandria style with peppers and onions',
    descriptionAr: 'كبدة حارة على الطريقة الاسكندرانية بالفلفل والبصل',
    price: 38,
    image: 'https://images.pexels.com/photos/6419558/pexels-photo-6419558.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main',
    available: true
  },
  {
    id: '6',
    name: 'Mombar',
    nameAr: 'ممبار',
    description: 'Traditional stuffed intestines with rice and spices',
    descriptionAr: 'ممبار محشي بالأرز والتوابل على الطريقة التقليدية',
    price: 35,
    image: 'https://images.pexels.com/photos/8879181/pexels-photo-8879181.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main',
    available: true
  },
  {
    id: '7',
    name: 'Stuffed Pigeon',
    nameAr: 'حمام محشي',
    description: 'Tender pigeon stuffed with seasoned rice',
    descriptionAr: 'حمام طري محشي بالأرز المتبل والفريك',
    price: 55,
    image: 'https://images.pexels.com/photos/7525161/pexels-photo-7525161.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main',
    available: true
  },
  {
    id: '8',
    name: 'Moussaka',
    nameAr: 'مسقعة',
    description: 'Baked eggplant with minced meat in tomato sauce',
    descriptionAr: 'باذنجان مخبوز باللحمة المفرومة في صلصة الطماطم',
    price: 32,
    image: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main',
    available: true
  },

  // محشي - Stuffed Dishes
  {
    id: '9',
    name: 'Stuffed Cabbage',
    nameAr: 'محشي الكرنب',
    description: 'Cabbage leaves stuffed with rice, herbs, and spices',
    descriptionAr: 'أوراق الكرنب المحشية بالأرز والأعشاب والتوابل',
    price: 35,
    image: 'https://images.pexels.com/photos/7426825/pexels-photo-7426825.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'stuffed',
    available: true,
    featured: true
  },
  {
    id: '10',
    name: 'Stuffed Vine Leaves',
    nameAr: 'ورق العنب',
    description: 'Grape leaves stuffed with rice and herbs',
    descriptionAr: 'ورق العنب المحشي بالأرز والأعشاب الطازجة',
    price: 32,
    image: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'stuffed',
    available: true
  },
  {
    id: '11',
    name: 'Stuffed Zucchini',
    nameAr: 'محشي الكوسة',
    description: 'Zucchini stuffed with rice and meat',
    descriptionAr: 'كوسة محشية بالأرز واللحمة المفرومة',
    price: 38,
    image: 'https://images.pexels.com/photos/8879181/pexels-photo-8879181.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'stuffed',
    available: true
  },

  // مخبوزات وفطير - Bakery & Feteer
  {
    id: '12',
    name: 'Feteer Meshaltet',
    nameAr: 'فطير مشلتت',
    description: 'Traditional flaky Egyptian pastry',
    descriptionAr: 'الفطير المشلتت التقليدي المصري الهش',
    price: 25,
    image: 'https://images.pexels.com/photos/7525098/pexels-photo-7525098.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'bakery',
    available: true,
    featured: true
  },
  {
    id: '13',
    name: 'Sweet Feteer',
    nameAr: 'فطير بالسكر والعسل',
    description: 'Sweet feteer with sugar and honey',
    descriptionAr: 'فطير حلو بالسكر والعسل الأبيض',
    price: 28,
    image: 'https://images.pexels.com/photos/7525089/pexels-photo-7525089.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'bakery',
    available: true
  },
  {
    id: '14',
    name: 'Savory Feteer',
    nameAr: 'فطير حادق',
    description: 'Savory feteer with cheese, sausage, or minced meat',
    descriptionAr: 'فطير حادق بالجبنة أو السجق أو اللحمة المفرومة',
    price: 35,
    image: 'https://images.pexels.com/photos/6419558/pexels-photo-6419558.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'bakery',
    available: true
  },
  {
    id: '15',
    name: 'Baladi Bread',
    nameAr: 'عيش بلدي',
    description: 'Traditional Egyptian bread',
    descriptionAr: 'العيش البلدي المصري التقليدي',
    price: 8,
    image: 'https://images.pexels.com/photos/5946654/pexels-photo-5946654.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'bakery',
    available: true
  },
  {
    id: '16',
    name: 'Roqaq with Meat',
    nameAr: 'رقاق باللحمة',
    description: 'Thin pastry layers with seasoned meat',
    descriptionAr: 'رقاق رفيع باللحمة المتبلة والبصل',
    price: 42,
    image: 'https://images.pexels.com/photos/8629172/pexels-photo-8629172.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'bakery',
    available: true
  },

  // حلويات شرقية - Oriental Sweets
  {
    id: '17',
    name: 'Kunafa',
    nameAr: 'كنافة',
    description: 'Traditional Middle Eastern dessert with cheese and syrup',
    descriptionAr: 'الكنافة الشرقية التقليدية بالجبنة والقطر',
    price: 32,
    image: 'https://images.pexels.com/photos/7525161/pexels-photo-7525161.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    available: true,
    featured: true
  },
  {
    id: '18',
    name: 'Qatayef',
    nameAr: 'قطايف',
    description: 'Stuffed pancakes with nuts and cream',
    descriptionAr: 'قطايف محشية بالمكسرات والقشطة',
    price: 28,
    image: 'https://images.pexels.com/photos/7525098/pexels-photo-7525098.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    available: true
  },
  {
    id: '19',
    name: 'Rice Pudding',
    nameAr: 'رز بلبن',
    description: 'Creamy rice pudding with vanilla and cinnamon',
    descriptionAr: 'رز بلبن كريمي بالفانيليا والقرفة',
    price: 22,
    image: 'https://images.pexels.com/photos/7525089/pexels-photo-7525089.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    available: true
  },
  {
    id: '20',
    name: 'Om Ali',
    nameAr: 'أم علي',
    description: 'Traditional Egyptian bread pudding with nuts and raisins',
    descriptionAr: 'حلوى أم علي التقليدية بالمكسرات والزبيب',
    price: 25,
    image: 'https://images.pexels.com/photos/7525161/pexels-photo-7525161.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    available: true
  },
  {
    id: '21',
    name: 'Basbousa',
    nameAr: 'بسبوسة',
    description: 'Sweet semolina cake soaked in syrup',
    descriptionAr: 'كيكة السميد الحلوة المنقوعة في الشربات',
    price: 20,
    image: 'https://images.pexels.com/photos/7525098/pexels-photo-7525098.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    available: true
  },
  {
    id: '22',
    name: 'Goulash',
    nameAr: 'جلاش',
    description: 'Crispy phyllo pastry with nuts and honey',
    descriptionAr: 'جلاش مقرمش بالمكسرات والعسل',
    price: 30,
    image: 'https://images.pexels.com/photos/7525161/pexels-photo-7525161.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    available: true
  },

  // مشروبات - Beverages
  {
    id: '23',
    name: 'Sobia',
    nameAr: 'سوبيا',
    description: 'Traditional Egyptian coconut and rice drink',
    descriptionAr: 'مشروب السوبيا المصري التقليدي بجوز الهند والأرز',
    price: 15,
    image: 'https://images.pexels.com/photos/5946654/pexels-photo-5946654.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks',
    available: true,
    featured: true
  },
  {
    id: '24',
    name: 'Kharoub',
    nameAr: 'خروب',
    description: 'Sweet carob drink',
    descriptionAr: 'مشروب الخروب الحلو المنعش',
    price: 12,
    image: 'https://images.pexels.com/photos/7525089/pexels-photo-7525089.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks',
    available: true
  },
  {
    id: '25',
    name: 'Karkadeh',
    nameAr: 'كركديه',
    description: 'Traditional hibiscus tea, served hot or cold',
    descriptionAr: 'شاي الكركديه التقليدي، يُقدم ساخناً أو بارداً',
    price: 10,
    image: 'https://images.pexels.com/photos/5946654/pexels-photo-5946654.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks',
    available: true
  },
  {
    id: '26',
    name: 'Mango Juice',
    nameAr: 'عصير مانجو',
    description: 'Fresh mango juice',
    descriptionAr: 'عصير مانجو طازج طبيعي',
    price: 18,
    image: 'https://images.pexels.com/photos/7525089/pexels-photo-7525089.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks',
    available: true
  },
  {
    id: '27',
    name: 'Tamarind',
    nameAr: 'تمر هندي',
    description: 'Sweet and tangy tamarind drink',
    descriptionAr: 'مشروب التمر الهندي الحلو والحامض',
    price: 14,
    image: 'https://images.pexels.com/photos/5946654/pexels-photo-5946654.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks',
    available: true
  },
  {
    id: '28',
    name: 'Laban Rayeb',
    nameAr: 'لبن رايب',
    description: 'Traditional fermented milk drink',
    descriptionAr: 'اللبن الرايب التقليدي المنعش',
    price: 12,
    image: 'https://images.pexels.com/photos/7525089/pexels-photo-7525089.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks',
    available: true
  }
];

export const categories = [
  { id: 'main', name: 'Popular Dishes', nameAr: 'أكلات شعبية' },
  { id: 'stuffed', name: 'Stuffed Dishes', nameAr: 'محشي' },
  { id: 'bakery', name: 'Bakery & Feteer', nameAr: 'مخبوزات وفطير' },
  { id: 'desserts', name: 'Oriental Sweets', nameAr: 'حلويات شرقية' },
  { id: 'drinks', name: 'Beverages', nameAr: 'مشروبات' }
];