
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCommentsDispatch, useCommentsState } from '../../context/comment/context';
import { CommentDetails } from '../../context/comment/types';
import { addComment, refreshComments } from '../../context/comment/actions';
import CommentList from './CommentList';
type CommentDataPayload = Omit<CommentDetails, "task_id" | "owner" >;

export default function Comments() {
  const { projectID, taskID } = useParams();
  const commentDispatch = useCommentsDispatch()
//   const commentsState = useCommentsState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentDataPayload>({
  });

  const onSubmit: SubmitHandler<CommentDataPayload> = async (data) => {
    const { description } = data
   const result =  await addComment(commentDispatch, `${projectID}`, `${taskID}`, {description})

    if(result == null) {
        console.log("Added the comment successfully");
    }
  };

  return (
    <div className="mt-2">
   <h2><strong>Add a Comment</strong></h2> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          required
          placeholder="Enter comment in this task"
          id="commentBox"
          {...register("description", { required: true })}
          className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />

        <button
          type="submit"
          id='addCommentBtn'
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
         Add Comment
        </button>
      </form>
      <CommentList />
    </div>
  )
}