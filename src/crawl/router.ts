import { Router, Request, Response } from 'express';

const router = Router();
router.route('/crawl').get((req: Request, res: Response) => {
  res.status(200).send({
    msg: '🪐 Welcome to API Crawl',
  });
});

export { router };
