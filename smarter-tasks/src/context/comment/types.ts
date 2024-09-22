type Owner = {
  id: number,
  email: string,
  name: string
}

export type CommentDetails = {
  id: number,
  description: string,
  createdAt: string,
  updatedAt: string,
  task_id: number,
  owner: number,
  User: Owner
};

export type CommentsState = {
    comments: CommentData[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  
  // Actions that are available
  export enum CommentListAvailableAction {
    // Add actions for fetching COMMENTS from server
    FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",

    CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
    CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
    CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",

    REORDER_COMMENTS = "REORDER_COMMENTS",
  }
  
  // Create a type to hold list of actions that can be dispatched
  export type CommentsActions =
    | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }
    | { type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS; payload: CommentData[] }
    | { type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
    | { type: CommentListAvailableAction.CREATE_COMMENT_REQUEST }
    | { type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS }
    | { type: CommentListAvailableAction.CREATE_COMMENT_FAILURE; payload: string }
    | { type: CommentListAvailableAction.REORDER_COMMENTS; payload: CommentData[] }

  // A type to hold dispatch actions in a context.
  export type CommentsDispatch = React.Dispatch<CommentsActions>;

  export type ColumnData = {
    id: string;
    title: string;
    CommentIDs: string[];
  };

  export type CommentData =  Omit<CommentDetails, "id" | "updatedAt" | "User">;



