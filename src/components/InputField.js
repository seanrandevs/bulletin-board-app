import React from 'react'
import { Form, Button } from 'react-bootstrap';

const InputField = () => {
  return (
    <div className='input-fields'>
        <Form>
           <Form.Label className='add-label'>Add New Post</Form.Label>
            <Form.Group>
              <Form.Label className='label'>Title:</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group>
              <Form.Label className='label'>User:</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group>
              <Form.Label className='label'>Content:</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <div className="d-grid gap-2">
            <Button className='button' size='lg' variant="dark" type="submit">
                Save Post
            </Button>
            </div>
        </Form>
    </div>
  );
}

export default InputField