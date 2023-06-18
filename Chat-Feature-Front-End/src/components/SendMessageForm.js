import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');
    const [attachment, setAttachment] = useState(null);

    const handleAttachmentChange = (event) => {
        const file = event.target.files[0];
        setAttachment(file);
      };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      // Handle form submission, including the attachment state value
      console.log('Message:', message);
      console.log('Attachment:', attachment);
      // Reset form fields and attachment state
      setMessage('');
      setAttachment(null);
    };

    return <Form
        onSubmit={e => {
            e.preventDefault();
            sendMessage(message);
            // setMessage('');
            handleFormSubmit(e);
        }}>
        <InputGroup>
            <FormControl type="user" placeholder="message..."
                onChange={e => setMessage(e.target.value)} value={message} />
            <InputGroup.Append>
                <label className="btn btn-primary">
                    Attachment
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        accept="image/jpeg"
                        onChange={handleAttachmentChange}
                    />
                </label>
            </InputGroup.Append>
            <InputGroup.Append>
                <Button variant="primary" type="submit" disabled={!message && !attachment}>Send</Button>
            </InputGroup.Append>
        </InputGroup>
    </Form>
}

export default SendMessageForm;