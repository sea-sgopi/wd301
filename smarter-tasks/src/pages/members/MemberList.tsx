import React, { useEffect, Suspense } from 'react';
import { fetchMembers } from "../../context/members/actions";

// So, let's import the useMembersDispatch custom hook.
import { useMembersDispatch } from "../../context/members/context";

// I'll import the MemberListItems component from the same folder. 
// This I'll define next.
const MemberListItems = React.lazy(() => import('./MemberListItems'));
import ErrorBoundary from "../../components/ErrorBoundary";
const MemberList: React.FC = () => {

  // I'll define a new constant called dispatchMembers, 
  // to call the useMembersDispatch() hook.
  const dispatchMembers = useMembersDispatch();
  
  useEffect(() => {
    // And I'll pass the `dispatchMembers` to `fetchMembers` function.
    fetchMembers(dispatchMembers)
  }, [dispatchMembers])
  return (
    <ErrorBoundary>
    <Suspense fallback={<div className="suspense-loading">Loading members...</div>}>
        <MemberListItems />
    </Suspense>
  </ErrorBoundary>
  );
};
export default MemberList;