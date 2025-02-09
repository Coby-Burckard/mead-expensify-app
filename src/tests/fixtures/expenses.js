import moment from "moment";

export default [
  {
    id: "1",
    description: "gum",
    note: "",
    amount: 195,
    createdAt: moment(0).valueOf()
  },
  {
    id: "2",
    description: "string",
    note: "",
    amount: 12,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "rent",
    note: "",
    amount: 195000,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
