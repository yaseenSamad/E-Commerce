
import dotenv from 'dotenv';
import connectDB from './config/db';
import { app } from './app';


dotenv.config();




connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log(`app listening on port ${port}`)
})
