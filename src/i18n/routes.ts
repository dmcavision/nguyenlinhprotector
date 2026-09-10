export type Locale = 'en' | 'vi';
export const pairs = {
  home: { en: '/', vi: '/vi/' },
  copyright: { en: '/copyright-enforcement/', vi: '/vi/bao-ve-ban-quyen/' },
  dmca: { en: '/dmca-takedown/', vi: '/vi/go-bo-dmca/' },
  counter: { en: '/counter-claim/', vi: '/vi/phan-doi-yeu-cau-go-bo/' },
  brand: { en: '/brand-protection/', vi: '/vi/bao-ve-thuong-hieu/' },
  process: { en: '/how-it-works/', vi: '/vi/quy-trinh/' },
  about: { en: '/about/', vi: '/vi/gioi-thieu/' },
  insights: { en: '/insights/', vi: '/vi/kien-thuc/' },
  contact: { en: '/contact/', vi: '/vi/lien-he/' },
  platformLogins: {
    en: '/platform-logins/',
    vi: '/vi/dang-nhap-nen-tang/',
  },
  privacy: { en: '/privacy-policy/', vi: '/vi/chinh-sach-bao-mat/' },
  terms: { en: '/terms-of-use/', vi: '/vi/dieu-khoan-su-dung/' },
  document: {
    en: '/insights/document-online-copyright-infringement/',
    vi: '/vi/kien-thuc/ghi-nhan-vi-pham-ban-quyen-truc-tuyen/',
  },
  notice: {
    en: '/insights/dmca-notice-information/',
    vi: '/vi/kien-thuc/thong-tin-thong-bao-dmca/',
  },
  counterGuide: {
    en: '/insights/dmca-counter-notification-guide/',
    vi: '/vi/kien-thuc/huong-dan-thong-bao-phan-doi-dmca/',
  },
  evidence: {
    en: '/insights/brand-protection-evidence-checklist/',
    vi: '/vi/kien-thuc/danh-sach-bang-chung-thuong-hieu/',
  },
  dmcaProcess: {
    en: '/insights/dmca-takedown-process/',
    vi: '/vi/kien-thuc/quy-trinh-go-bo-dmca/',
  },
  copyrightTrademark: {
    en: '/insights/copyright-vs-trademark-infringement/',
    vi: '/vi/kien-thuc/phan-biet-vi-pham-ban-quyen-va-nhan-hieu/',
  },
  afterTakedown: {
    en: '/insights/what-happens-after-dmca-takedown-or-counter-notice/',
    vi: '/vi/kien-thuc/sau-khi-noi-dung-bi-go-hoac-nhan-counter-claim/',
  },
} as const;
export type PageKey = keyof typeof pairs;
export type MainKey = Exclude<
  PageKey,
  | 'document'
  | 'notice'
  | 'counterGuide'
  | 'evidence'
  | 'dmcaProcess'
  | 'copyrightTrademark'
  | 'afterTakedown'
>;
export const mainKeys: MainKey[] = [
  'home',
  'copyright',
  'dmca',
  'counter',
  'brand',
  'process',
  'about',
  'insights',
  'contact',
  'platformLogins',
  'privacy',
  'terms',
];
export const serviceKeys = ['copyright', 'dmca', 'counter', 'brand'] as const;
export const site = 'https://nguyenlinhprotector.net';
export const business = {
  name: 'Nguyen Linh Protector LLC',
  brand: 'Nguyen Linh Protector',
  email: 'inquiry@nguyenlinhprotector.net',
  phone: '+18564216338',
  displayPhone: '+1 (856) 421-6338',
  address: '30 N Gould St, Ste N, Sheridan, WY 82801, United States',
  id: '2026-002075982',
};
