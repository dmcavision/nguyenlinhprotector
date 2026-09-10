import type { Locale } from './routes';

type ContactFormCopy = {
  eyebrow: string;
  heading: string;
  intro: string;
  fields: Record<
    | 'name'
    | 'email'
    | 'organization'
    | 'relationship'
    | 'issueType'
    | 'platform'
    | 'urls'
    | 'message',
    { label: string; hint?: string; placeholder?: string }
  >;
  relationships: [string, string][];
  issueTypes: [string, string][];
  choose: string;
  consent: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  errors: Record<string, string>;
  privacy: string;
  required: string;
  noScript: string;
};

export const contactFormCopy: Record<Locale, ContactFormCopy> = {
  en: {
    eyebrow: 'Online inquiry',
    heading: 'Tell us about the issue',
    intro:
      'Provide the initial facts below. We will use them to assess whether the matter fits our administrative enforcement support.',
    fields: {
      name: { label: 'Full name' },
      email: { label: 'Email address' },
      organization: { label: 'Organization', hint: 'Optional' },
      relationship: { label: 'Relationship to the matter' },
      issueType: { label: 'Type of inquiry' },
      platform: {
        label: 'Platform involved',
        placeholder: 'For example: Facebook, Instagram, TikTok or a website',
      },
      urls: {
        label: 'Relevant content URLs',
        hint: 'One complete URL per line, up to 20 URLs',
      },
      message: {
        label: 'Brief explanation',
        placeholder:
          'Describe the original work or brand, what you observed, and any action already taken.',
      },
    },
    relationships: [
      ['owner', 'Rights holder'],
      ['employee', 'Employee of the rights holder'],
      ['authorized-representative', 'Authorized representative'],
      ['content-uploader', 'Content uploader or account holder'],
      ['agency', 'Agency or service provider'],
      ['other', 'Other'],
    ],
    issueTypes: [
      ['copyright', 'Copyright enforcement'],
      ['dmca', 'DMCA takedown support'],
      ['counter', 'Counter claim support'],
      ['brand', 'Brand protection'],
      ['other', 'Other or unsure'],
    ],
    choose: 'Select an option',
    consent:
      'I confirm that the information is accurate to the best of my knowledge and that I have not included passwords, payment credentials, government identification, or unnecessary sensitive personal data.',
    submit: 'Send inquiry',
    sending: 'Sending…',
    success:
      'Your inquiry has been sent. We will review the information and respond using the email provided.',
    error:
      'We could not send your inquiry. Please check the fields and try again, or contact us by email.',
    errors: {
      name: 'Please review the full name field.',
      email: 'Please enter a valid email address.',
      organization: 'Please review the organization field.',
      relationship: 'Please select your relationship to the matter.',
      issueType: 'Please select the type of inquiry.',
      platform: 'Please identify the platform involved.',
      urls: 'Enter one complete URL per line, beginning with https:// or http://.',
      message: 'Please provide an explanation of at least 20 characters.',
      consent: 'Please confirm the accuracy and data-handling statement.',
      invalid_origin:
        'This page cannot submit from its current address. Refresh the production website and try again.',
      rate_limited:
        'Too many inquiries were submitted from this connection. Please wait 15 minutes and try again.',
      payload_too_large:
        'The inquiry contains too much text. Shorten it and try again.',
      service_unavailable:
        'The email service is temporarily unavailable. Please contact us directly by email.',
      delivery_failed:
        'The email provider could not accept this inquiry. Please contact us directly by email.',
      invalid_form:
        'The submitted form could not be read. Refresh the page and try again.',
      network:
        'The network request failed. Check your connection and try again.',
    },
    privacy: 'Your information is handled as described in our Privacy Policy.',
    required: 'Required fields are marked with an asterisk.',
    noScript:
      'JavaScript is disabled. The form will still submit, but the confirmation will open on a separate page.',
  },
  vi: {
    eyebrow: 'Yêu cầu trực tuyến',
    heading: 'Mô tả vấn đề của bạn',
    intro:
      'Cung cấp các thông tin ban đầu dưới đây. Chúng tôi sẽ dùng chúng để đánh giá vụ việc có phù hợp với dịch vụ hỗ trợ hành chính về thực thi quyền hay không.',
    fields: {
      name: { label: 'Họ và tên' },
      email: { label: 'Email' },
      organization: { label: 'Tổ chức', hint: 'Không bắt buộc' },
      relationship: { label: 'Vai trò của bạn trong vụ việc' },
      issueType: { label: 'Loại yêu cầu' },
      platform: {
        label: 'Nền tảng liên quan',
        placeholder: 'Ví dụ: Facebook, Instagram, TikTok hoặc một website',
      },
      urls: {
        label: 'URL nội dung liên quan',
        hint: 'Mỗi dòng một URL đầy đủ, tối đa 20 URL',
      },
      message: {
        label: 'Mô tả ngắn gọn',
        placeholder:
          'Mô tả tác phẩm hoặc thương hiệu gốc, điều bạn quan sát được và biện pháp đã thực hiện nếu có.',
      },
    },
    relationships: [
      ['owner', 'Chủ sở hữu quyền'],
      ['employee', 'Nhân viên của chủ sở hữu quyền'],
      ['authorized-representative', 'Người đại diện được ủy quyền'],
      ['content-uploader', 'Người đăng nội dung hoặc chủ tài khoản'],
      ['agency', 'Đơn vị dịch vụ hoặc đại lý'],
      ['other', 'Khác'],
    ],
    issueTypes: [
      ['copyright', 'Bảo vệ bản quyền'],
      ['dmca', 'Hỗ trợ gỡ bỏ theo DMCA'],
      ['counter', 'Hỗ trợ phản đối yêu cầu gỡ bỏ'],
      ['brand', 'Bảo vệ thương hiệu'],
      ['other', 'Khác hoặc chưa xác định'],
    ],
    choose: 'Chọn một mục',
    consent:
      'Tôi xác nhận thông tin là chính xác theo hiểu biết của mình và không gửi mật khẩu, thông tin thanh toán, giấy tờ tùy thân hoặc dữ liệu cá nhân nhạy cảm không cần thiết.',
    submit: 'Gửi yêu cầu',
    sending: 'Đang gửi…',
    success:
      'Yêu cầu của bạn đã được gửi. Chúng tôi sẽ xem xét và phản hồi qua email bạn cung cấp.',
    error:
      'Không thể gửi yêu cầu. Vui lòng kiểm tra các trường và thử lại hoặc liên hệ trực tiếp qua email.',
    errors: {
      name: 'Vui lòng kiểm tra lại trường họ và tên.',
      email: 'Vui lòng nhập địa chỉ email hợp lệ.',
      organization: 'Vui lòng kiểm tra lại trường tổ chức.',
      relationship: 'Vui lòng chọn vai trò của bạn trong vụ việc.',
      issueType: 'Vui lòng chọn loại yêu cầu.',
      platform: 'Vui lòng cho biết nền tảng liên quan.',
      urls: 'Nhập mỗi dòng một URL đầy đủ, bắt đầu bằng https:// hoặc http://.',
      message: 'Vui lòng nhập nội dung mô tả có ít nhất 20 ký tự.',
      consent: 'Vui lòng xác nhận tuyên bố về tính chính xác và xử lý dữ liệu.',
      invalid_origin:
        'Không thể gửi từ địa chỉ trang hiện tại. Hãy tải lại website chính thức và thử lại.',
      rate_limited:
        'Đã có quá nhiều yêu cầu từ kết nối này. Vui lòng chờ 15 phút rồi thử lại.',
      payload_too_large:
        'Nội dung yêu cầu quá dài. Vui lòng rút gọn và thử lại.',
      service_unavailable:
        'Dịch vụ email đang tạm thời không khả dụng. Vui lòng liên hệ trực tiếp qua email.',
      delivery_failed:
        'Nhà cung cấp email không thể tiếp nhận yêu cầu. Vui lòng liên hệ trực tiếp qua email.',
      invalid_form:
        'Không thể đọc dữ liệu biểu mẫu. Hãy tải lại trang và thử lại.',
      network: 'Kết nối mạng bị lỗi. Vui lòng kiểm tra kết nối và thử lại.',
    },
    privacy: 'Thông tin được xử lý theo Chính sách bảo mật của chúng tôi.',
    required: 'Các trường có dấu sao là bắt buộc.',
    noScript:
      'JavaScript đang tắt. Biểu mẫu vẫn gửi được nhưng xác nhận sẽ mở trên một trang riêng.',
  },
};
