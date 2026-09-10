import type { Locale } from './routes';

type PlatformCopy = {
  eyebrow: string;
  heading: string;
  intro: string;
  login: string;
  helpHeading: string;
  helpText: string;
  contact: string;
  privacyNote: string;
  platforms: {
    name: string;
    code: string;
    description: string;
    url: string;
  }[];
};

export const platformCopy: Record<Locale, PlatformCopy> = {
  en: {
    eyebrow: 'Authorized access',
    heading: 'Choose your platform',
    intro:
      'Use the workspace named in your onboarding information. Access depends on the account and permissions assigned to you.',
    login: 'Login',
    helpHeading: 'Need help accessing a platform?',
    helpText:
      'If you are unsure which workspace to use or cannot access your assigned account, contact our team from your registered business email.',
    contact: 'Contact support',
    privacyNote:
      'These buttons open separate Nguyen Linh Protector platform subdomains. Enter your credentials only after confirming the address shown in your browser.',
    platforms: [
      {
        name: 'Meta IP Tools',
        code: 'META',
        description:
          'Access the dedicated workspace for authorized Meta intellectual property review and reporting workflows.',
        url: 'https://meta.nguyenlinhprotector.net',
      },
      {
        name: 'Brand Protection',
        code: 'BRAND',
        description:
          'Open your brand protection workspace to review cases, organize evidence, and follow assigned brand matters.',
        url: 'https://bq.nguyenlinhprotector.net',
      },
      {
        name: 'Content Protection',
        code: 'CONTENT',
        description:
          'Access the content protection workspace for monitoring and managing assigned copyright protection activity.',
        url: 'https://ap.nguyenlinhprotector.net',
      },
    ],
  },
  vi: {
    eyebrow: 'Truy cập được cấp quyền',
    heading: 'Chọn nền tảng của bạn',
    intro:
      'Hãy sử dụng không gian làm việc được ghi trong thông tin tiếp nhận của bạn. Quyền truy cập phụ thuộc vào tài khoản và quyền hạn đã được cấp.',
    login: 'Login',
    helpHeading: 'Bạn cần hỗ trợ đăng nhập?',
    helpText:
      'Nếu chưa rõ cần sử dụng nền tảng nào hoặc không thể truy cập tài khoản đã được cấp, hãy liên hệ với chúng tôi từ email doanh nghiệp đã đăng ký.',
    contact: 'Liên hệ hỗ trợ',
    privacyNote:
      'Các nút này mở những tên miền phụ riêng của Nguyen Linh Protector. Chỉ nhập thông tin đăng nhập sau khi kiểm tra đúng địa chỉ hiển thị trên trình duyệt.',
    platforms: [
      {
        name: 'Meta IP Tools',
        code: 'META',
        description:
          'Truy cập không gian chuyên dụng cho quy trình xem xét và báo cáo sở hữu trí tuệ trên Meta đã được ủy quyền.',
        url: 'https://meta.nguyenlinhprotector.net',
      },
      {
        name: 'Brand Protection',
        code: 'BRAND',
        description:
          'Mở không gian bảo vệ thương hiệu để xem vụ việc, tổ chức bằng chứng và theo dõi các vấn đề thương hiệu được giao.',
        url: 'https://bq.nguyenlinhprotector.net',
      },
      {
        name: 'Content Protection',
        code: 'CONTENT',
        description:
          'Truy cập không gian bảo vệ nội dung để theo dõi và quản lý hoạt động bảo vệ bản quyền được giao.',
        url: 'https://ap.nguyenlinhprotector.net',
      },
    ],
  },
};
