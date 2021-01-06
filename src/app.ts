import { main } from './main';
import { PORT } from './config/config';

const start = () => {
  console.log(`🕵 Server running on port:${PORT}`);
};
main.listen(PORT, start);
