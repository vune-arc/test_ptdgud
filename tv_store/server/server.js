import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors'; // ✅ Thêm dòng này
import handler from './api/data.js';

const app = express();

app.use(cors()); // ✅ Thêm dòng này: Cho phép tất cả origin gọi API
app.use(express.json());

app.get('/api/db.json', handler);

app.listen(3000, () => {
  console.log('✅ Server đang chạy ở cổng 3000');
});
