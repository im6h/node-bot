import { Router, Request, Response } from 'express';

const router = Router();
router.route('/bot').get((req: Request, res: Response) => {
  res.status(200).send({
    msg: '🪐 Welcome to API Bot',
  });
});

export { router };
