interface IEmployee {
  id: number;
  name: string;
  email: string;
  company: string;
  payment: {
    icon: string;
    ccnumber: string;
    label: string;
  };
  date: string;
}

export { IEmployee };

//export default employees;
