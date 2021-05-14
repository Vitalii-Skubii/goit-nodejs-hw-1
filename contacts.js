import fs from "fs/promises";
import path from "path";
import shortid from "shortid";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const contactsPath = path.join(resolve(__dirname, "./db/contacts.json"));
//   if (err) {
//     return;
//   }
//   fs.writeFile(contacts.json, '1', (err)=>{
// if (err) {
//         return
//     }
// });
// });

async function listContacts() {
  try {
    const response = await fs.readFile(contactsPath);
    let contacts = JSON.parse(response);
    return console.table(contacts);
  } catch (err) {
    console.error(err.message);
  }
}

// function listContacts() {
//   // ...твой код
//   fs.readFile(contactsPath, "utf-8", (err, data) => {
//     if (err) {
//       return;
//     }
//     const content = JSON.parse(data);
//     console.table(content);
//   });
// }

async function getContactById(contactId) {
  // ...твой код
  try {
    const response = await fs.readFile(contactsPath);
    let contacts = JSON.parse(response);
    const findContact = contacts.find(({ id }) => id === contactId);
    return console.table(findContact);
  } catch (error) {
    console.error("contact not found");
  }
}

async function removeContact(contactId) {
  // ...твой код
  try {
    const response = await fs.readFile(contactsPath);
    let contacts = JSON.parse(response);
    const filteredContacts = contacts.filter(({ id }) => id !== contactId);
    return console.table(filteredContacts);
  } catch (error) {
    console.error("contact not found");
  }
}

async function addContact(name, email, phone) {
  // ...твой код
  try {
    const response = await fs.readFile(contactsPath);
    let contacts = JSON.parse(response);
    const contactNew = { id: shortid.generate(), name, email, phone };
    const contactsList = JSON.stringify([contactNew, ...contacts], null, "\t");

    await fs.writeFile(contactsPath, contactsList);
    return console.table(contactsList);
  } catch (error) {
    console.error(error.message);
  }
}

export { listContacts, getContactById, removeContact, addContact };
