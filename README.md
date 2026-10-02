# WebGIS ngập lụt TP.HCM – dữ liệu 2026

Bản này giữ giao diện WebGIS hiện tại và thay dữ liệu minh họa bằng dữ liệu từ file chi tiết ngập năm 2026.

## Chức năng
- Trang chủ
- Bản đồ các điểm ngập
- Dữ liệu ngập
- Cảnh báo
- Thống kê
- Tìm kiếm và lọc dữ liệu
- Bản đồ vệ tinh / bản đồ đường

## Chạy trên máy
```bash
npm install
npm start
```
Mở: http://localhost:3000

## Dữ liệu
- `public/data/flood-data.json`: dữ liệu đã chuẩn hóa
- `database/flood_data.sql`: dữ liệu để nhập PostgreSQL

Lưu ý: tọa độ trong bản đồ là tọa độ đại diện cho tuyến đường/khu vực để phục vụ hiển thị không gian. Nếu có tọa độ điểm ngập chính thức, thay trực tiếp trong `flood-data.json`.
