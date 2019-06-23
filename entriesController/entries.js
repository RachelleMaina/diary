/* eslint-disable class-methods-use-this */
import db from '../db/db';

class EntriesController {
  // get all entries
  getAllEntries(req, res) {
    res.status(200).send({
      success: 'true',
      message: 'all entries',
      entries: db
    });
  }

  // get one entry
  getEntry(req, res) {
    const id = parseInt(req.params.id, 10);
    db.map(entry => {
      if (entry.id === id) {
        res.status(200).send({
          success: 'true',
          message: 'entry',
          entries: entry
        });
      }
      return res.status(400).send({
        success: false,
        message: 'entry does not exist'
      });
    });
  }

  // create an entry
  createEntry(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: false,
        message: 'title is required'
      });
    }
    if (!req.body.content) {
      return res.status(400).send({
        success: false,
        message: 'content is required'
      });
    }
    const entry = {
      id: db.length + 1,
      date: new Date(),
      title: 'It was a great play',
      content: 'Massa placerat duis ultricies lacus sed turpis tincidunt id'
    };
    db.push(entry);
    return res.status(201).send({
      success: 'true',
      message: 'new entry added',
      entry
    });
  }

  // update todo
  updateEntry(req, res) {
    const id = parseInt(req.params.id, 10);
    let entryFound;
    let itemIndex;
    db.map((entry, index) => {
      if (entry.id === id) {
        entryFound = entry;
        itemIndex = index;
      }

      if (!entryFound) {
        res.status(400).send({
          success: false,
          message: 'entry does not exist'
        });
      }
      if (!req.body.title) {
        res.status(400).send({
          success: false,
          message: 'title is required'
        });
      } else if (!req.body.content) {
        res.status(400).send({
          success: false,
          message: 'title is content'
        });
      }
      const updatedEntry = {
        id: entryFound.id,
        date: new Date(),
        title: req.body.title || entryFound.title,
        content: req.body.content || entryFound.content
      };
      db.splice(itemIndex, 1, updatedEntry);
      return res.status(201).send({
        success: 'true',
        message: 'entry updated',
        updatedEntry
      });
    });
  }

  // delete an entry
  deleteEntry(req, res) {
    const id = parseInt(req.params.id, 10);
    db.map((entry, index) => {
      if (entry.id === id) {
        db.splice(index, 1);
        res.status(200).send({
          success: 'true',
          message: 'entry deleted'
        });
      }
      return res.status(400).send({
        success: false,
        message: 'entry does not exist'
      });
    });
  }
}

const entryController = new EntriesController();
export default entryController;
