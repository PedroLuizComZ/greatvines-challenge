export interface Contact {
  Name: string;
  attributes: {
    type: string;
    url: string;
  };
}

export interface ContactData {
  FirstName: string;
  LastName: string;
}
