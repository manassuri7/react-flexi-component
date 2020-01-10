const config = [
  {
    name: "userName",
    inputType: "Text",
    value: "Adam",
    children: [
      {
        name: " Permanent address",
        inputType: "TextArea",
        value: "",
        children: [
          { name: "Correspondence Address", inputType: "TextArea", value: "" },
          { name: "Mobile", inputType: "Text", value: "" }
        ]
      },
      { name: "Phone Number", inputType: "Text", value: "" }
    ]
  }
];
export default config;
