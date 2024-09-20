import { useMembersState, useMembersDispatch } from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";

export default function MemberListItems() {

  // I'll define a new constant called `state`, to call the useMembersState() hook, 
  // and get access to Members state.
  const state: any = useMembersState();
  const dispatchMembers = useMembersDispatch();

  // Next, I'll destructure the state object to gain access to Members, 
  // isLoading, isError and errorMessage property.
  const { members, isLoading, isError, errorMessage } = state
  console.log(members);

  // If `isLoading` is true, and there are no Members, in that case, 
  // I'll show a loading text
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  
  const handleDelete = async (id: number) => {
    const response = await deleteMember(dispatchMembers, id); // Call the deleteMember action
    if (!response.ok) {
      console.error('Failed to delete member:', response.error);
    }
  };

// Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  // And finally I'll iterate over the Members object to show the 
  // individual Members card.
  return (
    <>
      {members.map((member: any, index: number) => (
        <div key={member.id ?? index } className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">Name: {member.name}</h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">Email: {member.email}</h5>
          <button
            onClick={() => handleDelete(member.id)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Delete
          </button>
        </div>
      ))}        
    </>
  );
}