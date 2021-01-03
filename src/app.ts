import { main } from './main';
import { PORT } from './config/config';

const start = () => {
  console.log(`🕵  Server️ running on link: http://localhost:${PORT}‍`);
};
main.listen(PORT, start);
