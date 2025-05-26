# Tổng quan về Cache và các loại Cache trong NextJS

- Cache là bộ nhớ đệm dùng để lưu những request của toàn bộ dự án từ client tới server thông qua caching server.
- 1 request sẽ có thời hạn hoặc kh có thời hạn.
- Check coi trong th caching server đó có dữ liệu kh nếu có thì nó trả về dữ liệu luôn.
- Nếu kh có thì nó sẽ chuyển request tới storage (kho lưu trữ) và nó sẽ trả về và được lưu trong caching server.
- Clear cache hoặc revalidate dùng để xóa cache

## Revalidate

- Update dữ liệu mới vào cache (bộ nhớ đệm)
- `On-demand revalidation`: Chúng ta sẽ revalidate chủ động khi submit form, truy cập 1 đường link mà muốn lưu cache nó.

### revalidatePath và revalidateTag

- 2 hàm này chỉ hoạt động ở server action hoặc router handler.
- `revalidatePath` là đường link chúng ta truy cập, xử lí theo path là đường link của trang có bao nhiêu thì nó sẽ dính hết.
- `revalidateTag` khi đặc tag nó phải là duy nhất

### Static Rendering và Dynamic Rendering

- Static Rendering (SSG - Server Site Generation): Là quá trình render trang web mà không cần tới server, nó sẽ được lưu trong cache.
  Ưu điểm:
  - Tốc độ: Do nội dung đã được tạo sẵn, thời gian tải trang nhanh hơn vì không cần xử lý server-side.
  - Tối ưu SEO: Nội dung tĩnh dễ dàng được các công cụ tìm kiếm thu thập.
  - Bảo mật: Vì không cần xử lý server-side, giảm nguy cơ bị tấn công.
  - Tiết kiệm tài nguyên: Không cần server chạy liên tục để xử lý yêu cầu.
    Nhược điểm:
  - Nếu dữ liệu thay đổi thường xuyên, trang web sẽ không tự động cập nhật nội dung mới trừ khi build lại.
  - Với các trang sử dụng force-static (như trong Next.js), nội dung được cố định và không thể nhận giá trị mới cho = đến khi được rebuild.
- Dynamic Rendering (SSR - Server Site Rendering): Là quá trình render trang web mà cần tới server, nó sẽ được lưu trong cache.

- Khi xóa dữ liệu thì trong .next vẫn sinh ra các page mà chúng ta đã xóa nhưng nó chỉ xuất hiện trong trường hợp chúng ta đã revalidate (thêm bớt đi dữ liệu).

### Static Rendering với 'use cache' directive

- 'use cache' directive nó sẽ cho bạn làm việc với force-static mặc dù đó là dynamic API luôn.
