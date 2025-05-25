# Tổng quan về Cache và các loại Cache trong NextJS

- Cache là bộ nhớ đệm dùng để lưu những request của toàn bộ dự án từ client tới server thông qua caching server.
- 1 request sẽ có thời hạn hoặc kh có thời hạn.
- Check coi trong th caching server đó có dữ liệu kh nếu có thì nó trả về dữ liệu luôn.
- Nếu kh có thì nó sẽ chuyển request tới storage (kho lưu trữ) và nó sẽ trả về và được lưu trong caching server.
- Clear cache hoặc revalidate dùng để xóa cache
