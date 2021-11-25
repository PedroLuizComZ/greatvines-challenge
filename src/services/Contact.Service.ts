import axios from "axios";
import Cookies from "js-cookie";
import { Contact, ContactData } from "../interfaces/Contact.Interface";

export const ContactListService = async () => {
  return new Promise<Contact[]>(async function (resolve, reject) {
    axios
      .get(
        `${Cookies.get(
          "instanceUrl"
        )}/services/data/v53.0/query/?q=SELECT+name+from+Account`,
        { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
      )
      .then((res) => {
        resolve(res.data.records);
      })
      .catch((_err) => {
        reject(_err);
      });
  });
};

export const CreateContactService = async ({FirstName, LastName}: ContactData) => {
  return new Promise<Contact[]>(async function (resolve, reject) {
    axios
      .post(
        `${Cookies.get("instanceUrl")}/services/data/v53.0/sobjects/Account/`,
        {
          Name: `${FirstName} ${LastName}`,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        resolve(res.data.records);
      })
      .catch((_err) => {
        reject(_err);
      });
  });
};
