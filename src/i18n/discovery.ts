import type { Locale } from './routes';
type Discovery = {
  eyebrow: string;
  heading: string;
  intro: string;
  issues: {
    title: string;
    text: string;
    service: 'copyright' | 'counter' | 'brand';
  }[];
  dmcaText: string;
  dmcaLink: string;
  unsure: string;
  contact: string;
  guidesEyebrow: string;
  guidesHeading: string;
  guidesIntro: string;
  allGuides: string;
};
export const discovery: Record<Locale, Discovery> = {
  en: {
    eyebrow: 'Find the right support',
    heading: 'What issue are you facing?',
    intro:
      'Start with what you have observed. These common situations can help you choose a service to explore.',
    issues: [
      {
        title: 'Your content has been copied',
        text: 'Photos, videos, articles, or creative files appear elsewhere without your permission. Start by documenting the original work and the reported URLs.',
        service: 'copyright',
      },
      {
        title: 'Your content was removed after a complaint',
        text: 'A provider disabled content you posted after receiving a copyright notice, and you believe the removal resulted from a mistake or misidentification. Preserve the notice, case reference, and removed material.',
        service: 'counter',
      },
      {
        title: 'An account is impersonating your brand',
        text: 'A profile or website presents itself as your business or claims an affiliation. Keep the account URL and the statements that concern you.',
        service: 'brand',
      },
      {
        title: 'A listing promotes suspected counterfeit goods',
        text: 'A seller uses your brand to promote goods you suspect are counterfeit. Record the listing and specific product discrepancies for review.',
        service: 'brand',
      },
    ],
    dmcaText: 'Preparing a copyright notice through a provider’s DMCA channel?',
    dmcaLink: 'Explore DMCA takedown support',
    unsure: 'Not sure which service fits your situation?',
    contact: 'Describe the issue to our team',
    guidesEyebrow: 'Practical guidance',
    guidesHeading: 'Prepare a clearer evidence file.',
    guidesIntro:
      'Three guides to help you document the issue and understand what information to gather before reporting.',
    allGuides: 'View all insights',
  },
  vi: {
    eyebrow: 'Chọn hướng hỗ trợ',
    heading: 'Bạn đang gặp vấn đề gì?',
    intro:
      'Bắt đầu từ những gì bạn đã quan sát. Các tình huống thường gặp dưới đây giúp bạn chọn dịch vụ để tìm hiểu.',
    issues: [
      {
        title: 'Nội dung của bạn bị sao chép',
        text: 'Ảnh, video, bài viết hoặc tệp sáng tạo xuất hiện ở nơi khác khi chưa được bạn cho phép. Hãy ghi nhận tác phẩm gốc và các URL liên quan.',
        service: 'copyright',
      },
      {
        title: 'Nội dung của bạn bị gỡ sau khiếu nại',
        text: 'Nhà cung cấp đã vô hiệu hóa nội dung bạn đăng sau một thông báo bản quyền và bạn cho rằng việc gỡ bỏ xuất phát từ nhầm lẫn hoặc nhận diện sai. Hãy lưu thông báo, mã vụ việc và nội dung đã bị gỡ.',
        service: 'counter',
      },
      {
        title: 'Tài khoản đang mạo danh thương hiệu',
        text: 'Hồ sơ hoặc website tự nhận là doanh nghiệp của bạn hay tuyên bố có liên kết. Hãy lưu URL tài khoản và các thông tin gây hiểu nhầm.',
        service: 'brand',
      },
      {
        title: 'Tin đăng quảng bá hàng nghi giả',
        text: 'Người bán sử dụng thương hiệu của bạn để quảng bá hàng hóa bị nghi là giả. Hãy lưu tin đăng và những khác biệt cụ thể của sản phẩm để xem xét.',
        service: 'brand',
      },
    ],
    dmcaText:
      'Bạn cần chuẩn bị thông báo bản quyền qua kênh DMCA của nhà cung cấp?',
    dmcaLink: 'Tìm hiểu dịch vụ hỗ trợ DMCA',
    unsure: 'Chưa rõ dịch vụ nào phù hợp với tình huống của bạn?',
    contact: 'Mô tả vấn đề với chúng tôi',
    guidesEyebrow: 'Hướng dẫn thực hành',
    guidesHeading: 'Chuẩn bị hồ sơ bằng chứng rõ ràng.',
    guidesIntro:
      'Ba hướng dẫn giúp bạn ghi nhận vấn đề và biết cần thu thập thông tin gì trước khi báo cáo.',
    allGuides: 'Xem tất cả bài hướng dẫn',
  },
};
