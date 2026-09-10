import type { Locale, MainKey } from './routes';
type Page = { title: string; description: string; intro: string };
type Copy = {
  pages: Record<MainKey, Page>;
  nav: string[];
  home: string;
  menu: string;
  skip: string;
  services: string;
  cta: string;
  explore: string;
  eyebrow: string;
  serviceHeading: string;
  serviceIntro: string;
  processHeading: string;
  processIntro: string;
  steps: [string, string][];
  principles: [string, string][];
  principlesHeading: string;
  inquiryHeading: string;
  inquiryText: string;
  emailUs: string;
  callUs: string;
  learn: string;
  read: string;
  related: string;
  disclaimer: string;
  registered: string;
  checklist: string[];
  sensitive: string;
  checklistHeading: string;
};
export const copy: Record<Locale, Copy> = {
  en: {
    pages: {
      home: {
        title: 'Online Copyright Enforcement & Brand Protection',
        description:
          'Nguyen Linh Protector supports online copyright enforcement, DMCA notices, counter claims, and evidence-led brand protection.',
        intro:
          'Nguyen Linh Protector helps rights holders identify, document, and report unauthorized online use of copyrighted content and protected brands.',
      },
      copyright: {
        title: 'Copyright Enforcement',
        description:
          'Document unauthorized use of creative work and prepare platform reports with administrative copyright enforcement support.',
        intro:
          'A clear record of your rights. A considered response to unauthorized use. We help creators, publishers, and rights holders turn scattered evidence into organized platform reports.',
      },
      dmca: {
        title: 'DMCA Takedown Support',
        description:
          'Prepare and organize DMCA notice information, identify available reporting channels, and track service-provider responses.',
        intro:
          'From identifying the original work to organizing specific URLs, we assist rights holders with the administrative steps behind a carefully prepared DMCA notice.',
      },
      counter: {
        title: 'Counter Claim Support',
        description:
          'Administrative support for reviewing removal notices, organizing evidence, and preparing DMCA counter-notification information for provider review.',
        intro:
          'If your content was removed after a copyright complaint and you believe the removal resulted from a mistake or misidentification, we help organize the notice, supporting records, and counter-notification information for your review.',
      },
      brand: {
        title: 'Online Brand Protection',
        description:
          'Evidence-led support for trademark misuse, suspected counterfeit promotion, and online impersonation reports.',
        intro:
          'Help platforms understand what is happening to your brand. We document suspected trademark misuse, counterfeit promotion, and impersonation with clear, reviewable evidence.',
      },
      process: {
        title: 'How Enforcement Support Works',
        description:
          'Explore our six-stage workflow, from rights verification and evidence collection to platform submission and response tracking.',
        intro:
          'Every report starts with the right foundation: verified authority, a defined scope, and evidence that a platform can review.',
      },
      about: {
        title: 'About Nguyen Linh Protector',
        description:
          'Learn about Nguyen Linh Protector LLC, a Wyoming company providing informational and administrative IP enforcement support.',
        intro:
          'Focused on the details that make online enforcement reports clear, traceable, and responsible.',
      },
      insights: {
        title: 'Insights & Practical Guides',
        description:
          'Practical guides to documenting copyright issues, preparing DMCA notice information, and organizing brand protection evidence.',
        intro:
          'Understand the evidence. Prepare with confidence. Educational guidance for creators, businesses, and authorized representatives.',
      },
      contact: {
        title: 'Request an Enforcement Review',
        description:
          'Submit an online inquiry about copyright enforcement, DMCA takedowns, counter claims, or brand protection.',
        intro:
          'Start with the work, removal notice, or brand involved, the relevant URLs, and your relationship to the matter. We can then assess the information and discuss an appropriate scope.',
      },
      platformLogins: {
        title: 'Platform Logins',
        description:
          'Access Nguyen Linh Protector platforms for Meta IP tools, brand protection, and content protection.',
        intro:
          'Choose the workspace assigned to your account. Each login opens the corresponding Nguyen Linh Protector platform.',
      },
      privacy: {
        title: 'Privacy Policy',
        description:
          'How Nguyen Linh Protector handles website visits, inquiry information, enforcement records, and privacy requests.',
        intro:
          'This policy describes information handled through this website and initial inquiries. Last updated: September 10, 2026.',
      },
      terms: {
        title: 'Terms of Use',
        description:
          'Conditions for using the Nguyen Linh Protector website and the scope and limitations of administrative enforcement support.',
        intro:
          'Please read these terms before using this website or sending an inquiry. Last updated: September 10, 2026.',
      },
    },
    nav: ['Services', 'How it works', 'About', 'Insights', 'Contact'],
    home: 'Home',
    menu: 'Menu',
    skip: 'Skip to content',
    services: 'Our expertise',
    cta: 'Request an Enforcement Review',
    explore: 'Explore Our Services',
    eyebrow: 'IP Enforcement & Brand Protection',
    serviceHeading: 'Your rights. A clear path forward.',
    serviceIntro:
      'Focused support for the content you create and the brand you build.',
    processHeading: 'Evidence first. Every step accountable.',
    processIntro:
      'A structured process connects your rights to the reported material, with a clear record from initial review to platform response.',
    steps: [
      [
        'Rights verification',
        'Establish ownership or authorization to act for the rights holder.',
      ],
      [
        'Scope assessment',
        'Identify the works, brands, URLs, and platforms involved.',
      ],
      [
        'Evidence collection',
        'Preserve source links, dated captures, and relevant context.',
      ],
      [
        'Notice preparation',
        'Organize the claim, supporting records, and required statements.',
      ],
      [
        'Platform submission',
        'Submit through available reporting channels within the agreed scope.',
      ],
      [
        'Tracking and reporting',
        'Record acknowledgments, requests for information, and platform decisions.',
      ],
    ],
    principlesHeading: 'Built on careful judgment.',
    principles: [
      [
        'Evidence over assumptions',
        'We distinguish observable facts from allegations and identify gaps before preparing a report.',
      ],
      [
        'Defined scope',
        'You know which rights, materials, and reporting channels an engagement covers.',
      ],
      [
        'Transparent expectations',
        'Platforms decide the outcome. We focus on clear submissions and documented responses.',
      ],
    ],
    inquiryHeading: 'Start with the evidence.',
    inquiryText:
      'Tell us what you own, where it appears, and what you have documented. Let’s establish the next step.',
    emailUs: 'Email our team',
    callUs: 'Call our team',
    learn: 'Explore service',
    read: 'Read guide',
    related: 'Related services',
    registered: 'Registered Office',
    disclaimer:
      'Services are informational and administrative enforcement support, not legal advice. Nguyen Linh Protector LLC is not a law firm. Platform decisions remain under the control of the relevant platform; no outcome is guaranteed. An inquiry does not create an attorney-client relationship. Consult qualified legal counsel for jurisdiction-specific advice.',
    checklistHeading: 'What to include in your inquiry',
    checklist: [
      'Your full name and organization',
      'Your relationship to the work, account, or rights holder',
      'The relevant copyright or trademark',
      'URLs of the suspected infringement',
      'The platform involved',
      'A brief explanation of the issue',
    ],
    sensitive:
      'Do not email passwords, payment credentials, government identification, or unnecessary sensitive personal data.',
  },
  vi: {
    pages: {
      home: {
        title: 'Thực thi bản quyền và bảo vệ thương hiệu trực tuyến',
        description:
          'Nguyen Linh Protector hỗ trợ thực thi bản quyền, thông báo DMCA, phản đối yêu cầu gỡ bỏ và bảo vệ thương hiệu.',
        intro:
          'Nguyen Linh Protector hỗ trợ chủ sở hữu quyền xác định, ghi nhận và báo cáo việc sử dụng trái phép nội dung có bản quyền và thương hiệu được bảo hộ trên môi trường trực tuyến.',
      },
      copyright: {
        title: 'Bảo vệ bản quyền',
        description:
          'Hỗ trợ ghi nhận việc sử dụng tác phẩm trái phép, tổ chức bằng chứng và chuẩn bị báo cáo đến nền tảng.',
        intro:
          'Hồ sơ quyền rõ ràng là nền tảng cho một báo cáo có căn cứ. Chúng tôi hỗ trợ nhà sáng tạo, nhà xuất bản và chủ sở hữu quyền tổ chức thông tin để nền tảng xem xét.',
      },
      dmca: {
        title: 'Hỗ trợ gỡ bỏ theo DMCA',
        description:
          'Hỗ trợ chuẩn bị thông tin thông báo DMCA, xác định kênh báo cáo phù hợp và theo dõi phản hồi của nhà cung cấp dịch vụ.',
        intro:
          'Từ xác định tác phẩm gốc đến tổng hợp từng URL, chúng tôi hỗ trợ các bước hành chính cần thiết để chuẩn bị thông báo DMCA một cách cẩn trọng.',
      },
      counter: {
        title: 'Hỗ trợ phản đối yêu cầu gỡ bỏ',
        description:
          'Hỗ trợ hành chính để rà soát thông báo gỡ bỏ, tổ chức bằng chứng và chuẩn bị thông tin phản đối theo quy trình DMCA.',
        intro:
          'Nếu nội dung của bạn bị gỡ sau khi có khiếu nại bản quyền và bạn cho rằng nguyên nhân là nhầm lẫn hoặc nhận diện sai, chúng tôi hỗ trợ tổ chức thông báo, bằng chứng và thông tin phản đối để bạn xem xét.',
      },
      brand: {
        title: 'Bảo vệ thương hiệu trực tuyến',
        description:
          'Hỗ trợ thu thập bằng chứng và báo cáo hành vi lạm dụng nhãn hiệu, quảng bá hàng giả hoặc mạo danh trên môi trường trực tuyến.',
        intro:
          'Giúp nền tảng hiểu rõ vấn đề đang xảy ra với thương hiệu của bạn. Chúng tôi ghi nhận dấu hiệu lạm dụng nhãn hiệu, quảng bá hàng giả và mạo danh bằng hồ sơ có thể kiểm tra.',
      },
      process: {
        title: 'Quy trình hỗ trợ thực thi',
        description:
          'Tìm hiểu quy trình sáu bước từ xác minh quyền, thu thập bằng chứng đến gửi báo cáo và theo dõi phản hồi của nền tảng.',
        intro:
          'Mỗi báo cáo bắt đầu từ cơ sở phù hợp: thẩm quyền được xác minh, phạm vi rõ ràng và bằng chứng để nền tảng có thể xem xét.',
      },
      about: {
        title: 'Giới thiệu Nguyen Linh Protector',
        description:
          'Tìm hiểu Nguyen Linh Protector LLC, doanh nghiệp Wyoming cung cấp hỗ trợ thông tin và hành chính trong thực thi quyền sở hữu trí tuệ.',
        intro:
          'Chú trọng từng chi tiết để hồ sơ báo cáo trực tuyến rõ ràng, có thể theo dõi và được chuẩn bị có trách nhiệm.',
      },
      insights: {
        title: 'Kiến thức & Hướng dẫn thực hành',
        description:
          'Hướng dẫn ghi nhận vấn đề bản quyền, chuẩn bị thông tin thông báo DMCA và tổ chức bằng chứng bảo vệ thương hiệu.',
        intro:
          'Hiểu bằng chứng, chuẩn bị rõ ràng. Kiến thức tham khảo dành cho nhà sáng tạo, doanh nghiệp và người đại diện được ủy quyền.',
      },
      contact: {
        title: 'Yêu cầu đánh giá vụ việc',
        description:
          'Gửi yêu cầu trực tuyến về bản quyền, gỡ bỏ DMCA, phản đối yêu cầu gỡ bỏ hoặc bảo vệ thương hiệu.',
        intro:
          'Hãy bắt đầu bằng tác phẩm, thông báo gỡ bỏ hoặc thương hiệu liên quan, các URL và vai trò của bạn trong vụ việc. Từ đó, chúng tôi có thể xem xét thông tin và trao đổi về phạm vi phù hợp.',
      },
      platformLogins: {
        title: 'Đăng nhập nền tảng',
        description:
          'Truy cập các nền tảng Nguyen Linh Protector dành cho công cụ Meta IP, bảo vệ thương hiệu và bảo vệ nội dung.',
        intro:
          'Chọn không gian làm việc được cấp cho tài khoản của bạn. Mỗi nút đăng nhập sẽ mở nền tảng Nguyen Linh Protector tương ứng.',
      },
      privacy: {
        title: 'Chính sách bảo mật',
        description:
          'Cách Nguyen Linh Protector xử lý thông tin truy cập, yêu cầu liên hệ, hồ sơ thực thi và đề nghị về quyền riêng tư.',
        intro:
          'Chính sách này mô tả việc xử lý thông tin qua website và các yêu cầu liên hệ ban đầu. Cập nhật ngày 10 tháng 9 năm 2026.',
      },
      terms: {
        title: 'Điều khoản sử dụng',
        description:
          'Điều kiện sử dụng website Nguyen Linh Protector cùng phạm vi và giới hạn của dịch vụ hỗ trợ hành chính về thực thi quyền.',
        intro:
          'Vui lòng đọc các điều khoản trước khi sử dụng website hoặc gửi yêu cầu liên hệ. Cập nhật ngày 10 tháng 9 năm 2026.',
      },
    },
    nav: ['Dịch vụ', 'Quy trình', 'Giới thiệu', 'Kiến thức', 'Liên hệ'],
    home: 'Trang chủ',
    menu: 'Danh mục',
    skip: 'Chuyển đến nội dung',
    services: 'Chuyên môn của chúng tôi',
    cta: 'Yêu cầu đánh giá vụ việc',
    explore: 'Khám phá dịch vụ',
    eyebrow: 'Thực thi quyền SHTT & Bảo vệ thương hiệu',
    serviceHeading: 'Quyền của bạn. Hướng đi rõ ràng.',
    serviceIntro:
      'Hỗ trợ tập trung vào nội dung bạn sáng tạo và thương hiệu bạn xây dựng.',
    processHeading: 'Bằng chứng trước tiên. Rõ ràng từng bước.',
    processIntro:
      'Quy trình có cấu trúc liên kết quyền của bạn với nội dung bị báo cáo, lưu lại hồ sơ từ đánh giá ban đầu đến phản hồi của nền tảng.',
    steps: [
      [
        'Xác minh quyền',
        'Xác định quyền sở hữu hoặc thẩm quyền đại diện cho chủ sở hữu quyền.',
      ],
      [
        'Đánh giá phạm vi',
        'Xác định tác phẩm, thương hiệu, URL và nền tảng liên quan.',
      ],
      [
        'Thu thập bằng chứng',
        'Lưu liên kết nguồn, ảnh chụp có thời điểm và bối cảnh liên quan.',
      ],
      [
        'Chuẩn bị thông báo',
        'Tổ chức nội dung báo cáo, tài liệu hỗ trợ và các tuyên bố cần thiết.',
      ],
      [
        'Gửi đến nền tảng',
        'Gửi qua kênh báo cáo hiện có trong phạm vi đã thống nhất.',
      ],
      [
        'Theo dõi và báo cáo',
        'Ghi nhận xác nhận tiếp nhận, yêu cầu bổ sung và quyết định của nền tảng.',
      ],
    ],
    principlesHeading: 'Cẩn trọng trong từng đánh giá.',
    principles: [
      [
        'Bằng chứng thay cho suy đoán',
        'Phân biệt sự kiện quan sát được với cáo buộc, xác định thông tin còn thiếu trước khi chuẩn bị báo cáo.',
      ],
      [
        'Phạm vi xác định',
        'Làm rõ quyền, nội dung và kênh báo cáo thuộc phạm vi công việc.',
      ],
      [
        'Kỳ vọng minh bạch',
        'Nền tảng quyết định kết quả. Chúng tôi tập trung vào hồ sơ rõ ràng và phản hồi được ghi nhận.',
      ],
    ],
    inquiryHeading: 'Bắt đầu từ bằng chứng.',
    inquiryText:
      'Cho chúng tôi biết quyền bạn sở hữu, nơi xuất hiện nội dung và thông tin bạn đã ghi nhận để xác định bước tiếp theo.',
    emailUs: 'Gửi email',
    callUs: 'Gọi điện',
    learn: 'Tìm hiểu dịch vụ',
    read: 'Đọc hướng dẫn',
    related: 'Dịch vụ liên quan',
    registered: 'Văn phòng đăng ký (Registered Office)',
    disclaimer:
      'Dịch vụ chỉ hỗ trợ thông tin và thủ tục hành chính về thực thi quyền, không cung cấp tư vấn pháp lý. Nguyen Linh Protector LLC không phải công ty luật. Quyết định xử lý thuộc nền tảng liên quan; không bảo đảm kết quả. Việc gửi yêu cầu không tạo quan hệ luật sư–khách hàng. Hãy tham khảo luật sư đủ chuyên môn để được tư vấn theo từng khu vực pháp lý.',
    checklistHeading: 'Thông tin cần có trong yêu cầu',
    checklist: [
      'Họ tên và tổ chức của bạn',
      'Vai trò của bạn đối với tác phẩm, tài khoản hoặc chủ sở hữu quyền',
      'Bản quyền hoặc nhãn hiệu liên quan',
      'URL của nội dung nghi vi phạm',
      'Nền tảng liên quan',
      'Mô tả ngắn gọn về vấn đề',
    ],
    sensitive:
      'Không gửi qua email mật khẩu, thông tin thanh toán, giấy tờ tùy thân hoặc dữ liệu cá nhân nhạy cảm không cần thiết.',
  },
};
