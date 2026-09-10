import type { Locale } from './routes';
export type Section = {
  heading: string;
  text: string;
  items?: string[];
  source?: { href: string; label: string };
};
type ServiceKey = 'copyright' | 'dmca' | 'counter' | 'brand';
export const serviceContent: Record<Locale, Record<ServiceKey, Section[]>> = {
  en: {
    copyright: [
      {
        heading: 'For the people behind the original work',
        text: 'For photographers, writers, video producers, publishers, software creators, and businesses that own or administer copyrighted material. We first clarify which work is involved and whether you own the relevant rights or have authority to report on behalf of the owner.',
      },
      {
        heading: 'What we help document',
        text: 'Unauthorized reposting, copied website text, reused product photography, reuploaded videos, and distribution of creative files can require different reporting routes. We organize each suspected use by URL and connect it to the original work. Similarity alone is not treated as a final legal determination.',
      },
      {
        heading: 'Evidence that gives a report context',
        text: 'A useful record lets a reviewer compare the work and the reported use without reconstructing the issue.',
        items: [
          'Original publication links, source files, and publication dates where available',
          'Direct URLs to each reported item, with dated screenshots and surrounding context',
          'Ownership, assignment, license, or authorization records relevant to the claim',
          'A short explanation of which portions were copied and any known permissions',
        ],
      },
      {
        heading: 'From review to a documented response',
        text: 'We review the materials for completeness, identify the available reporting channel, and prepare a factual account for your review. After the scope and authority are confirmed, we assist with submission and record acknowledgments, additional-information requests, and decisions. If a link changes, it is recorded as a new observation rather than proof of removal.',
      },
      {
        heading: 'What you need to provide',
        text: 'Identify the rights holder and a contact authorized to confirm facts. Provide the original work, suspected-use links, your relationship to the owner, and any prior reports or correspondence. Tell us about licenses, disputes, or other context that could affect the accuracy of a report. Do not provide account passwords.',
      },
      {
        heading: 'Limits and disputed uses',
        text: 'We do not decide infringement, bypass access controls, or directly remove content. Permissions, exceptions, ownership disputes, and local law may affect the appropriate response. Platform action and response times are outside our control. Where legal assessment is needed, consult qualified counsel before proceeding.',
      },
    ],
    dmca: [
      {
        heading: 'For copyright holders and authorized representatives',
        text: 'This service assists people preparing copyright notices for providers with an available DMCA reporting route. It is appropriate when specific online material and the original copyrighted work can be identified. Trademark complaints and general reputation disputes need a different assessment.',
      },
      {
        heading: 'Identify the material precisely',
        text: 'Examples include copied articles, reused photographs, reuploaded video, or unauthorized downloadable works. Provide the URL of the actual item rather than only a profile or homepage. If multiple items are involved, separate them so a reviewer can locate each one.',
      },
      {
        heading: 'Information to prepare',
        text: 'A preparation file should bring together the facts needed to complete the provider’s notice process. The accompanying educational guide links to the statutory requirements.',
        items: [
          'The work claimed to be infringed and an original-source reference',
          'Exact locations of the reported material and supporting dated captures',
          'The claimant’s contact information and authority to act',
          'Facts needed to review the required accuracy, good-faith, and authorization statements',
          'Prior notice reference numbers and any provider correspondence',
        ],
      },
      {
        heading: 'How we assist with a notice',
        text: 'We check the record for missing locations or inconsistent ownership details, identify the provider’s available reporting route, and organize the notice for confirmation by an authorized person. We assist with submission within the agreed scope and track the provider’s response. Required statements must reflect the claimant’s actual knowledge and authority.',
      },
      {
        heading: 'Your role in the process',
        text: 'You must confirm the facts, authority, contact details, and statements before submission. Disclose any permission, license, counter-notice, or existing dispute you know about. A screenshot is useful context but does not replace a working location reference or establish ownership by itself.',
      },
      {
        heading: 'A notice is not a guaranteed removal',
        text: 'Providers make their own decisions and may seek additional information. A counter-notice or disputed claim may require a response from qualified legal counsel. We do not provide litigation services or promise content removal, account suspension, or search-result removal. Requirements and available routes can vary by provider and jurisdiction.',
      },
    ],
    counter: [
      {
        heading: 'For content removed after a copyright notice',
        text: 'This service supports users whose content was removed or disabled after a copyright complaint and who believe the action resulted from a mistake or misidentification. We begin with the provider’s notice, the removed material, and the basis for your position. A counter-notification is a formal response with legal consequences, not a general appeal for any moderation decision.',
      },
      {
        heading: 'Review the notice and the removal',
        text: 'We organize the complaint reference, the location where the material appeared, the provider’s correspondence, and a copy of the removed content. We also record relevant licenses, permissions, original source files, publication history, or other facts you want considered. We do not assume that ownership of an account establishes rights to every item it contained.',
      },
      {
        heading: 'Information a counter-notification may require',
        text: 'For a counter-notification under section 512 of the U.S. Copyright Act, the provider may require specific information and statements. The subscriber must personally confirm their accuracy and decide whether to proceed.',
        items: [
          'A physical or electronic signature of the subscriber',
          'Identification of the removed material and its former location',
          'A good-faith statement under penalty of perjury concerning mistake or misidentification',
          'Name, address, telephone number, and the required jurisdiction and service-of-process statements',
          'The provider’s notice, case reference, and relevant correspondence',
        ],
        source: {
          href: 'https://www.copyright.gov/512/',
          label: 'Review the U.S. Copyright Office Section 512 resources',
        },
      },
      {
        heading: 'How we support preparation',
        text: 'We check the file for missing identifiers and inconsistent facts, identify the provider’s available counter-notification route, and organize the information for your review. We can assist with administrative submission within an agreed scope and record acknowledgments or requests for more information. You remain responsible for every factual and legal statement made in your name.',
      },
      {
        heading: 'Before you decide to submit',
        text: 'Tell us about any license restrictions, ownership disputes, prior complaints, settlement discussions, or legal proceedings. A counter-notification may disclose your contact details to the original complainant and includes consent to federal court jurisdiction and acceptance of service of process. Obtain advice from qualified legal counsel if you do not understand those statements or the risk of a claim.',
      },
      {
        heading: 'Scope and important limits',
        text: 'We provide informational and administrative support, not legal advice or representation. We do not determine non-infringement, prepare litigation strategy, or guarantee restoration. The provider controls its process, and the original complainant may pursue court action. Knowingly making a material misrepresentation can create liability, so the counter-notification must reflect your actual good-faith belief.',
      },
    ],
    brand: [
      {
        heading: 'For brand owners and their authorized teams',
        text: 'We assist businesses, trademark owners, and authorized representatives who need to organize reports about the misuse of a protected brand. Begin with the exact mark, its owner, the relevant territory, and the goods or services connected to the issue.',
      },
      {
        heading: 'Separate the type of misuse',
        text: 'A misleading profile, an advertisement promoting suspected counterfeit goods, and a listing using a trademark may call for different platform categories. We document observable facts and distinguish suspected counterfeit promotion, impersonation, and trademark misuse. A critical review or a mention of your brand is not automatically treated as a violation.',
      },
      {
        heading: 'Build a useful evidence record',
        text: 'A reviewer needs to see both the legitimate brand and the reported representation.',
        items: [
          'Trademark owner, registration number and territory where applicable',
          'Official website and authentic social profiles for comparison',
          'Direct listing, advertisement, seller, or profile URLs and dated screenshots',
          'Visible claims of affiliation, copied branding, or specific product discrepancies',
          'Authorization to represent the owner and relevant prior report references',
        ],
      },
      {
        heading: 'A reporting path matched to the issue',
        text: 'We classify the concern, check which evidence is available, and identify relevant reporting channels. We prepare a factual report for confirmation, assist with submission, and record platform responses. Separate reports may be appropriate for distinct items, with shared ownership records organized consistently.',
      },
      {
        heading: 'What your team contributes',
        text: 'Provide brand records and explain exactly why the representation is misleading or the goods are suspected to be counterfeit. Identify authorized sellers, distributors, or accounts where relevant. Document the basis for product authenticity concerns; price alone is not presented as proof that goods are counterfeit.',
      },
      {
        heading: 'Important boundaries',
        text: 'We cannot authenticate physical goods from a listing alone, adjudicate trademark rights, or suspend accounts. Platforms control their own enforcement decisions. Cross-border rights, reseller disputes, parody, and comparative references may require legal review. No particular action or response time is guaranteed.',
      },
    ],
  },
  vi: {
    copyright: [
      {
        heading: 'Dành cho người tạo ra và quản lý tác phẩm',
        text: 'Dành cho nhiếp ảnh gia, tác giả, nhà sản xuất video, nhà xuất bản, người phát triển phần mềm và doanh nghiệp sở hữu hoặc quản lý nội dung có bản quyền. Trước tiên, cần làm rõ tác phẩm và việc bạn sở hữu quyền liên quan hay có thẩm quyền báo cáo thay chủ sở hữu.',
      },
      {
        heading: 'Nội dung chúng tôi hỗ trợ ghi nhận',
        text: 'Đăng lại tác phẩm, sao chép nội dung website, sử dụng lại ảnh sản phẩm, tải lại video và phân phối tệp sáng tạo trái phép có thể cần các kênh báo cáo khác nhau. Chúng tôi tổ chức từng trường hợp theo URL và đối chiếu với tác phẩm gốc. Sự tương đồng không được xem là kết luận pháp lý cuối cùng.',
      },
      {
        heading: 'Bằng chứng cung cấp bối cảnh cho báo cáo',
        text: 'Hồ sơ hữu ích giúp người xem xét đối chiếu tác phẩm và nội dung bị báo cáo mà không phải tự tái dựng vấn đề.',
        items: [
          'Liên kết công bố gốc, tệp nguồn và ngày công bố nếu có',
          'URL trực tiếp của từng nội dung, ảnh chụp có thời điểm và bối cảnh',
          'Tài liệu sở hữu, chuyển nhượng, cấp phép hoặc ủy quyền liên quan',
          'Mô tả phần bị sao chép và các sự cho phép đã biết',
        ],
      },
      {
        heading: 'Từ xem xét đến ghi nhận phản hồi',
        text: 'Chúng tôi rà soát tính đầy đủ, xác định kênh báo cáo và chuẩn bị mô tả sự việc để bạn kiểm tra. Sau khi xác nhận phạm vi và thẩm quyền, chúng tôi hỗ trợ gửi và ghi nhận xác nhận tiếp nhận, yêu cầu bổ sung cùng quyết định. Liên kết thay đổi được ghi nhận là quan sát mới, không mặc nhiên là bằng chứng đã gỡ bỏ.',
      },
      {
        heading: 'Thông tin bạn cần cung cấp',
        text: 'Xác định chủ sở hữu quyền và người có thẩm quyền xác nhận sự việc. Cung cấp tác phẩm gốc, liên kết nghi vi phạm, quan hệ với chủ sở hữu và trao đổi hoặc báo cáo trước đó. Cho biết giấy phép, tranh chấp hoặc bối cảnh có thể ảnh hưởng tính chính xác. Không cung cấp mật khẩu tài khoản.',
      },
      {
        heading: 'Giới hạn và trường hợp có tranh chấp',
        text: 'Chúng tôi không kết luận vi phạm, vượt qua biện pháp kiểm soát truy cập hay trực tiếp gỡ nội dung. Sự cho phép, ngoại lệ, tranh chấp sở hữu và luật địa phương có thể ảnh hưởng cách xử lý. Quyết định và thời gian phản hồi thuộc nền tảng. Hãy tham khảo luật sư khi cần đánh giá pháp lý.',
      },
    ],
    dmca: [
      {
        heading: 'Dành cho chủ sở hữu bản quyền và người được ủy quyền',
        text: 'Dịch vụ hỗ trợ chuẩn bị thông báo bản quyền cho nhà cung cấp có kênh báo cáo DMCA. Cần xác định được nội dung trực tuyến cụ thể và tác phẩm gốc. Khiếu nại nhãn hiệu và tranh chấp danh tiếng cần được đánh giá theo hướng khác.',
      },
      {
        heading: 'Xác định chính xác nội dung',
        text: 'Ví dụ gồm bài viết bị sao chép, ảnh bị sử dụng lại, video được tải lại hoặc tác phẩm được cho tải xuống trái phép. Cung cấp URL của từng nội dung thay vì chỉ trang chủ hoặc hồ sơ tài khoản. Tách riêng từng mục để người xem xét có thể tìm thấy.',
      },
      {
        heading: 'Thông tin cần chuẩn bị',
        text: 'Hồ sơ chuẩn bị cần tập hợp các dữ kiện phục vụ quy trình thông báo của nhà cung cấp. Hướng dẫn tham khảo đi kèm có liên kết đến yêu cầu của luật.',
        items: [
          'Tác phẩm được cho là bị xâm phạm và nguồn gốc để đối chiếu',
          'Vị trí chính xác của nội dung bị báo cáo cùng ảnh chụp có thời điểm',
          'Thông tin liên hệ của người báo cáo và thẩm quyền đại diện',
          'Dữ kiện để xem xét các tuyên bố về tính chính xác, thiện chí và thẩm quyền',
          'Mã tham chiếu thông báo trước đó và thư trao đổi với nhà cung cấp',
        ],
      },
      {
        heading: 'Cách chúng tôi hỗ trợ thông báo',
        text: 'Chúng tôi kiểm tra vị trí còn thiếu hoặc thông tin sở hữu không nhất quán, xác định kênh báo cáo hiện có và tổ chức thông báo để người có thẩm quyền xác nhận. Sau đó hỗ trợ gửi trong phạm vi thống nhất và theo dõi phản hồi. Các tuyên bố bắt buộc phải phản ánh hiểu biết và thẩm quyền thực tế của người báo cáo.',
      },
      {
        heading: 'Vai trò của bạn',
        text: 'Bạn cần xác nhận sự việc, thẩm quyền, thông tin liên hệ và các tuyên bố trước khi gửi. Cung cấp thông tin về sự cho phép, giấy phép, thông báo phản đối hoặc tranh chấp mà bạn biết. Ảnh chụp cung cấp bối cảnh nhưng không thay thế vị trí nội dung và không tự chứng minh quyền sở hữu.',
      },
      {
        heading: 'Thông báo không bảo đảm gỡ bỏ',
        text: 'Nhà cung cấp tự quyết định và có thể yêu cầu bổ sung. Thông báo phản đối hoặc yêu cầu bị tranh chấp có thể cần luật sư xử lý. Chúng tôi không cung cấp dịch vụ tố tụng hay cam kết gỡ nội dung, đình chỉ tài khoản hoặc xóa kết quả tìm kiếm. Yêu cầu và kênh báo cáo có thể khác nhau theo nhà cung cấp và khu vực pháp lý.',
      },
    ],
    counter: [
      {
        heading: 'Dành cho nội dung bị gỡ sau thông báo bản quyền',
        text: 'Dịch vụ này hỗ trợ người dùng có nội dung bị gỡ hoặc vô hiệu hóa sau khi có khiếu nại bản quyền và cho rằng việc xử lý xuất phát từ nhầm lẫn hoặc nhận diện sai. Chúng tôi bắt đầu bằng thông báo của nhà cung cấp, nội dung đã bị gỡ và căn cứ cho quan điểm của bạn. Thông báo phản đối là phản hồi chính thức có hệ quả pháp lý, không phải kênh kháng nghị chung cho mọi quyết định kiểm duyệt.',
      },
      {
        heading: 'Rà soát thông báo và việc gỡ bỏ',
        text: 'Chúng tôi tổ chức mã khiếu nại, vị trí nội dung trước khi bị gỡ, thư trao đổi với nhà cung cấp và bản sao nội dung liên quan. Hồ sơ cũng có thể gồm giấy phép, sự cho phép, tệp nguồn, lịch sử công bố hoặc dữ kiện khác mà bạn muốn được xem xét. Việc sở hữu tài khoản không mặc nhiên chứng minh quyền đối với mọi nội dung trong tài khoản đó.',
      },
      {
        heading: 'Thông tin có thể cần trong thông báo phản đối',
        text: 'Đối với thông báo phản đối theo Điều 512 của Luật Bản quyền Hoa Kỳ, nhà cung cấp có thể yêu cầu các thông tin và tuyên bố cụ thể. Người đăng nội dung phải tự xác nhận tính chính xác và quyết định có tiếp tục hay không.',
        items: [
          'Chữ ký vật lý hoặc điện tử của người đăng nội dung',
          'Thông tin nhận diện nội dung bị gỡ và vị trí trước đây của nội dung',
          'Tuyên bố thiện chí dưới hình phạt khai man về việc nhầm lẫn hoặc nhận diện sai',
          'Họ tên, địa chỉ, số điện thoại cùng tuyên bố bắt buộc về thẩm quyền tòa án và tiếp nhận tống đạt',
          'Thông báo của nhà cung cấp, mã vụ việc và thư trao đổi liên quan',
        ],
        source: {
          href: 'https://www.copyright.gov/512/',
          label: 'Xem tài liệu Điều 512 của Cục Bản quyền Hoa Kỳ',
        },
      },
      {
        heading: 'Cách chúng tôi hỗ trợ chuẩn bị',
        text: 'Chúng tôi kiểm tra mã tham chiếu còn thiếu và dữ kiện chưa nhất quán, xác định kênh phản đối hiện có của nhà cung cấp và tổ chức thông tin để bạn xem xét. Chúng tôi có thể hỗ trợ gửi trong phạm vi đã thống nhất và ghi nhận xác nhận hoặc yêu cầu bổ sung. Bạn vẫn chịu trách nhiệm về mọi dữ kiện và tuyên bố pháp lý được đưa ra dưới tên mình.',
      },
      {
        heading: 'Trước khi quyết định gửi',
        text: 'Hãy cho biết các giới hạn giấy phép, tranh chấp sở hữu, khiếu nại trước đó, trao đổi dàn xếp hoặc thủ tục pháp lý liên quan. Thông báo phản đối có thể khiến thông tin liên hệ của bạn được chuyển cho bên khiếu nại ban đầu, đồng thời bao gồm việc chấp thuận thẩm quyền của tòa án liên bang và tiếp nhận tống đạt. Hãy tham khảo luật sư đủ chuyên môn nếu bạn chưa hiểu các tuyên bố này hoặc rủi ro phát sinh.',
      },
      {
        heading: 'Phạm vi và giới hạn quan trọng',
        text: 'Chúng tôi cung cấp hỗ trợ thông tin và hành chính, không tư vấn hay đại diện pháp lý. Chúng tôi không kết luận không vi phạm, chuẩn bị chiến lược tố tụng hoặc bảo đảm nội dung được khôi phục. Nhà cung cấp kiểm soát quy trình và bên khiếu nại ban đầu có thể khởi kiện. Việc cố ý trình bày sai sự kiện trọng yếu có thể phát sinh trách nhiệm, vì vậy thông báo phải phản ánh đúng niềm tin thiện chí thực tế của bạn.',
      },
    ],
    brand: [
      {
        heading: 'Dành cho chủ thương hiệu và đội ngũ được ủy quyền',
        text: 'Chúng tôi hỗ trợ doanh nghiệp, chủ sở hữu nhãn hiệu và người đại diện tổ chức báo cáo về việc sử dụng thương hiệu không phù hợp. Bắt đầu bằng nhãn hiệu cụ thể, chủ sở hữu, lãnh thổ liên quan cùng hàng hóa hoặc dịch vụ gắn với vấn đề.',
      },
      {
        heading: 'Phân biệt từng loại hành vi',
        text: 'Hồ sơ gây hiểu nhầm, quảng cáo hàng nghi giả và tin đăng sử dụng nhãn hiệu có thể thuộc các nhóm báo cáo khác nhau. Chúng tôi ghi nhận sự kiện quan sát được, phân biệt quảng bá hàng nghi giả, mạo danh và lạm dụng nhãn hiệu. Đánh giá tiêu cực hoặc nhắc đến thương hiệu không mặc nhiên là vi phạm.',
      },
      {
        heading: 'Tổ chức hồ sơ bằng chứng hữu ích',
        text: 'Người xem xét cần đối chiếu thương hiệu chính thức với cách thể hiện bị báo cáo.',
        items: [
          'Chủ sở hữu, số đăng ký nhãn hiệu và lãnh thổ nếu có',
          'Website và tài khoản mạng xã hội chính thức để đối chiếu',
          'URL trực tiếp của tin đăng, quảng cáo, người bán hoặc hồ sơ cùng ảnh chụp có thời điểm',
          'Tuyên bố liên kết, yếu tố thương hiệu bị sao chép hoặc khác biệt cụ thể của sản phẩm',
          'Ủy quyền đại diện và mã báo cáo trước đó có liên quan',
        ],
      },
      {
        heading: 'Kênh báo cáo phù hợp với vấn đề',
        text: 'Chúng tôi phân loại vấn đề, kiểm tra bằng chứng và xác định kênh liên quan. Báo cáo sự việc được chuẩn bị để xác nhận trước khi hỗ trợ gửi và ghi nhận phản hồi. Có thể cần báo cáo riêng cho từng nội dung, với hồ sơ sở hữu chung được tổ chức nhất quán.',
      },
      {
        heading: 'Đóng góp từ đội ngũ của bạn',
        text: 'Cung cấp tài liệu thương hiệu và giải thích cụ thể vì sao cách thể hiện gây hiểu nhầm hoặc hàng hóa bị nghi là giả. Xác định người bán, nhà phân phối hoặc tài khoản được phép nếu liên quan. Ghi nhận căn cứ nghi ngờ tính xác thực; riêng giá thấp không được trình bày như bằng chứng hàng giả.',
      },
      {
        heading: 'Giới hạn quan trọng',
        text: 'Chúng tôi không thể xác thực hàng hóa vật lý chỉ từ tin đăng, phân xử quyền nhãn hiệu hay đình chỉ tài khoản. Nền tảng quyết định việc xử lý. Quyền xuyên biên giới, tranh chấp với người bán lại, nội dung nhại và so sánh có thể cần xem xét pháp lý. Không bảo đảm biện pháp xử lý hoặc thời gian phản hồi cụ thể.',
      },
    ],
  },
};
export const policies: Record<
  Locale,
  Record<'privacy' | 'terms', Section[]>
