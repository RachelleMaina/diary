import express from 'express';
import EntryController from '../entriesController/entries';

const router = express.Router();
// create url
const url = '/api/v1/entries/';

router.get(`${url}:id`, EntryController.getEntry);
router.get(url, EntryController.getAllEntries);
router.post(url, EntryController.createEntry);
router.put(`${url}:id`, EntryController.updateEntry);
router.delete(`${url}:id`, EntryController.deleteEntry);
export default router;
