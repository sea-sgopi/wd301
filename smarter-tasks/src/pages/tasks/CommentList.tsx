import { useMembersState } from '../../context/members/context';
import { useCommentsState } from '../../context/comment/context';
import { CommentDetails } from '../../context/comment/types';


export default function CommentList() {
  const commentState = useCommentsState();
  const memberState = useMembersState();

  const dateFormatter = new Intl.DateTimeFormat('en-us', {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const { comments, isLoading, isError, errorMessage } = commentState;

  console.log("Comments from the commentlist using commentstate",commentState)
  console.log("Comments in the webpage",comments)

  if (comments.length === 0 && isLoading) {
    return <p className='mt-3 font-bold text-yellow-400'>Loading....</p>;
  }

  if (isError) {
    return <p className='mt-3 text-pink-500'>{errorMessage}</p>;
  }

  const OwnerComment = (ownerId : any) => {
    const assignee = memberState?.members?.find(
      (member) => member.id === ownerId
    );
    return assignee?.name || 'Unknown';
  }

  return (
    <div className='mt-3'>
      <h2 className='font-bold'>Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment: CommentDetails) => (
          <div className='comment my-3 bg-slate-400 rounded p-3' key={comment.id}>
            <div className='flex justify-between'>
              <h2 className='font-semibold'>{OwnerComment(comment.owner)}:</h2>
              <p className='text-sm text-gray-700 font-semibold'>
                {dateFormatter.format(new Date(comment.createdAt))}
              </p>
            </div>
            <p>{comment.description}</p>
          </div>
        ))
      )}
    </div>
  );
}