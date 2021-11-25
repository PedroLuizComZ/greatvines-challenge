import { ContactData } from "../interfaces/Contact.Interface";
import { ContactListService, CreateContactService } from "../services/Contact.Service";

export const ContactListController = async () => {
  try {
    return await ContactListService();
  } catch (error) {
    return [];
  }
};

export const CreateContactController = async (contact:ContactData) => {
  if(contact.FirstName.length === 0 || contact.LastName.length === 0 ){
    return {
      status: 'error',
      description:  'Name field cannot be empty'
    }
  }

  try {
     await CreateContactService(contact);
    return {
      status: 'success',
      description:  'Contact registered successfully'
    }
  } catch (error) {
    return {
      status: 'error',
      description:  error
    }
  }
};