> = {
  en: {
    privacy: [
      {
        heading: 'Information you choose to share',
        text: 'When you email or call us, we may receive your name, organization, contact details, relationship to a rights holder, reported URLs, and supporting information. Provide only what is needed for an initial review. Avoid unnecessary personal information about yourself or others.',
      },
      {
        heading: 'Website delivery and local storage',
        text: 'This website includes a contact form but does not include advertising trackers, analytics scripts, or nonessential cookies. The hosting provider may process technical request information, such as IP address, browser details, requested pages, and timestamps, to deliver and secure the website and contact endpoint. Resend processes form messages for email delivery. Email and telephone providers handle communications through their services.',
      },
      {
        heading: 'How information is used',
        text: 'Inquiry information is used to respond, assess authority and scope, organize potential enforcement support, maintain relevant correspondence, and protect against misuse. Sending an inquiry does not itself authorize submission of a platform report. Any engagement and submission scope must be agreed separately.',
      },
      {
        heading: 'Sharing in an enforcement matter',
        text: 'Within an agreed engagement, relevant information may need to be sent to a platform or service provider. A recipient may share notice information with the reported user or others under its process. Do not assume that a submitted notice will remain confidential. We may also disclose information where legally required or necessary to protect lawful rights.',
      },
      {
        heading: 'Retention and security',
        text: 'Information is retained as needed to handle the inquiry or agreed work, keep relevant records, resolve disputes, and meet applicable obligations. Retention depends on the type and context of the record. No fixed deletion period is promised here. Email and online transmission cannot be guaranteed secure; request guidance before sharing sensitive materials.',
      },
      {
        heading: 'Privacy requests and international processing',
        text: 'Email inquiry@nguyenlinhprotector.net with a request to access, correct, or delete information. We may need to verify your authority and consider applicable recordkeeping obligations. Providers may process data outside your country. Rights and available responses depend on applicable law. This website is intended for professional inquiries and is not directed to children.',
      },
      {
        heading: 'Updates and contact',
        text: 'Changes to this policy will be published on this page with an updated date. The business responsible for inquiries is Nguyen Linh Protector LLC. Contact details and the Registered Office are listed below.',
      },
    ],
    terms: [
      {
        heading: 'Website purpose and service scope',
        text: 'This website provides general information about copyright enforcement, DMCA takedown and counter-notification support, and brand protection. Services are informational and administrative enforcement support. Nguyen Linh Protector LLC is not a law firm and does not provide legal advice or representation in court.',
      },
      {
        heading: 'Inquiries and engagements',
        text: 'Sending an email or placing a call does not create an attorney-client relationship or require us to accept a matter. The work, authority, deliverables, timing, and any fees must be agreed separately before an engagement begins. Do not rely on this website as confirmation that a report has been accepted or submitted.',
      },
      {
        heading: 'Accurate information and authority',
        text: 'Provide accurate information and act only for rights you own or are authorized to administer. Identify known licenses, permissions, disputes, and material changes. Do not use our services to submit misleading reports, suppress lawful expression, or send unlawful or unnecessarily sensitive material.',
      },
      {
        heading: 'Independent platform decisions',
        text: 'Platforms and service providers control enforcement decisions, requests for information, and response times. We do not directly remove content and do not guarantee takedowns, account suspension, search-result removal, or any specific outcome. A disputed matter may require qualified legal counsel.',
      },
      {
        heading: 'Educational content and external links',
        text: 'Articles are general educational information and may not reflect every jurisdiction or later change in law or platform practice. Consult qualified legal counsel for jurisdiction-specific advice. External websites are operated independently and their terms and privacy practices apply when you visit them.',
      },
      {
        heading: 'Website materials and availability',
        text: 'Respect applicable intellectual property rights when using website materials. Do not misrepresent our identity, interfere with the website, or attempt unauthorized access. We aim to keep information accurate and the website available, but do not promise uninterrupted access or error-free information. Nothing here excludes rights or obligations that cannot lawfully be excluded.',
      },
      {
        heading: 'Updates and questions',
        text: 'Revised terms will appear here with an updated date. Separate written engagement terms govern agreed services. Contact inquiry@nguyenlinhprotector.net if you need clarification before using the website or requesting support.',
      },
    ],
  },
  vi: {
    privacy: [
      {
        heading: 'Thông tin bạn chủ động cung cấp',
        text: 'Khi bạn gửi email hoặc gọi điện, chúng tôi có thể nhận họ tên, tổ chức, thông tin liên hệ, quan hệ với chủ sở hữu quyền, URL bị báo cáo và tài liệu hỗ trợ. Chỉ cung cấp thông tin cần cho đánh giá ban đầu; tránh dữ liệu cá nhân không cần thiết của bạn hoặc người khác.',
      },
      {
        heading: 'Phân phối website và lưu trữ cục bộ',
        text: 'Website có biểu mẫu liên hệ nhưng không có công cụ theo dõi quảng cáo, mã phân tích hoặc cookie không thiết yếu. Nhà cung cấp lưu trữ có thể xử lý địa chỉ IP, thông tin trình duyệt, trang được yêu cầu và thời điểm truy cập để phân phối, bảo vệ website và điểm tiếp nhận biểu mẫu. Resend xử lý nội dung biểu mẫu để chuyển email. Nhà cung cấp email và điện thoại xử lý trao đổi qua dịch vụ của họ.',
      },
      {
        heading: 'Mục đích sử dụng',
        text: 'Thông tin được dùng để phản hồi, đánh giá thẩm quyền và phạm vi, tổ chức hỗ trợ thực thi tiềm năng, lưu trao đổi liên quan và ngăn lạm dụng. Gửi yêu cầu không tự động cho phép gửi báo cáo đến nền tảng. Phạm vi dịch vụ và việc gửi báo cáo phải được thống nhất riêng.',
      },
      {
        heading: 'Chia sẻ trong quá trình hỗ trợ',
        text: 'Trong phạm vi công việc đã thống nhất, thông tin liên quan có thể cần được gửi đến nền tảng hoặc nhà cung cấp dịch vụ. Bên nhận có thể chia sẻ thông tin thông báo với người bị báo cáo hoặc bên khác theo quy trình của họ. Không nên mặc định thông báo sẽ được giữ kín. Thông tin cũng có thể được cung cấp khi pháp luật yêu cầu hoặc để bảo vệ quyền hợp pháp.',
      },
      {
        heading: 'Lưu giữ và bảo mật',
        text: 'Thông tin được lưu khi cần xử lý yêu cầu hoặc công việc, duy trì hồ sơ liên quan, giải quyết tranh chấp và đáp ứng nghĩa vụ áp dụng. Thời gian phụ thuộc loại và bối cảnh hồ sơ; chính sách này không cam kết thời hạn xóa cố định. Email và truyền dữ liệu trực tuyến không được bảo đảm an toàn tuyệt đối; hãy yêu cầu hướng dẫn trước khi gửi tài liệu nhạy cảm.',
      },
      {
        heading: 'Yêu cầu về quyền riêng tư và xử lý quốc tế',
        text: 'Gửi yêu cầu truy cập, sửa hoặc xóa thông tin đến inquiry@nguyenlinhprotector.net. Chúng tôi có thể cần xác minh thẩm quyền và xem xét nghĩa vụ lưu trữ. Nhà cung cấp có thể xử lý dữ liệu ngoài quốc gia của bạn. Quyền và cách đáp ứng phụ thuộc pháp luật áp dụng. Website phục vụ liên hệ chuyên môn, không hướng đến trẻ em.',
      },
      {
        heading: 'Cập nhật và liên hệ',
        text: 'Thay đổi sẽ được đăng tại trang này kèm ngày cập nhật. Doanh nghiệp phụ trách yêu cầu là Nguyen Linh Protector LLC. Thông tin liên hệ và Văn phòng đăng ký được nêu bên dưới.',
      },
    ],
    terms: [
      {
        heading: 'Mục đích website và phạm vi dịch vụ',
        text: 'Website cung cấp thông tin chung về thực thi bản quyền, hỗ trợ gỡ bỏ và phản đối theo DMCA, cùng bảo vệ thương hiệu. Dịch vụ chỉ hỗ trợ thông tin và thủ tục hành chính. Nguyen Linh Protector LLC không phải công ty luật, không tư vấn pháp lý hoặc đại diện tại tòa án.',
      },
      {
        heading: 'Yêu cầu và thỏa thuận dịch vụ',
        text: 'Gửi email hoặc gọi điện không tạo quan hệ luật sư–khách hàng và không buộc chúng tôi nhận vụ việc. Công việc, thẩm quyền, kết quả bàn giao, thời gian và phí nếu có phải được thống nhất riêng trước khi bắt đầu. Website không phải xác nhận rằng báo cáo đã được tiếp nhận hoặc gửi.',
      },
      {
        heading: 'Thông tin chính xác và thẩm quyền',
        text: 'Cung cấp thông tin chính xác và chỉ hành động đối với quyền bạn sở hữu hoặc được ủy quyền quản lý. Nêu rõ giấy phép, sự cho phép, tranh chấp đã biết và thay đổi quan trọng. Không dùng dịch vụ để gửi báo cáo sai lệch, ngăn cản biểu đạt hợp pháp hoặc gửi nội dung trái pháp luật hay nhạy cảm không cần thiết.',
      },
      {
        heading: 'Quyết định độc lập của nền tảng',
        text: 'Nền tảng và nhà cung cấp quyết định việc xử lý, yêu cầu bổ sung và thời gian phản hồi. Chúng tôi không trực tiếp gỡ nội dung và không bảo đảm gỡ bỏ, đình chỉ tài khoản, xóa kết quả tìm kiếm hay kết quả cụ thể nào. Vụ việc tranh chấp có thể cần luật sư đủ chuyên môn.',
      },
      {
        heading: 'Nội dung tham khảo và liên kết ngoài',
        text: 'Bài viết cung cấp kiến thức chung, có thể không phản ánh mọi khu vực pháp lý hoặc thay đổi về luật và quy trình. Hãy tham khảo luật sư để được tư vấn theo từng khu vực. Website bên ngoài hoạt động độc lập và áp dụng điều khoản cùng chính sách riêng khi bạn truy cập.',
      },
      {
        heading: 'Tài liệu và khả năng truy cập',
        text: 'Tôn trọng quyền sở hữu trí tuệ khi sử dụng tài liệu website. Không mạo danh chúng tôi, gây cản trở website hoặc truy cập trái phép. Chúng tôi hướng đến thông tin chính xác và website hoạt động ổn định nhưng không cam kết truy cập liên tục hoặc thông tin không có lỗi. Không nội dung nào loại trừ quyền hay nghĩa vụ không được phép loại trừ theo luật.',
      },
      {
        heading: 'Cập nhật và thắc mắc',
        text: 'Điều khoản sửa đổi được đăng tại đây với ngày cập nhật. Thỏa thuận dịch vụ riêng bằng văn bản điều chỉnh công việc đã thống nhất. Liên hệ inquiry@nguyenlinhprotector.net nếu cần làm rõ trước khi sử dụng website hoặc yêu cầu hỗ trợ.',
      },
    ],
  },
};
