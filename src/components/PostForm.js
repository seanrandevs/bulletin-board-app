import { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../redux/postsSlice';
import { selectAllUsers } from '../redux/userSlice';

const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onUserChanged = e => setUserId(e.target.value);

  const onSavePost = (e) => {
    e.preventDefault();
    if(title && content) {
      dispatch(
        postAdded(title, content, userId)
      )
      setTitle('');
      setContent('');
    }
  }
const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className='input-fields'>
        <Form>
           <Form.Label className='add-label'>Add New Post</Form.Label>
            <Form.Group className='group'>
              <Form.Label>Title:</Form.Label>
              <Form.Control 
              data-testid="postTitle"
              id="postTitle" 
              name="postTitle" 
              value={title} 
              onChange={onTitleChanged} 
              type='text' 
              />
              <Form.Group>
                <Form.Label>Author:</Form.Label>
                <Form.Select 
                id='postAuthor' 
                value={userId} 
                onChange={onUserChanged}>
                {userOptions}
                </Form.Select>
              </Form.Group>
            </Form.Group>
            <Form.Group className='group'>
              <Form.Label>Content:</Form.Label>
              <Form.Control 
              data-testid="postContent"
              id="postContent" 
              name="postContent" 
              value={content} 
              onChange={onContentChanged} 
              as="textarea" 
              rows={2} 
              />
            </Form.Group>
            <div className="d-grid gap-2">
            <Button 
            data-testid="button"
            className='button' 
            size='lg' 
            variant="dark" 
            type="submit"
            disabled={!canSave}
            onClick={onSavePost}
            >
                Save Post
            </Button>
            </div>
        </Form>
    </div>
  );
}

export default PostForm