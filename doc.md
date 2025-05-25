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
