import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";
import { Button, ContactItem } from "./Contact.styled";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <p>
        {name}: <span>{number}</span>
        <Button onClick={() => dispatch(deleteContacts(id))}>Delete</Button>
      </p>
    </ContactItem>
  );
}
