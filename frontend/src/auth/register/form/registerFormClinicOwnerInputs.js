import { formValidators } from "../../../validators/formValidators";

export const registerFormClinicOwnerInputs = [
  {
    tag: "Full Name",
    name: "name",
    type: "text",
    defaultValue: "",
    isRequired: true,
    validators: [formValidators.notEmptyValidator],
  },
  {
    tag: "Corporative Email",
    name: "email",
    type: "text",
    defaultValue: "",
    isRequired: true,
    validators: [formValidators.notEmptyValidator],
  }
];
